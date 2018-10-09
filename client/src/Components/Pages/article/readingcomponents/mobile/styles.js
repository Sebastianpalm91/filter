import { breakpoint } from '../../../../../assets/mixins/mixins.js';
import styled from 'styled-components';

export const Container = styled.div `
    display: none;
    ${breakpoint.down('m')`
        display: block;
        position: fixed;
        bottom: 0px;
        width: 90%;
        height: 7%;
        background-color: #E1AB99;
        border-radius: 5px 5px 0px 0px;
        margin-bottom: -1px;
    `}
`

export const Wrapper = styled.div `
    display: none;
    ${breakpoint.down('m')`
        display: flex;
        height: 100%;
    `}
`

export const Socials = styled.div`
    ${breakpoint.down('m')`
        display: flex;
        width: 34px;
        height: 34px;
        margin: auto;
        justify-content: center;
        align-items: center;
        background-color: #E1AB99;
        border-radius: 50%;
        transition: all 0.4s cubic-bezier(.51,-0.45,1,1.17);
    `}
`
