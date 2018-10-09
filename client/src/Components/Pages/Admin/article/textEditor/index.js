import React, { Component } from 'react';
import { EditorState, RichUtils, AtomicBlockUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor'
import 'draft-js/dist/Draft.css';
import createBlockBreakoutPlugin from 'draft-js-block-breakout-plugin'

import './styles.css';
import { AdminArticleContext } from '../';
import EditorUI from './EditorUI/';
import { EditorContainer, EditorTextWrapper } from './styles';
import { Label } from './EditorUI/styles';

const blockBreakoutPlugin = createBlockBreakoutPlugin({
    doubleBreakoutBlocks: ['blockquote', 'unordered-list-item', 'ordered-list-item', 'code-block', 'atomic']
});

const plugins = [blockBreakoutPlugin];

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

    blockStyles = contentBlock => {
        const type = contentBlock.getType();
        switch (type) {
            case 'blockquote':
                return 'blockquote';
            case 'atomic':
                return 'info-square';
            default:
                return 'unstyled';
        }
    }

    insertImage = (editorState, base64) => {
        const contentState = editorState.getCurrentContent();

        const contentStateWithEntity = contentState.createEntity(
          'image',
          'IMMUTABLE',
          { src: base64 },
        );

        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(
          editorState,
          { currentContent: contentStateWithEntity },
        );
        return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
    }


    handleKeyCommand = (editorState, command) => {
        if (command === 'split-block') {
            const key = editorState.getSelection().getAnchorKey();
            const currentBlockType = editorState.getCurrentContent().getBlockForKey(key);
            document.querySelector(`[data-style=${currentBlockType}]`).classList.remove('active');

        }
    }

    uploadImage = ({ target }) => {
        const file = target.files[0];
        if (file) {
             const reader = new FileReader();
             reader.onload = e => {
                 this.insertImage(this.state.editorState, e.target.result)
             };
             reader.readAsDataURL(file);
         }
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
                                    }
                                    plugins={plugins}
                                    blockStyleFn={this.blockStyles}
                                    handleKeyCommand={this.handleKeyCommand}
                                     />
                              </EditorTextWrapper>
                              <EditorUI editor={this.editor} utils={{ toggleBlockType, toggleInlineStyle }} />
                          </EditorContainer>
                      )
                  }
              }
          </AdminArticleContext.Consumer>
      );
    }

}

export default TextEditor;
