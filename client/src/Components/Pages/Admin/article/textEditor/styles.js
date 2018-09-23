import styled from 'styled-components';

export const EditorWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
`

export const EditorContainer = styled.div`
    border: 1px solid #2f2f2f;
    width: 70%;
    height: 400px;
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
