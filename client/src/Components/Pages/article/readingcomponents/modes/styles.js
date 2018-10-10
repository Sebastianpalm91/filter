import { breakpoint } from '../../../../../assets/mixins/mixins.js';
import styled from 'styled-components';
import ModeIcon from '../../../../../assets/img/instawhite.svg'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 1%;
    right: -6%;
    z-index: 99;
`

export const Wrapper = styled.div `
    display: flex;
    align-items: center;

`

export const Mode = styled.div`
    width: 60px;
    height: 60px;
    background-image: url(${ModeIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 30px;
    cursor: pointer;
    ${breakpoint.up('m')`
        display: none;
    `}
`
