import styled from 'styled-components';


export const UIContainer = styled.div`
    margin-left: 25px;
    width: 35%;
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    font-family: dp;
    line-height: 32px;
    font-size: 16px;
    letter-spacing: 0.06em;
    color: #FCFCF9;
`

export const EditorAction = styled.div`
    width: 100%;
    height: ${ ({ listIsOpen }) => listIsOpen ? 'auto' : '36px' };
    display: flex;
    align-items: center;
    margin: 6px 0px;
    flex-wrap: wrap;
`

export const ListContainer = styled.div`
    width: 100%;
    margin-left: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    label {
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
     }
`

export const StyleSpan = styled.div`
    color: #999;
    cursor: pointer;
    margin-right: 16px;
    padding: 2px 0;
    display: inline-block;
    text-transform: capitalize;
    width: 36px;
    height: 32px;
    background: url(
        ${
        ({ type }) => {
            const img = require(`./assets/${type}.svg`)
            return img;
        }}
    );

    &:hover, &.active {
        background: url(
            ${
            ({ type }) => {
                const img = require(`./assets/${type}-hover.svg`)
                return img;
            }}
        )
    }

`

export const FileUploadButton = styled.input`
    
`
