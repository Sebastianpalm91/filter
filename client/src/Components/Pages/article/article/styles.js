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
    width: ${({isReadingView}) => isReadingView ? "60%": "80%"};
`
export const Title = styled.h1`
    color: black;
    font-size: 36px;
    color: ${({isReadingView}) => isReadingView ? "red": "black"};
    line-height: 28px;
`

export const Tag = styled.span`
    color: black;
    font-size: 24px;
    color: ${({isReadingView}) => isReadingView ? "red": "black"};
    line-height: 28px;
`

export const Published = styled.span`
    color: black;
    font-size: 24px;
    color: ${({isReadingView}) => isReadingView ? "red": "black"};
    line-height: 28px;
`

export const Paragraph = styled.p`
    color: black;
    font-size: 16px;
    color: ${({isReadingView}) => isReadingView ? "red": "black"};
    line-height: 28px;


`
