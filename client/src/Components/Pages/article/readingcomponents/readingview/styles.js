import { breakpoint } from '../../../../../assets/mixins/mixins.js';
import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    ${props => props.nightmode ? 'background: rgba(255, 255, 255, 0.5);' : 'background: #000000'};
    p, span {
        margin: 0;
    }
`

export const ReadingTime = styled.span`
    font-family: dp;
    font-size: ${props => props.isLarge ? '.6rem' : '1rem'};
    text-transform: initial;
`

export const LoadingArticle = styled.div`
    width: 100%;
    height: 100vh;
`

export const ScrollBarAnimation = styled.div`
    opacity: 0;
    transition: all 0.5s ease-in-out;
    ${props => props.hidebar ? `
        opacity: 1;
    ` : ''}
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    width: 43%;
    ${breakpoint.down('m')`
        width: unset;
        margin: 20px;
    `}
`
export const Title = styled.h1`
    ${props => props.nightmode ? 'color: #222222' : 'color: #FCFCF9'};
    font-size: ${props => props.isLarge ? '64px' : '74px'};
    text-alight: left;
    font-family: hd_light;
    font-weight: 100;
    margin-bottom: 20px;
    ${breakpoint.down('m')`
    margin-bottom: 10%;
    text-align: center;
    `}
`

export const Tag = styled.span`
    ${props => props.nightmode ? 'color: #222222' : 'color: #FCFCF9'};
    font-size:  ${props => props.isLarge ? '24px' : '34px'};
    line-height: ${props => props.isLarge ? '1.7rem' : '2rem'};
`

export const Published = styled.span`
    ${props => props.nightmode ? 'color: #222222' : 'color: #FCFCF9'};
    font-size: ${props => props.isLarge ? '24px' : '34px'};
    line-height: ${props => props.isLarge ? '1.7rem' : '2rem'};
`

export const ArticleInfoWrapper = styled.div`
    ${props => props.nightmode ? 'color: #222222' : 'color: #FCFCF9'};
    font-style: italic;
    font-size: ${props => props.isLarge ? '18px' : '24px'};
    margin-bottom: 5%;
`

export const InfoWork = styled.span`
    ${props => props.nightmode ? 'color: #222222' : 'color: #FCFCF9'};
    text-transform: capitalize;
    font-family: hd;
    ${breakpoint.up('m')`
        padding-left: ${({ paddingLeft }) => paddingLeft ? '10px' : '0px'}
    `}
`

export const InfoName = styled.span`
    ${props => props.nightmode ? 'color: #222222' : 'color: #FCFCF9'};
    border-bottom: 1px solid #E1AB99;
    font-style: normal;
    font-family: hd_medium;
    text-transform: uppercase;
`

export const Paragraph = styled.p`
    ${props => props.nightmode ? 'color: #222222' : 'color: #FCFCF9'};
    font-size: ${props => props.isLarge ? '18px' : '24px'};
    line-height:  ${props => props.isLarge ? '1.7rem' : '2rem'};
    font-family: hd_regular;
`

export const MagazineNumber = styled.p`
    margin: 10px 0px 0 0!important;
    font-size: ${props => props.isLarge ? '10px' : '16px'};
    font-family dp;
    text-transform: uppercase;
    font-style: normal;
`

export const Preamble = styled.div`
    margin: 10px 0px 30px 0px;
`

export const Highlighted = styled.span`
    color: #E1AB99;
`

export const Thumbnail = styled.img`
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    width: 100%;
`
