import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import 'draft-js/dist/Draft.css';
import axios from 'axios';

import endpoint from '../../../../../settings';
import { StyleSpan, EditorWrapper, EditorContainer, UIContainer, SubmitButton, Input, Thumbnail } from './styles';

class TextEditor extends Component {

    constructor(props) {
      super(props);
      this.state = {
          editorState: EditorState.createEmpty(),
          title: '',
          author: '',
          files: {
              author_img: {},
              thumbnail: {},
              articles: [],
          },
      }

      this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
      this.toggleBlockType = this.toggleBlockType.bind(this);
      this.toggleActive = this.toggleActive.bind(this);
      this.submit = this.submit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    onChange(editorState) {

        this.setState({
            editorState
        })
    }

    toggleActive(element) {
        if (element.classList.toggle('active')) {
            [...element.parentNode.children].forEach(x => x.classList.remove('active'))
            element.classList.add('active');
        }

    }

    async submit(e) {
        e.preventDefault();

        const { author, title, files, editorState } = this.state;

        const contentState = editorState.getCurrentContent();
        const html = stateToHTML(contentState);
        const data = new FormData();

        data.append('author', author);
        data.append('title', title);
        data.append('thumbnail', files.thumbnail);
        data.append('author_img', files.author_img);
        data.append('content', html);

        const res = await axios.post(`${endpoint.uri}/article/upload`, data, {
            'content-type': 'multipart/form-data'
        });
        console.log(res);
    }

    handleFileUpload({ target: { files, name } }) {
        const file = files[0];
        this.setState({
            files: {
                ...this.state.files,
                [name]: file
            }
        })

    }


    toggleBlockType(e) {
        e.preventDefault();
        const { target } = e;

        this.toggleActive(target);

        const blockType = target.dataset.blockType;

        this.onChange(
            RichUtils.toggleBlockType(this.state.editorState, blockType)
        );

    }

    handleInputChange({ target: { name, value } }) {
        this.setState({
            [name]: value
        })
    }

    toggleInlineStyle(e) {
        e.preventDefault();
        const { target } = e;

        this.toggleActive(target);

        const style = target.dataset.style.toUpperCase();

        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, style)
        );

    }

    render() {
      return (
          <EditorWrapper method='enctype="multipart/form-data"' onSubmit={this.submit}>
              <Input onChange={this.handleInputChange} placeholder="Rubrik" type="text" name="title" title='true' />
              <Input onChange={this.handleInputChange} placeholder='författare' type="text" name="author" />
              omslagsbild
              <Thumbnail onChange={this.handleFileUpload} type='file' name='thumbnail' />
              författare
              <Thumbnail onChange={this.handleFileUpload} type='file' name='author_img' />
              <EditorContainer>
                  <UIContainer>
                      <StyleSpan data-block-type='header-one' onMouseDown={this.toggleBlockType}>h1</StyleSpan>
                      <StyleSpan data-block-type='header-two' onMouseDown={this.toggleBlockType}>h2</StyleSpan>
                      <StyleSpan data-block-type='header-three' onMouseDown={this.toggleBlockType}>h3</StyleSpan>
                      <StyleSpan data-block-type='header-four' onMouseDown={this.toggleBlockType}>h4</StyleSpan>
                      <StyleSpan data-block-type='header-five' onMouseDown={this.toggleBlockType}>h5</StyleSpan>
                      <StyleSpan data-block-type='header-six' onMouseDown={this.toggleBlockType}>h6</StyleSpan>
                      <StyleSpan data-block-type='blockquote' onMouseDown={this.toggleBlockType}>blockquote</StyleSpan>
                      <StyleSpan data-block-type='ordered-list-item' onMouseDown={this.toggleBlockType}>UL</StyleSpan>
                      <StyleSpan data-block-type='unordered-list-item' onMouseDown={this.toggleBlockType}>OL</StyleSpan>
                      <StyleSpan data-style='bold' onMouseDown={this.toggleInlineStyle}>bold</StyleSpan>
                      <StyleSpan data-style='italic' onMouseDown={this.toggleInlineStyle}>italic</StyleSpan>
                      <StyleSpan data-style='underline' onMouseDown={this.toggleInlineStyle}>underline</StyleSpan>
                      <StyleSpan data-style='monospace' onMouseDown={this.toggleInlineStyle}>monospace</StyleSpan>
                  </UIContainer>
                  <Editor editorState={this.state.editorState} onChange={this.onChange.bind(this)} />
              </EditorContainer>
              <SubmitButton type='submit' />
          </EditorWrapper>
      );
    }

}

export default TextEditor;