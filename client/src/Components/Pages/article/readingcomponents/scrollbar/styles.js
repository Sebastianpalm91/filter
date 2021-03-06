import styled from 'styled-components';
import FacebookIconSvg from '../../../../../assets/img/fb_ilfylld.svg'
import TwitterIconSvg from '../../../../../assets/img/twitter_ifylld.svg'
import InstagramIconSvg from '../../../../../assets/img/insta_ifylld.svg'

import BookMarkSvg from '../../../../../assets/img/Bookmark.svg'
import BookMarkFilledSvg from '../../../../../assets/img/Bookmark_ifylld.svg'
import ShareSvg from '../../../../../assets/img/Share.svg'
import ShareFilledSvg from '../../../../../assets/img/Share_ifylld.svg'
import LikeSvg from '../../../../../assets/img/Like.svg'
import LikeFilledSvg from '../../../../../assets/img/Like_ilfylld.svg'

import { breakpoint } from '../../../../../assets/mixins/mixins.js';

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const ScrollContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 5%;
    margin-top: 1%;
    left: 8vw;
    transition: all 0.2s ease-in-out;
    opacity: ${ (props) => !props.hideBar ? '1' : '0'};
`

export const ScrollBarStyles = styled.div `
    height: 300px;
    width: 2px;
    border-radius: 28.96%;
    margin: 12px 17px 12px 17px;
    background-color: #ECECEC;
    ${breakpoint.down('m')`
        position: fixed;
        margin-right: 5px;
        height: 500px;
        left: unset;
        top: 5%;
        right: 1%;
    `}
`

export const Inner = styled.div`
    width: 2px;
    background-color: #E1AB99;
    max-height: 100%;
`

export const Dot = styled.div`
    width: 10px;
    transition: all .25s ease-in;
    transform: scale(${({ show }) => show ? '1' : '0' });
    height: 10px;
    border-radius: 50%;
    background-color: black;
    z-index: 99;
    margin-left: -4px;
`

export const BookMarkShareIcons = styled.div`
    cursor: pointer;
    ${breakpoint.down('m')`
        display: none;
    `}
`

export const ShareButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 12px 10px 12px 0;
    background-color: #E1AB99;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
    ${breakpoint.down('m')`
        display: none;
    `}
`

export const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    opacity: ${ ({toggleOpen}) => toggleOpen ? '1' : '0'};
    z-index: 1;
    position: relative;
    transition: all 0.4s cubic-bezier(.51,-0.45,1,1.17);
    cursor: pointer;
    margin: 10px;
    &:nth-child(1) {
        transform: ${ ({toggleOpen}) => toggleOpen ? 'none' : 'translateX(calc(-10% - 20px ))'}
    }
    &:nth-child(2) {
        transform: ${ ({toggleOpen}) => toggleOpen ? 'none' : 'translateX(calc(-20% - 30px))'}
    }
    &:nth-child(3) {
        transform: ${ ({toggleOpen}) => toggleOpen ? 'none' : 'translateX(calc(-30% - 40px))'}
    }
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    ${breakpoint.down('m')`
        display: none;
    `}
`
//ICONS
export const Fb = styled.div`
    background-image: url(${FacebookIconSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 5px;
`

export const Twitter = styled.div`
    background-image: url(${TwitterIconSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 5px;
`
export const Insta = styled.div`
    background-image: url(${InstagramIconSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 5px;
`

export const BookMark = styled.div`
    background-image: url(${BookMarkSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 36px;
    height: 36px;
    transition: all 0.2s cubic-bezier(.51,-0.45,1,1.17);
    ${breakpoint.down('m')`
       display: none;
   `}
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
    ${breakpoint.down('m')`
       display: none;
   `}
    &.active {
        background-image: url(${LikeFilledSvg});
    }
`
