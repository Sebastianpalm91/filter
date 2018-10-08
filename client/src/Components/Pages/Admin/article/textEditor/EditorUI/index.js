import React, { Component } from 'react';

import { UIContainer, StyleSpan, Label, EditorAction } from './styles';

import capitalize from '../../../../../../utility/capitalize';

class EditorUI extends Component {
    toggleActive = ({ target : element }) => {
        if (element.classList.toggle('active')) {
            [...element.parentNode.children].forEach(x => x.classList.remove('active'))
            element.classList.add('active');
        }
    }

    render() {

        const  { toggleBlockType, toggleInlineStyle } = this.props.utils;

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
                    <StyleSpan onClick={this.toggleActive} type="quote" data-style='quote' onMouseDown={toggleInlineStyle} />
                        <Label>{capitalize('citat')}</Label>
                </EditorAction>
                <EditorAction>
                    <StyleSpan onClick={this.toggleActive} type="list" data-block-type='blockquote' onMouseDown={toggleBlockType} />
                        <Label>{capitalize('lista')}</Label>
                </EditorAction>
                <EditorAction>
                        <StyleSpan onClick={this.toggleActive} type="link" data-block-type='blockquote' onMouseDown={this.toggleList} />
                        <Label>{capitalize('länk')}</Label>
                </EditorAction>
                <Label>Här infogar du objekt.</Label>
                <EditorAction>
                        <StyleSpan onClick={this.toggleActive} type="info" data-block-type='blockquote' onMouseDown={toggleInlineStyle} />
                        <Label>{capitalize('faktaruta')}</Label>
                </EditorAction>
                <EditorAction>
                        <StyleSpan onClick={this.toggleActive} type="img" data-block-type='blockquote' onMouseDown={toggleInlineStyle} />
                        <Label>{capitalize('bild')}</Label>
                </EditorAction>
            </UIContainer>
        );
    }

}

export default EditorUI;
