import styled from "styled-components";
import { Link } from 'react-router-dom';
import { breakpoint } from '../../../assets/mixins/mixins';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    z-index: 99;
`;

export const Wrapper = styled.div`
    display: none;
    width: 100%;
    position: absolute;
    z-index: 99;
    ${breakpoint.down('m')`
        display: block;
    `}
`;

/*
    Paths
*/
export const Line = styled.path`
    transform: translateX(0px);
    transform-origin: center;
    pointer-events:all;
    cursor:pointer;
    fill: #FCFCF9;
    transition: 0.4s cubic-bezier(.54,.57,.49,.44);
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
            transform: rotate(45deg) translateY(30%);
            transform-origin: center;
        ` : ''}
    }
    ${Line}:nth-child(2) {
        ${props => props.active ? `
            transform: rotate(180deg) scale(0.1);
            pointer-events: none;
            opacity: 0;
            transition: .6s ease-out;
        ` : ''}
    }
    ${Line}:nth-child(3) {
        ${props => props.active ? `
            transform: rotate(-45deg) translateY(-24%);
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
