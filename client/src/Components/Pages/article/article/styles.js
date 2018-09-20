import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
`
export const Title = styled.h1`
    color: black;
    fontSize: 24px;
    color: ${({isReadingView}) => isReadingView ? "red": "black"};
        border: none;
        border-radius: 3px;
`

export const Paragraph = styled.p`
    color: black;
    fontSize: 42px;
    color: ${({isReadingView}) => isReadingView ? "red": "black"};
        border: none;
        border-radius: 3px;
`
