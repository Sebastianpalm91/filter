import { breakpoint } from '../../../../../assets/mixins/mixins.js';
import styled from 'styled-components';
//MOBILE STYLES
import FacebookIconSvg from '../../../../../assets/img/fbblack.svg'
import TwitterIconSvg from '../../../../../assets/img/twitterblack.svg'
import InstagramIconSvg from '../../../../../assets/img/instawhite.svg'

import Fbiconnightmode from '../../../../../assets/img/fb_ilfylld.svg'
import Twittericonnightmode from '../../../../../assets/img/twitter_ifylld.svg'
import Instaiconnightmode from '../../../../../assets/img/insta_ifylld.svg'

import BookMarkSvg from '../../../../../assets/img/Bookmark_white.svg'
import BookMarkFilledSvg from '../../../../../assets/img/Bookmark_filledblack.svg'
import ShareSvg from '../../../../../assets/img/Share_.svg'
import ShareFilledSvg from '../../../../../assets/img/Share_filled.svg'
import LikeSvg from '../../../../../assets/img/Likewhite.svg'
import LikeFilledSvg from '../../../../../assets/img/Like_filledblack.svg'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: all 0.2s cubic-bezier(.51,-0.45,1,1.17);
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
    transition: all 0.2s cubic-bezier(.51,-0.45,1,1.17);
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
    transition: all 0.2s cubic-bezier(.51,-0.45,1,1.17);
    ${props => props.nightmode ? 'color: #222222' : 'color: #FCFCF9'};
    font-size:  ${props => props.isLarge ? '24px' : '34px'};
    line-height: ${props => props.isLarge ? '1.7rem' : '2rem'};
`

export const Published = styled.span`
    transition: all 0.2s cubic-bezier(.51,-0.45,1,1.17);
    ${props => props.nightmode ? 'color: #222222' : 'color: #FCFCF9'};
    font-size: ${props => props.isLarge ? '24px' : '34px'};
    line-height: ${props => props.isLarge ? '1.7rem' : '2rem'};
`

export const ArticleInfoWrapper = styled.div`
    transition: all 0.2s cubic-bezier(.51,-0.45,1,1.17);
    ${props => props.nightmode ? 'color: #222222' : 'color: #FCFCF9'};
    font-style: italic;
    font-size: ${props => props.isLarge ? '18px' : '24px'};
    margin-bottom: 5%;
`

export const InfoText = styled.span`
    
`

export const InfoWork = styled.span`
    transition: all 0.2s cubic-bezier(.51,-0.45,1,1.17);
    ${props => props.nightmode ? 'color: #222222' : 'color: #FCFCF9'};
    text-transform: capitalize;
    font-family: hd;
    ${breakpoint.up('m')`
        padding-left: ${({ paddingLeft }) => paddingLeft ? '10px' : '0px'}
    `}
`

export const InfoName = styled.span`
    transition: all 0.2s cubic-bezier(.51,-0.45,1,1.17);
    ${props => props.nightmode ? 'color: #222222' : 'color: #FCFCF9'};
    border-bottom: 1px solid #E1AB99;
    font-style: normal;
    font-family: hd_medium;
    text-transform: uppercase;
`

export const Paragraph = styled.p`
    transition: all 0.2s cubic-bezier(.51,-0.45,1,1.17);
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

//MOBILE BOTTOM FIXED ICONS

export const MobileContainer = styled.div `
    opacity: 0;
    transform: translateY(20px);
    ${breakpoint.down('m')`
        display: block;
        position: fixed;
        bottom: 0px;
        width: 90%;
        height: 7%;
        ${props => props.nightmode ? 'background: #F8F8F8' : 'background: #E1AB99'};
        border-radius: 5px 5px 0px 0px;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
        margin-bottom: -1px;
        transition: all 0.2s cubic-bezier(.51,-0.45,1,1.17);
        opacity: 1;
        transform: translateY(0px);
    `}
`

export const MobileWrapper = styled.div `
    display: none;
    ${breakpoint.down('m')`
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: auto;
        height: 100%;
    `}
`

export const Margins = styled.div `
    display: flex;
    justify-content: center;
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
`

export const SocialsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    opacity: ${ ({toggleOpen}) => toggleOpen ? '1' : '0'};
    z-index: 1;
    position: absolute;
    bottom: 150%;
    left: 9%;
    transition: all 0.4s cubic-bezier(.51,-0.45,1,1.17);
    cursor: pointer;
    &:nth-child(1) {
        transform: ${ ({toggleOpen}) => toggleOpen ? 'none' : 'translateY(45px)'}
    }
    &:nth-child(2) {
        transform: ${ ({toggleOpen}) => toggleOpen ? 'none' : 'translateY(80px)'}
    }
    &:nth-child(3) {
        transform: ${ ({toggleOpen}) => toggleOpen ? 'none' : 'translateY(120px))'}
    }
`

export const BookMark = styled.div`
    background-image: url(${BookMarkSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 36px;
    height: 36px;
    transition: all 0.2s cubic-bezier(.51,-0.45,1,1.17);
    &.active {
        background-image: url(${BookMarkFilledSvg});
    }
`

export const Share = styled.div`
    background-image: url(${ShareSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 36px;
    height: 36px;
    position: relative;
    z-index: 2;
    transition: all 0.2s cubic-bezier(.51,-0.45,1,1.17);
    &.active {
        background-image: url(${ShareFilledSvg});
    }
`

export const Like = styled.div`
    background-image: url(${LikeSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 36px;
    height: 36px;
    transition: all 0.2s cubic-bezier(.51,-0.45,1,1.17);
    &.active {
        background-image: url(${LikeFilledSvg});
    }
`
export const Fb = styled.div`
    background-image: url(${ ({nightmode}) => nightmode ? `${FacebookIconSvg}` : `${Fbiconnightmode}`});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 48px;
    height: 48px;
    margin-top: 15px;
`

export const Twitter = styled.div`
    background-image: url(${ ({nightmode}) => nightmode ? `${TwitterIconSvg}` : `${Twittericonnightmode}`});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 48px;
    height: 48px;
    margin-top: 15px;
`
export const Insta = styled.div`
    background-image: url(${ ({nightmode}) => nightmode ? `${InstagramIconSvg}` : `${Instaiconnightmode}`});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 48px;
    height: 48px;
    margin-top: 15px;
`
