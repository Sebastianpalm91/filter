import { Link } from 'react-router-dom'
import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
`;

export const Li = styled.li`
    padding: 20px;
    list-style: none;
    justify-content: center;
`;
export const Ul = styled.ul`
    padding: 0px;
    margin: 0px;
    margin-top: 10px
    list-style: none;
`;

export const StyledLink = styled(Link)`
    font-family: SceneMedium;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    color: black;
    text-decoration: none;
    &:hover {
        color: black;
    }
`;
