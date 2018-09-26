import { Link } from 'react-router-dom'
import styled from "styled-components";




export const Wrapper = styled.div`
    height: 100%;
    background-color: #1A1A1A;
    flex-direction: column;
`;

export const Li = styled.li`
    &:last-child a {
        color: #E1AB99
    }
    list-style: none;
    padding: 0px 20px 0px 20px;
`;
export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0px;
    margin: auto;
    width: 80%;
    list-style: none;

`

export const StyledLink = styled(Link)`
    font-family: dp;
    font-size: calc(0.875rem + ((1vw - 4.8px) * 0.4167));
    line-height: 32px;
    letter-spacing: 0.06em;
    color: #FFFFFF;
    text-decoration: none;
    transition: all 1s ease;
    &:hover {
        text-decoration: underline;
    }

`


export const SubMenu = styled.div `
    width: 100%;
    background-color: #E1AB99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SubMenuUl = styled.ul `
    padding: 0px;
    list-style: none;
    width: 15%;
`

export const SubMenuLi = styled.li `
    list-style: none;
    padding-left: 35px;
`

export const Vr = styled.div `
    border-right: 1px solid #222222;
    height 20%;
`
