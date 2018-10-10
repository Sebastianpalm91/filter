import styled from "styled-components";
import FilterSvg from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'
import arrowBack from '../../assets/img/Vector.svg'
import SearchSvg from '../../assets/img/search_icon_header.svg'
import LikedSvg from '../../assets/img/Like_whitefilled.svg'
import { breakpoint } from '../../assets/mixins/mixins.js';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 72px;
    background-color: #1A1A1A;
    ${breakpoint.down('m')`
        border-bottom: 4px solid #E1AB99;
    `}
`

export const Wrapper = styled.div `
    display: flex;
    align-items: center;
`

export const Logo = styled.div`
    background-image: url(${FilterSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 128px;
    height: 45px;
`
export const StyledLink = styled(Link)`
    font-size: 1em;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 0px
    &:hover {
        opacity: 0.5;
    }
`;

export const Back = styled.div`
    position: absolute;
    top: 3%;
    left: 4%;
    height: 30px;
    width: 15px;
    background-image: url(${arrowBack});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    ${breakpoint.up('m')`
        display: none;
    `}
`;

export const LoginSearchWrapper = styled.div`
    flex-direction: row;
    align-items: center;
    position: absolute;
    right: 10%;
    top: 3%;
    ${props => !props.displaythis ? 'display: flex' : 'none'}
    ${breakpoint.down('m')`
        display: none;
    `}
`
export const Liked = styled.div`
    width: 12px;
    height: 10.5px;
    background-image: url(${LikedSvg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 5px;
    cursor: pointer;
    ${breakpoint.down('m')`
        display: none;
    `}
`

export const SearchIcon = styled.div`
    width: 20px;
    height: 20px;
    background-image: url(${SearchSvg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 30px;
    cursor: pointer;
    ${breakpoint.down('m')`
        display: none;
    `}
`

export const H3 = styled.h3`
    font-family: dp;
    line-height: 32px;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
    ${breakpoint.down('m')`
        display: none;
    `}
`

export const H4 = styled.h4`
    font-family: dp;
    line-height: 32px;
    font-size: 12px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
`
export const Border = styled.div`
    height: 15px;
    width: 1px;
    margin-left: 20px;
    margin-right: 20px;
    background: #FCFCF9;
`

export const LoggedInWrapper = styled.div`
    flex-direction: row;
    align-items: center;
    position: absolute;
    right: 8%;
    top: 3%;
    ${props => props.displaythis ? 'display: flex' : 'none'}
    ${breakpoint.down('m')`
        display: none;
    `}
`
