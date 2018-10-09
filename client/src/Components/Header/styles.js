import styled from "styled-components";
import FilterSvg from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'
import arrowBack from '../../assets/img/Vector.svg'
import { breakpoint } from '../../assets/mixins/mixins.js';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 72px;
    background-color: #1A1A1A;
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
