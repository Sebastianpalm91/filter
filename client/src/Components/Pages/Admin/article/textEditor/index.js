import React, { Component } from 'react';
import { EditorState, RichUtils, AtomicBlockUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor'
import 'draft-js/dist/Draft.css';
import createBlockBreakoutPlugin from 'draft-js-block-breakout-plugin';
import createImagePlugin from "draft-js-image-plugin";
import 'draft-js-image-plugin/lib/plugin.css';

import './styles.css';
import { AdminArticleContext } from '../';
import EditorUI from './EditorUI/';
import { EditorContainer, EditorTextWrapper } from './styles';
import { Label } from './EditorUI/styles';

const blockBreakoutPlugin = createBlockBreakoutPlugin();

const imagePlugin = createImagePlugin();

const plugins = [blockBreakoutPlugin, imagePlugin];

class TextEditor extends Component {

    state = {
        editorState: EditorState.createEmpty(),
        imgEntities: [],
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
            case 'code-block':
                return 'info-square';
            case 'atomic':
                return 'article-image';
            default:
                return 'unstyled';
        }
    }

    insertImage = (editorState, base64, fileName) => {
        const contentState = editorState.getCurrentContent();

        const contentStateWithEntity = contentState.createEntity(
          'image',
          'IMMUTABLE',
          { src: base64, }
        );

        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

        const newEditorState = EditorState.set(
          editorState,
          { currentContent: contentStateWithEntity },
        );

        const prefix = Date.now();
        this.state.imgEntities.push({ key: entityKey, fileName: `${prefix}-${fileName}` });


        return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
    }


    setImgSrcToFilename = () => {

        const { editorState, imgEntities } = this.state;

        const contentState = editorState.getCurrentContent();

        for (const { key, fileName } of imgEntities) {
            contentState.replaceEntityData(key, { src: fileName });

        }

    }

    uploadImage = ({ target }) => {
        const file = target.files[0];
        if (file) {
             const reader = new FileReader();
             reader.onload = e => {
                 const newEditorState = this.insertImage(this.state.editorState, e.target.result, file.name);

                 this.setState({editorState: newEditorState})
                 this.setImgSrcToFilename();
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

      const { toggleBlockType, toggleInlineStyle, uploadImage } = this;

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
                                          context.setEditorContent(state, this.state.imgEntities);
                                        }
                                    }
                                    plugins={plugins}
                                    blockStyleFn={this.blockStyles}
                                     />
                              </EditorTextWrapper>
                              <EditorUI editor={this.editor} utils={{ toggleBlockType, toggleInlineStyle, uploadImage }} />
                          </EditorContainer>
                      )
                  }
              }
          </AdminArticleContext.Consumer>
      );
    }

}

export default TextEditor;
