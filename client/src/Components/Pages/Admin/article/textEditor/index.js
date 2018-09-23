import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

import { StyleSpan, EditorWrapper, EditorContainer, UIContainer } from './styles';

class TextEditor extends Component {

    constructor(props) {
      super(props);
      this.state = {
          editorState: EditorState.createEmpty()
      }

      this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
      this.toggleBlockType = this.toggleBlockType.bind(this);
      this.toggleActive = this.toggleActive.bind(this);
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

    toggleBlockType(e) {
        e.preventDefault();
        const { target } = e;

        this.toggleActive(target);

        const blockType = target.dataset.blockType;

        this.onChange(
            RichUtils.toggleBlockType(this.state.editorState, blockType)
        );

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
          <EditorWrapper>
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
          </EditorWrapper>
      );
    }

}

export default TextEditor;
