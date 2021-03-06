import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoint } from '../../assets/mixins/mixins.js';
import FilterSvg from '../../assets/img/logo_footer.svg'
import FacebookLogoSvg from '../../assets/img/Fb_footer.svg'
import TwitterLogoSvg from '../../assets/img/Insta_footer.svg'
import InstaLogoSvg from '../../assets/img/Twitter_footer.svg'

export const Container = styled.div `
    background-color: #1A1A1A;
    bottom: 0px;
    width: 100%;
    padding-top: 20px;
    margin-top: -1px;
    ${breakpoint.down('m')`
        width: unset;
    `}
`

export const Wrapper = styled.div `
    background-color: #1A1A1A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${breakpoint.down('m')`
        flex-direction: column-reverse;
        margin-left: 15px;
    `}
`

export const Li = styled.li`
    &:last-child a {
        color: #E1AB99
    }
    list-style: none;
    padding: 0px 18px 0px 18px;
    ${breakpoint.down('m')`
        padding: 0px;
    `}
`;
export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin-bottom: 10px;
    list-style: none;
    padding-right: 60px;
    ${breakpoint.down('m')`
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 36px;
    `}
`;

export const StyledLink = styled(Link)`
    font-family: dp;
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
    ${breakpoint.down('m')`
        line-height: 36px;
    `}
`;

export const Logo = styled.div`
    background-image: url(${FilterSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 52px;
    height: 36px;
    margin: 10px;
    ${breakpoint.down('m')`
        display: none;
    `}
`
export const Logo2 = styled.div`
    background-image: url(${FilterSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 52px;
    height: 36px;
    margin: 24px 10px 10px 18px;
    display: none;
    ${breakpoint.down('m')`
        display: block;
        margin: 24px 10px 10px 0px;
    `}
`

export const SocialIconContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding-left: 30px;
    ${breakpoint.down('m')`
        justify-content: flex-start;
        padding-left: 20px;
    `}
`

export const FacebookLogo = styled.div`
    background-image: url(${FacebookLogoSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 20px;
    ${breakpoint.down('m')`
        margin: 10px 24px 10px 0px;
        width: 36px;
        height: 36px;
    `}
`

export const TwitterLogo = styled.div`
    background-image: url(${TwitterLogoSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 20px;
    ${breakpoint.down('m')`
        margin: 10px 24px 10px 0px;
        width: 36px;
        height: 36px;
    `}
`

export const InstaLogo = styled.div`
    background-image: url(${InstaLogoSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 20px;
    ${breakpoint.down('m')`
        margin: 10px 24px 10px 0px;
        width: 36px;
        height: 36px;
    `}
`
