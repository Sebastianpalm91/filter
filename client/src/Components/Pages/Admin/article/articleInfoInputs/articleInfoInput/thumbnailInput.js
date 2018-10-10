import React, { Component } from 'react';

import { FileInput, FileInputLabel, ImgPreview, InputLabel, InputWrapper, Container, InputTitle } from './styles';

import capitalize from '../../../../../../utility/capitalize';

class ThumbnailInput extends Component {

    state = {
        ImgPreview: false,
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

        const { label, name, title } = this.props;

        return (
            <Container>
                <InputLabel>{label}</InputLabel>
                <InputWrapper>
                    <InputTitle>{capitalize(title)}</InputTitle>
                    <FileInput name={name} id={`${title}-file`} type='file' onChange={(e) => { this.previewImage(e); this.props.handleFileUpload(e) }} />
                    <FileInputLabel htmlFor={`${title}-file`}>lägg till</FileInputLabel>
                    {
                        this.state.ImgPreviewSrc && <ImgPreview src={this.state.ImgPreviewSrc} alt="preview" />
                    }
                </InputWrapper>
            </Container>
        );
    }

}

export default ThumbnailInput;
