import { breakpoint } from '../../../../../assets/mixins/mixins.js';
import styled from 'styled-components';
import ModeIcon from '../../../../../assets/img/instawhite.svg'
import BigA from '../../../../../assets/img/Control_Big_A.svg'
import SmallA from '../../../../../assets/img/Control_Smal_A.svg'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 1%;
    right: 2%;
    z-index: 99;
`

export const Wrapper = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Mode = styled.div`
    width: 60px;
    height: 60px;
    background-image: url(${ModeIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    ${breakpoint.up('m')`
        display: none;
    `}
`

export const ModeBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    position: absolute;
    top: 10%;
    right: 3%;
    margin-top: 65px;
    padding: 5px;
    background: #F8F8F8;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 158.17px;
    height: 144px;
    transition: all 0.4s cubic-bezier(.51,-0.45,1,1.17);
    opacity: ${ ({toggleOpen}) => toggleOpen ? '1' : '0'};
`

export const BigFont = styled.div`
    width: 60px;
    height: 60px;
    background-image: url(${BigA});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    ${breakpoint.up('m')`
        display: none;
    `}
`

export const SmallFont = styled.div`
    width: 60px;
    height: 60px;
    background-image: url(${SmallA});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border-right: 1px solid black;
    cursor: pointer;
    margin-right: 5px;
    ${breakpoint.up('m')`
        display: none;
    `}
`
