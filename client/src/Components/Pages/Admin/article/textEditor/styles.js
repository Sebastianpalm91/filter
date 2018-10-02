import styled from 'styled-components';

export const EditorWrapper = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

export const EditorContainer = styled.div`
    border: 1px solid #2f2f2f;
    width: 50%;
    height: auto;
    min-height: 300px;
    overflow: hidden;
    padding: 0 30px;
`
export const UIContainer = styled.div`
    border-bottom: 1px solid #2f2f2f;
    padding: 10px 0;
    margin-bottom: 10px;
`

export const StyleSpan = styled.span`
    color: #999;
    cursor: pointer;
    margin-right: 16px;
    padding: 2px 0;
    display: inline-block;
    text-transform: capitalize;
    &.active {
        color: #5890ff;
    }
`

export const EditorTextWrapper = styled.div`
    height: auto;
    min-height: 300px;
    cursor: text;
`

export const SubmitButton = styled.input`

`

export const Thumbnail = styled.input`

`
export const Preamble = styled.textarea`
    width: 50%;
    outline: none;
    border: 1px solid #999;
    margin: 10px 0;
    padding: 5px;
    min-height: 100px;
`

export const Input = styled.input`
    width: 50%;
    outline: none;
    border: 1px solid #999;
    margin: 10px 0;
    padding: 5px;
    height: ${ (props => props.title === 'true' ? '40px' : '20px' ) }
    font-size: ${ (props => props.title === 'true' ? '150%' : '100%' ) }
`
