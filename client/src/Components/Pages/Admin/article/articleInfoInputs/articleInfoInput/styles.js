import styled from 'styled-components';

export const InputWrapper = styled.div`
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 60%;
    padding: 0px 2%;
`

export const InputLabel = styled.label`
    font-family: dp;
    line-height: 1.5rem;
    font-size: 1rem;
    letter-spacing: 0.06em;
    color: #FCFCF9;
    width: 200px;
    text-align: right
    margin-top: 2rem;
`

export const InputTitle = styled.span`
    color: #FCFCF9;
    font-size: 1rem;
    letter-spacing: 0.06rem;
    font-family: dp;
    margin-bottom: 0.8rem;

`

export const Input = styled.input`
    width: ${ ({ isTitle }) => isTitle ? '100%' : '50%' };
    height: 36px;
    color: #1A1A1A;
    font-size: 1.15rem;
    font-family: dp;
    outline: none;
    padding: 6px;
    background: #FCFCF9;
    border-radius: 6px;
    border: none;
`

export const ArticleButton = styled.span`
    border-radius: 6px;
    background: #FCFCF9;
    line-height: 32px;
    padding: 0px 26px;
    font-family: dp;
    height: 32px;
    margin: 10px 15px 10px 0px;
    cursor: pointer;
    transition: all .25s ease-out;
    &:hover, &.active {
        color: #000000;
        background: #E1AB99;
    }
`

export const ButtonsContainer = styled.div`
    width: 75%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const TextArea = styled.textarea`
    width: 100%;
    color: #1A1A1A;
    font-size: 1.15rem;
    font-family: dp;
    outline: none;
    padding: 6px;
    background: #FCFCF9;
    border-radius: 6px;
    border: none;
    height: 300px;
`

export const FileInput = styled.input`
    display: none;
`

export const FileInputLabel = styled.label`
    background: #FCFCF9;
    border-radius: 6px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    font-size: .8rem;
    text-transform: uppercase;
    font-family: dp_medium;
    color: #1A1A1A;
`

export const Container = styled.div`
    width: 85%;
    margin: 36px auto;
    padding: 0 30px;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
`

export const ImgPreview = styled.img`
    width: 150px;
    height: 100px;
    background-size: cover;
    margin-top: 10px;
`

export const AuthorsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const InputContainer = styled.div`
    width: 48%;
    margin: 10px 0px;
    span {
        margin-bottom: 20px;
    }
    &:first-child {
        margin-right: 5%;
    }
    input {
        width: 100%;
        margin-top: 10px;
    }
`
