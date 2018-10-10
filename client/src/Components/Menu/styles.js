import { Link } from 'react-router-dom';
import styled from "styled-components";
import GoldMember from '../../assets/img/Gold_memeber.svg';
import { breakpoint } from '../../assets/mixins/mixins.js';

export const Wrapper = styled.div`
    height: 100%;
    background-color: #1A1A1A;
    flex-direction: column;
    ${breakpoint.down('m')`
        display: none;
    `}
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
    transition: 1s ease-in-out;
`

export const StyledLink = styled(Link)`
    font-family: dp_medium;
    font-size: 12px;
    line-height: 32px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    text-decoration: none;
    transition: all 1s ease;
    &:hover {
        text-decoration: underline;
    }
`

export const SubMenu = styled.div `
    width: 100%;
    height: 4px;
    background-color: #E1AB99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    ${props => props.active ? `
        height: 300px;
        opacity: 1;
    ` : ''};
`

export const SubMenuUl = styled.ul `
    flex-direction: row;
    justify-content: center;
    padding: 0px;
    list-style: none;
    width: 80%;
    display: none;
    margin: auto;
    ${props => props.active ? `
        display: flex;
        margin-right: 156px;
    ` : '' }
`

export const SubMenuUlCat = styled.ul `
    flex-direction: row;
    justify-content: center;
    padding: 0px;
    list-style: none;
    width: 100%;
    display: none;
    margin: auto;
    ${props => props.active ? `
        display: flex;
        justify-content: flex-start;
        margin-right: 226px;
    ` : '' }
`

export const Animation = styled.div`
    transition: all 1s ease-in-out;
    opacity: 0;
    ${props => props.active ? `
        opacity: 1;
    ` : '' }
`

export const SubMenuLi = styled.li `
    list-style: none;
    padding-left: 35px;
`

export const Vr = styled.div `
    border-right: 1px solid #222222;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    width: 200px;
`

export const SubMenuLiCat = styled.li `
    list-style: none;
    padding-left: 30px;
`

export const VrCat = styled.div `
    border-right: 1px solid #222222;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    width: 100px;
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

export const LinkInfo = styled.div `
    display: flex;
    flex-direction: column;
    width: 20%;
    padding: 0px 30px 0px 30px;
`

export const LinkInfoCat = styled.div `
    display: flex;
    flex-direction: column;
    width: 20%;
`

export const Title = styled.h1 `
    font-family: dp;
    line-height: 32px;
    font-size: 16px;
    letter-spacing: 0.02em;
    margin: 0px;
    padding: 0px 0px 10px 0px;

`

export const Summary = styled.p `
    font-family: dp;
    line-height: 20px;
    font-size: 16px;
    margin: 0px;
    letter-spacing: 0.02em;

`

export const SummaryImg = styled.div `
    background-image: url(${GoldMember});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 180px;
    height: 182px;
    padding: 0px 30px 0px 30px;
`
