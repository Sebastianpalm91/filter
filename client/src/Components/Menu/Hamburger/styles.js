import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    top: 40px;
    right: 40px;
`;

export const Wrapper = styled.div`
    height: 100%;
`;

/*
    Paths
*/
export const Line = styled.path`
    transform: translateX(0px);
    cursor:pointer;
    transition: 1s cubic-bezier(.32,1.97,.62,.55);
    fill: #4a4a4a;
    transform-origin: center;
`;

/*
    Toggle the svg
    and give props to every child depending on its state
*/
export const Toggle = styled.svg`
    transition: .5s ease-in-out;
    cursor: pointer;
    padding: 20px;
    transform-origin: center;
    ${Line}:nth-child(1) {
        ${props => props.active ? `
            transform: rotate(-135deg) translateY(32%);
            transform-origin: center;
        ` : ''}
    }
    ${Line}:nth-child(2) {
        ${props => props.active ? `
            transform: translateX(-60px);
            pointer-events: none;
            opacity: 0;
            transition: 0.2s ease-out;
        ` : ''}
    }
    ${Line}:nth-child(3) {
        ${props => props.active ? `
            transform: rotate(135deg) translateY(-22%);
            transform-origin: center;
        ` : ''}
    }
`;
