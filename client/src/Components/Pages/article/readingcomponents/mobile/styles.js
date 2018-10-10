import { breakpoint } from '../../../../../assets/mixins/mixins.js';
import styled from 'styled-components';
import FacebookIconSvg from '../../../../../assets/img/fbblack.svg'
import TwitterIconSvg from '../../../../../assets/img/twitterblack.svg'
import InstagramIconSvg from '../../../../../assets/img/instawhite.svg'

import BookMarkSvg from '../../../../../assets/img/Bookmark_white.svg'
import BookMarkFilledSvg from '../../../../../assets/img/Bookmark_filledblack.svg'
import ShareSvg from '../../../../../assets/img/Share_.svg'
import ShareFilledSvg from '../../../../../assets/img/Share_filled.svg'
import LikeSvg from '../../../../../assets/img/Likewhite.svg'
import LikeFilledSvg from '../../../../../assets/img/Like_filledblack.svg'

export const Container = styled.div `
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
        transition: all 0.5s cubic-bezier(.51,-0.45,1,1.17);
        opacity: 1;
        transform: translateY(0px);
    `}
`

export const Wrapper = styled.div `
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
    background-image: url(${FacebookIconSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 48px;
    height: 48px;
    margin-top: 15px;
`

export const Twitter = styled.div`
    background-image: url(${TwitterIconSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 48px;
    height: 48px;
    margin-top: 15px;
`
export const Insta = styled.div`
    background-image: url(${InstagramIconSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 48px;
    height: 48px;
    margin-top: 15px;
`
