import { breakpoint } from '../../../../../assets/mixins/mixins.js';
import styled from 'styled-components';

export const Container = styled.div `
    opacity: 0;
    transform: translateY(20px);
    ${breakpoint.down('m')`
        display: block;
        position: fixed;
        bottom: 0px;
        width: 90%;
        height: 7%;
        background-color: #F8F8F8;
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
        height: 100%;
    `}
`

export const Socials = styled.div`
    ${breakpoint.down('m')`
        cursor: pointer;
        display: flex;
        width: 34px;
        height: 34px;
        margin: auto;
        justify-content: center;
        align-items: center;
        background-color: #F8F8F8;
        border-radius: 50%;
        transition: all 0.4s cubic-bezier(.51,-0.45,1,1.17);
    `}
`
