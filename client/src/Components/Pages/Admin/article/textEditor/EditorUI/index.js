import React, { Component } from 'react';

import { UIContainer, StyleSpan, Label, EditorAction, ListContainer, FileUploadButton } from './styles';

import capitalize from '../../../../../../utility/capitalize';

class EditorUI extends Component {

    state = {
        showListTypes: false,
    }

    toggleActive = ({ target : element }) => {
        if (element.classList.toggle('active')) {
            [...element.parentNode.children].forEach(x => x.classList.remove('active'))
            element.classList.add('active');
        }
    }

    toggleList = e => {
        e.preventDefault();
        this.props.editor.focus();
        this.setState({ showListTypes: !this.state.showListTypes });
    }


    render() {

        const  { toggleBlockType, toggleInlineStyle, uploadImage } = this.props.utils;

        return (
            <UIContainer>
                <Label>Här anger du formatstilar.</Label>
                <EditorAction>
                    <StyleSpan onClick={this.toggleActive} type="header" data-block-type='header-two' onMouseDown={toggleBlockType} />
                    <Label>{capitalize('styckesrubrik')}</Label>
                </EditorAction>
                <EditorAction>
                    <StyleSpan onClick={this.toggleActive} type="bold" data-style='bold' onMouseDown={toggleInlineStyle}></StyleSpan>
                        <Label>{capitalize('fet text')}</Label>
                </EditorAction>
                <EditorAction>
                    <StyleSpan onClick={this.toggleActive} type="italic" data-style='italic' onMouseDown={toggleInlineStyle} />
                        <Label>{capitalize('kursiv text')}</Label>
                </EditorAction>
                <EditorAction>
                    <StyleSpan onClick={this.toggleActive} type="underline" data-style='underline' onMouseDown={toggleInlineStyle} />
                        <Label>{capitalize('understruken text')}</Label>
                </EditorAction>
                <EditorAction>
                    <StyleSpan onClick={this.toggleActive} type="quote" data-block-type='blockquote' onMouseDown={toggleBlockType} />
                        <Label>{capitalize('citat')}</Label>
                </EditorAction>
                <EditorAction listIsOpen={this.state.showListTypes}>
                    <StyleSpan onClick={(e) => { this.toggleActive(e); this.toggleList(e) }} type="list" data-block-type='ordered-list-item' />
                        <Label>{capitalize('lista')}</Label>
                            {
                                this.state.showListTypes &&
                                    <ListContainer>
                                        <Label onMouseDown={toggleBlockType} data-block-type='ordered-list-item' >{capitalize('numrerad lista')}</Label>
                                        <Label onMouseDown={toggleBlockType} data-block-type='unordered-list-item' >{capitalize('punklista')}</Label>
                                    </ListContainer>
                            }
                </EditorAction>
                <EditorAction>
                        <StyleSpan onClick={this.toggleActive} type="link" data-block-type='blockquote' />
                        <Label>{capitalize('länk')}</Label>
                </EditorAction>
                <Label>Här infogar du objekt.</Label>
                <EditorAction>
                        <StyleSpan onClick={this.toggleActive} type="info" data-block-type='code-block' onMouseDown={toggleBlockType} />
                        <Label>{capitalize('faktaruta')}</Label>
                </EditorAction>
                <EditorAction>
                    <Label htmlFot='article-image' style={{ display: 'flex', alignItems: 'center' }}>
                        <StyleSpan onClick={this.toggleActive} type="img" data-block-type='blockquote' />
                        <FileUploadButton type="file" id="article-image" onChange={(e) => {
                                uploadImage(e);
                            }}/>
                        <Label>{capitalize('bild')}</Label>
                    </Label>
                </EditorAction>
            </UIContainer>
        );
    }

}

export default EditorUI;
