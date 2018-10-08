import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

import { AdminArticleContext } from '../';
import EditorUI from './EditorUI/';
import { EditorContainer, EditorTextWrapper } from './styles';
import { Label } from './EditorUI/styles';

class TextEditor extends Component {

    state = {
        editorState: EditorState.createEmpty(),
    }

    setDomEditorRef = ref => this.editor = ref;

    focus = () => this.editor.focus();

    onChange = editorState => {
        this.setState({
            editorState
        });
    }

    toggleBlockType = e => {
        e.preventDefault();
        const { target } = e;

        const blockType = target.dataset.blockType;

        this.onChange(
            RichUtils.toggleBlockType(this.state.editorState, blockType)
        );

    }

    toggleInlineStyle = e => {
        e.preventDefault();
        const { target } = e;

        const style = target.dataset.style.toUpperCase();

        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, style)
        );

    }

    render() {

      const { toggleBlockType, toggleInlineStyle } = this;

      return (
          <AdminArticleContext.Consumer>
              {
                  (context) => {
                      return (
                          <EditorContainer>
                              <Label>Här lägger du in allt innehåll som ska finnas inuti artikeln.</Label>
                              <EditorTextWrapper onClick={this.focus}>
                                  <Editor
                                      ref={this.setDomEditorRef}
                                      editorState={this.state.editorState}
                                      onChange={ state => {
                                          this.onChange(state);
                                          context.setEditorState(state);
                                        }
                                    } />
                              </EditorTextWrapper>
                              <EditorUI utils={{ toggleBlockType, toggleInlineStyle }} />
                          </EditorContainer>
                      )
                  }
              }
          </AdminArticleContext.Consumer>
      );
    }

}

export default TextEditor;
