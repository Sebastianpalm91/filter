import styled from 'styled-components';

export const AdminPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #1A1A1A;
    padding-top: 90px;
`

export const ToggleArticleTypeWrapper = styled.div`
    width: 25%;
    margin: auto;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
`

export const ToggleType = styled.div`
    height: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`
export const Label = styled.span`
    font-family: dp;
    color: #FCFCF9;
    text-transform: uppercase;
    margin: 0px 7px;
`

export const ToggleButton = styled.div`
    width: 14px;
    height: 14px;
    background: #E1AB99;
    border-radius: 50%;
    position: relative;
    &::after {
        transition: transform .25s cubic-bezier(.17,.67,.83,.67);
        transform: translate(50%, 50%) ${({ isArticle }) => isArticle ? 'scale(1)' : 'scale(0)'};
        display: inline-block;
        content: "";
        background: #1A1A1A;
        width: 50%;
        height: 50%;
        border-radius: 50%;
        position: absolute;
    }
`
export const ActionButtonsContainer = styled.div`
    width: 50%;
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
`

export const ActionButton = styled.button`
    color: #1A1A1A;
    background: ${props => props.bg};
    width: 45%;
    border-radius: 6px;
    text-transform: uppercase;
    border: none;
    height: 64px;
    font-family: dp_bold;
    font-size: 1.5rem;
    letter-spacing: 0.08rem;
    cursor: pointer;
`
