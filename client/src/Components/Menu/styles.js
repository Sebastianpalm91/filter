import { Link } from 'react-router-dom';
import styled, { keyframes } from "styled-components";
import GoldMember from '../../assets/img/Gold_memeber.svg';
import { breakpoint } from '../../assets/mixins/mixins.js';

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
const MenuKeyFrames = keyframes`
  0% {
    height: 0px;
    opacity: 0;
  }
  100% {
    height: 240px;
    opacity: 1;
  }
`

export const SubMenu = styled.div `
    width: 100%;
    background-color: #E1AB99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    animation-name: ${MenuKeyFrames};
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
`

export const SubMenuUl = styled.ul `
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0px;
    list-style: none;
    width: 80%;
`

export const SubMenuLi = styled.li `
    list-style: none;
    padding-left: 35px;

`

export const Vr = styled.div `
    border-right: 1px solid #222222;
    height 20%;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    width: 200px;
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
