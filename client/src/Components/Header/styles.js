import styled from "styled-components";
import FilterSvg from '../../assets/img/logo.svg'

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
