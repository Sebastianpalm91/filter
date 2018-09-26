import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`

export const ScrollContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 10vh;
    left: 5vw;
`

export const ScrollBarStyles = styled.div `
    height: 400px;
    width: 2px;
    border-radius: 28.96%;
    margin: 12px 0 12px 0;
    background-color: #ECECEC;
    overflow: hidden;
`

export const Inner = styled.div`
    width: 100%;
    background-color: #E1AB99;
`

export const BookMarkShareIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    margin: 12px 0 12px 0;
    background-color: #E1AB99;
    border-radius: 50%;
`
export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: #E1AB99;
    border-radius: 50%;
`
