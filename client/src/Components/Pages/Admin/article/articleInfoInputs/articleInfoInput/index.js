import React, { Component } from 'react';

import { InputWrapper, InputLabel, InputTitle, TextInput, Container, FileInput, FileInputLabel, ImgPreview, AuthorsWrapper, InputContainer } from './styles';
import { AdminArticleContext } from '../../';
import CalendarContainer from '../calendarContainer';
import capitalize from '../../../../../../utility/capitalize';

class ArticleInfoInput extends Component {

    state = {
        ImgPreviewSrc: null,
    }

    getInputType = ({ type, title, label, isTitle, titles, name, names }, context) => {

        if (titles) {
            const inputs = titles.map((title, index) => {
                return (
                    <InputContainer key={`${title}-${index}`}>
                        <InputTitle>{capitalize(title)}</InputTitle>
                        <TextInput isTitle={isTitle} placeholder={capitalize(`${title}...`)} type={type} name={names[index]} onChange={context.handleInputChange} />
                    </InputContainer>

                )
            })
            return <AuthorsWrapper> {inputs} </AuthorsWrapper>;
        }

        switch (type) {
            case 'text':
                return <TextInput isTitle={isTitle} placeholder={capitalize(`${title}...`)} type={type} name={name} onChange={context.handleInputChange} />
                break;
            case 'file':
                return (
                    <React.Fragment>
                        <FileInput name={name} id={`${title}-file`} type={type} onChange={this.previewImage} />
                        <FileInputLabel htmlFor={`${title}-file`}>lägg till</FileInputLabel>
                        {
                            this.state.ImgPreviewSrc && <ImgPreview src={this.state.ImgPreviewSrc} alt="preview" />
                        }
                    </React.Fragment>
                    )
                break;
            case 'calendar':
                return <CalendarContainer />
                break;
            default:

        }
    }

    previewImage = ({ target }) => {
        const file = target.files[0];
        if (file) {
             const reader = new FileReader();
             reader.onload = e => {
                 this.setState({
                     ImgPreviewSrc: e.target.result,
                 })
             };
             reader.readAsDataURL(file);
         }
    }

    render() {

        const { type, title, label, isTitle } = this.props;
        return (
            <AdminArticleContext.Consumer>
                {
                    (context) => {
                        return (
                            <Container>
                                <InputLabel>{label}</InputLabel>
                                <InputWrapper>
                                    { title && <InputTitle>{capitalize(title)}</InputTitle> }
                                    {this.getInputType(this.props, context)}
                                </InputWrapper>
                            </Container>
                        )
                    }
                }
            </AdminArticleContext.Consumer>
        );
    }

}

export default ArticleInfoInput;
