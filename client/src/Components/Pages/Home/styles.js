import styled from 'styled-components';
import FilterSvg from '../../../assets/img/logo.svg';

export const Container = styled.div `
    display: flex;
    justify-content: center;
    background-color: #1A1A1A;
    padding: 60px 0px 60px 0px;
`

export const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 240px;
    margin-right: 240px;
`

export const Logo = styled.div `
    background-image: url(${FilterSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 550px;
    height: 195px;
`

export const Title = styled.h1 `
    font-family: hd_light;
    line-height: 68px;
    font-size: 48px;
    text-align: center;
    font-variant: small-caps;
    color: #FCFCF9;

`

export const Hr = styled.hr `
    display: block;
    width: 100%;
    border-width: 1px;
    border-color: #E1AB99;
`

export const HeaderInfo = styled.h2 `
    font-family: DINPro;
    line-height: 59px;
    font-size: 48px;
    letter-spacing: 0.02em;
    word-wrap: break-word;
    color: #FCFCF9;
`

export const LinkTo = styled.a `
    color: #E1AB99;
`

export const SubscriptionContainer = styled.div `

`
