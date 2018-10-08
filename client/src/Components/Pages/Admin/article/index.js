import React, { Component } from 'react';
import { stateToHTML } from 'draft-js-export-html';
import axios from 'axios';

import endpoint from '../../../../settings';
import TextEditor from './textEditor';
import ArticleInfoInputs from './articleInfoInputs';
import { AdminPageWrapper, ToggleArticleTypeWrapper, ToggleType, Label, ToggleButton } from './styles';


export const AdminArticleContext = React.createContext();

class AdminArticle extends Component {



    state = {
        isArticle: false,
        data: {
            // location 1 = Filterbubblan
            // location 2 = artikel
            location: 1,
            thumbnail: null,
            author: '',
            photographer: '',
            illustrations: '',
            articleType: '',
            subject: '',
            magazineNumber: 0,
            date: '',
            preamble: '',
            article: '',
        }
    }

    handleClick = () => {

    }

    handleInputChange = ({ target: { name, value } }) => {
        console.log(2);
    }

    handleFileUpload = ({ target: { files, name } }) => {
        const file = files[0];
        this.setState({
            files: {
                ...this.state.files,
                [name]: file
            }
        });
    }

    setEditorState = (editorState) => {
        this.setState({
            editorState
        });
    }

    setDate = date => {
        this.setState({
            data: {
                ...this.state.data,
                date,
            }
        });
    }

    toggleIsArticle = () => {
        this.setState({
            isArticle: !this.state.isArticle,
        });
    }

    async submit(e) {
        e.preventDefault();

        const { author, title, tag, illustrations, preamble, magazineNumber, files, editorState } = this.state.data;

        const contentState = editorState.getCurrentContent();
        const html = stateToHTML(contentState);

        return;
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

        const res = await axios.post(`${endpoint.uri}/article/upload`, data, {
            'content-type': 'multipart/form-data'
        });
    }

    render() {

        const { setEditorState, handleFileUpload, handleInputChange, handleClick, setDate } = this;

        return (
            <AdminArticleContext.Provider value={{ setEditorState, handleFileUpload, handleInputChange, handleClick, setDate }}>
                <AdminPageWrapper>
                    <ToggleArticleTypeWrapper>
                        <ToggleType onClick={this.toggleIsArticle}>
                            <Label>artikel</Label>
                            <ToggleButton isArticle={this.state.isArticle} />
                        </ToggleType>
                        <ToggleType onClick={this.toggleIsArticle} >
                            <Label>Filterbubblan</Label>
                            <ToggleButton isArticle={!this.state.isArticle} />
                        </ToggleType>
                    </ToggleArticleTypeWrapper>
                    <ArticleInfoInputs isArticle={this.state.isArticle} />
                    <TextEditor />
                </AdminPageWrapper>
            </AdminArticleContext.Provider>
        );
    }
}

export default AdminArticle;
