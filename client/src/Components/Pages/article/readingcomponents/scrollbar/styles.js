import styled from 'styled-components';
import FacebookIconSvg from '../../../../../assets/img/Fb_footer.svg'
import TwitterIconSvg from '../../../../../assets/img/Insta_footer.svg'

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const ScrollContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 15vh;
    margin-top: 1%;
    left: 8vw;
    transition: all 0.2s ease-in-out;
    opacity: ${ ({showBar}) => showBar ? '1' : '0'};
`

export const ScrollBarStyles = styled.div `
    height: 300px;
    width: 2px;
    border-radius: 28.96%;
    margin: 12px 17px 12px 17px;
    background-color: #ECECEC;
`

export const Inner = styled.div`
    width: 100%;
    background-color: #E1AB99;
`

export const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: black;
    z-index: 99;
    margin-left: -4px;
`

export const BookMarkShareIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: #E1AB99;
    border-radius: 50%;
`

export const ShareButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    margin: 12px 10px 12px 0;
    background-color: #E1AB99;
    border-radius: 50%;
`

export const SocialButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    margin: 12px 10px 12px 0;
    background-color: #E1AB99;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(.51,-0.45,1,1.17);
    &:nth-child(1) {
        transform: ${ ({toggleOpen}) => toggleOpen ? 'none' : 'translateX(calc(-100% - 12px))'}
    }
    &:nth-child(2) {
        transform: ${ ({toggleOpen}) => toggleOpen ? 'none' : 'translateX(calc(-200% - 24px))'}
    }
    &:nth-child(3) {
        transform: ${ ({toggleOpen}) => toggleOpen ? 'none' : 'translateX(calc(-300% - 32px))'}
    }

`

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
`

export const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    transition: all 0.4s cubic-bezier(.51,-0.45,1,1.17);
    opacity: ${ ({toggleOpen}) => toggleOpen ? '1' : '0'};
    z-index: 1;
    position: relative;
`

export const IconContainer = styled.div`
    display: flex;
    align-items: flex-start;
`

export const FacebookIcon = styled.div`
    background-image: url(${FacebookIconSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 20px;
`

export const TwitterIcon = styled.div`
    background-image: url(${TwitterIconSvg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 20px;
`
