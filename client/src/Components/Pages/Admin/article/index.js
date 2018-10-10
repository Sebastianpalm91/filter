import React, { Component } from 'react';
import { stateToHTML } from 'draft-js-export-html';
import axios from 'axios';

import endpoint from '../../../../settings';
import TextEditor from './textEditor';
import ArticleInfoInputs from './articleInfoInputs';
import { AdminPageWrapper, ToggleArticleTypeWrapper, ToggleType, Label, ToggleButton, ActionButton, ActionButtonsContainer } from './styles';


export const AdminArticleContext = React.createContext();

class AdminArticle extends Component {

    state = {
        isArticle: false,
        data: {
            // location 1 = Filterbubblan
            // location 2 = artikel
            location: 1,
        }
    }

    handleClick = ({ target }) => {

    }

    handleInputChange = ({ target: { name, value } }) => {
        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        });
    }

    handleFileUpload = ({ target: { files, name } }) => {
        const file = files[0];
        this.setState({
            data: {
                ...this.state.data,
                files: {
                    ...this.state.files,
                    [name]: file
                }
            }
        });
    }

    setEditorContent = (editorState, fileNames) => {
        this.setState({
            data: {
                ...this.state.data,
                fileNames,
                editorState
            }
        });
    }

    setDate = date => {
        this.setState({
            data: {
                ...this.state.data,
                date
            }
        });
    }

    toggleIsArticle = () => {
        this.setState({
            isArticle: !this.state.isArticle,
            data: {
                ...this.state.data,
                location: this.state.isArticle ? 2 : 1,
            }
        });
    }

    async submit(e) {
        e.preventDefault();

        const { author, title, tag, illustrations, preamble, magazineNumber, files, editorState } = this.state.data;

        const contentState = editorState.getCurrentContent();
        const html = stateToHTML(contentState);

        const data = new FormData();

        data.append('thumbnail', files.thumbnail);
        data.append('author_img', files.author_img);
        data.append('illustrations', illustrations);
        data.append('magazineNumber', magazineNumber);
        data.append('preamble', preamble);
        data.append('author', author);
        data.append('title', title);
        data.append('article', html);
        data.append('tag', tag);

        await axios.post(`${endpoint.uri}/article/upload`, data, {
            'content-type': 'multipart/form-data'
        });
    }

    render() {
        const { setEditorContent, handleFileUpload, handleInputChange, handleClick, setDate } = this;
        const { isArticle } = this.state;
        return (
            <AdminArticleContext.Provider value={{ setEditorContent, handleFileUpload, handleInputChange, handleClick, setDate }}>
                <AdminPageWrapper>
                    <ToggleArticleTypeWrapper>
                        <ToggleType onClick={this.toggleIsArticle}>
                            <Label>artikel</Label>
                            <ToggleButton isArticle={isArticle} />
                        </ToggleType>
                        <ToggleType onClick={this.toggleIsArticle} >
                            <Label>Filterbubblan</Label>
                            <ToggleButton isArticle={!isArticle} />
                        </ToggleType>
                    </ToggleArticleTypeWrapper>
                    <ArticleInfoInputs isArticle={isArticle} />
                    <TextEditor />
                    <ActionButtonsContainer>
                        <ActionButton bg="#E1AB99">Förhandsgranska</ActionButton>
                        <ActionButton bg="#B0E199">Publicera</ActionButton>
                    </ActionButtonsContainer>
                </AdminPageWrapper>
            </AdminArticleContext.Provider>
        );
    }
}

export default AdminArticle;
