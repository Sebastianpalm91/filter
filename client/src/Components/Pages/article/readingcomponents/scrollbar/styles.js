import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`

export const ScrollContainer = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    top: 20vh;
    left: 10vw;
`

export const ScrollBarStyles = styled.div `
    height: 400px;
    width: 5px;
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 0.81);
    overflow: hidden;
`

export const Inner = styled.div`
    height: 0;
    width: 100%;
    background-color: red;
`
