import { Link } from 'react-router-dom'
import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    background-color: #1A1A1A;

`;

export const Li = styled.li`
    &:last-child a {
        color: #E1AB99
    }
    list-style: none;
`;
export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0px;
    margin: auto;
    width: 60%;
    list-style: none;
`;

export const StyledLink = styled(Link)`
    font-family: SceneMedium;
    font-size: 12px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 2px;
    color: #FFFFFF;
    text-decoration: none;
    &:hover {
        color: black;
    }

`;
