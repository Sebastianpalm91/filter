import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FilterSvg from '../../assets/img/logo_footer.svg'
import FacebookLogoSvg from '../../assets/img/Fb_footer.svg'
import TwitterLogoSvg from '../../assets/img/Insta_footer.svg'
import InstaLogoSvg from '../../assets/img/Twitter_footer.svg'

export const Container = styled.div `
    background-color: #1A1A1A;
    position: fixed;
    bottom: 0px;
    height: 148px;
    width: 100vw;
`

export const Wrapper = styled.div `
    background-color: #1A1A1A;
    height: 148px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Li = styled.li`
    &:last-child a {
        color: #E1AB99
    }
    list-style: none;
    padding: 10px;
`;
export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0px;
    margin: auto;
    margin-bottom: 10px;
    list-style: none;
`;

export const StyledLink = styled(Link)`
    font-family: SceneMedium;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #FCFCF9;
    text-decoration: none;
    &:hover {
        color: black;
    }
`;

export const Logo = styled.div`
    background-image: url(${FilterSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 52px;
    height: 36px;
    margin: 10px;
`

export const SocialIconContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`

export const FacebookLogo = styled.div`
    background-image: url(${FacebookLogoSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 20px;
`

export const TwitterLogo = styled.div`
    background-image: url(${TwitterLogoSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 20px;
`

export const InstaLogo = styled.div`
    background-image: url(${InstaLogoSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 20px;
`
