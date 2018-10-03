import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    z-index: 99;
`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 99;
`;

/*
    Paths
*/
export const Line = styled.path`
    transform: translateX(0px);
    cursor:pointer;
    transition: 0.8s cubic-bezier(.32,1.97,.62,.55);
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
    padding: 10px;
    transform-origin: center;
    position: absolute;
    overflow-y: hidden;
    top: 5px;
    right: 5px;
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


// Panel

export const Panel = styled.div `
    height: 100vh;
    width: 100%;
    background-color: #E1AB99;
    margin-top: -800px;
    opacity: 0;
    transition: all 1s ease-in-out;
    ${props => props.active ? `
        margin-top: 0px;
        opacity: 1;
    ` : ''}
`

export const StyledLinkSubMenu = styled(Link)`
    font-family: dp;
    font-size: 16px
    line-height: 28px;
    letter-spacing: 0.02em;
    color: #222222;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

export const SubMenuLi = styled.li `
    list-style: none;
    padding-left: 35px;

`
