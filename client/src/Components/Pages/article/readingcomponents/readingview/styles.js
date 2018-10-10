import { breakpoint } from '../../../../../assets/mixins/mixins.js';
import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    p, span {
        margin: 0;
    }

    h1 {
        margin-bottom: 0;
    }
`

export const ReadingTime = styled.span`
    font-family: dp;
    font-size: .6rem;
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
    color: black;
    font-size: 64px;
    text-alight: left;
    font-family: hd_light;
    font-weight: 100;
    margin-bottom: 5%;
`

export const Tag = styled.span`
    color: black;
    font-size: 24px;
    line-height: 28px;
`

export const Published = styled.span`
    color: black;
    font-size: 24px;
    line-height: 28px;
`

export const ArticleInfoWrapper = styled.div`
    font-style: italic;
    font-size: 18px;
    margin-bottom: 5%;
`

export const InfoWork = styled.span`
    text-transform: capitalize;
    font-family: hd;
    padding-left: ${({ paddingLeft }) => paddingLeft ? '10px' : '0px'}
`

export const InfoName = styled.span`
    border-bottom: 1px solid #E1AB99;
    font-style: normal;
    font-family: hd_medium;
    text-transform: uppercase;
`

export const Paragraph = styled.p`
    color: black;
    font-size: 18px;
    line-height: 1.7rem;
    font-family: hd_regular;
`

export const MagazineNumber = styled.p`
    margin: 10px 0px 0 0!important;
    font-size: 10px;
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
