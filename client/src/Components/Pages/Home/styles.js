import styled from 'styled-components';
import FilterSvg from '../../../assets/img/logo.svg';
import FrontPageImg from '../../../assets/img/teodor-forselius-4b.jpg'
import FirstReportageImage from '../../../assets/img/anna-odell-1.jpg'
import SecondReportageImage from '../../../assets/img/peter-grocc88nlund-1.jpg'
import ThirdReportageImage from '../../../assets/img/linda-acc8agren-1.jpg'

import IntervjueImgSecond from '../../../assets/img/niklas-ekstedt-1.jpg'
import IntervjueImgFirst from '../../../assets/img/vinforskare_kimberlynicholas1.jpg'


export const MainColor = styled.p`
    color: #E1AB99;
    padding: 0px;
    margin: 0px;
    padding-left: 6px;
`

export const Container = styled.div `
    display: flex;
    justify-content: center;
    background-color: #1A1A1A;
    padding: 60px 0px 60px 0px;
`

export const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 200px;
    margin-right: 200px;
`

export const BreadCrumb = styled.h4 `
    display: flex;
    flex-direction: row;
    font-family: dp_light;
    line-height: 21px;
    font-size: 16px
    letter-spacing: 0.1em;
    word-wrap: break-word;
    color: #FCFCF9;
    text-align: left;
    margin: 0px;
    text-transform: uppercase;
`

export const Hr = styled.hr `
    display: block;
    width: 100%;
    border-width: 0.5px;
    border-color: #FCFCF9;
    border-style: solid;
    margin-bottom: 30px;
`
export const Title = styled.h1 `
    font-family: hd_light;
    line-height: normal;
    font-size: 48px;
    font-weight: 100;
    letter-spacing: 0.06em;
    color: #FCFCF9;
    text-rendering: auto;
    margin: 0px
    font-variant-ligatures: discretionary-ligatures;
    font-feature-settings: dlig;
`


// export const LinkTo = styled.a `
//     color: #E1AB99;
// `

export const ArticleImage = styled.div `
    background-image: url(${FrontPageImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    margin: 24px 0px 24px 0px;
`

export const SubTitle = styled.h2`
    font-family: hd_light;
    line-height: 27px;
    font-size: 24px;
    letter-spacing: 0.06em;
    color: #FCFCF9;
    margin: 0px;
    width: 738px;
    font-variant-ligatures: discretionary-ligatures;
    font-feature-settings: dlig;
`

export const Imginfo = styled.h3`
    font-family: dp;
    line-height: normal;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #FCFCF9;
    margin-bottom: 80px;
`

export const ArciveContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 80px;
`

export const ArciveWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 30px
    &:last-child {
        padding-right: 0px!important;
    }

`

export const ReportageTitle = styled.h1`
    font-family: hd_light;
    line-height: normal;
    font-size: 32px;
    letter-spacing: 0.06em;
    margin: 0px;
    color: #FCFCF9;
    padding-top: 40px;
    font-variant-ligatures: discretionary-ligatures;
    font-feature-settings: dlig;
`
export const ReportageInfo = styled.h2`
    font-family: dp_light;
    line-height: normal;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-align: left;
    margin: 0px;
    padding: 20px 60px 0px 0px;
    color: #FCFCF9;
    font-variant-ligatures: discretionary-ligatures;
    font-feature-settings: dlig;
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ReportageImgLeft = styled.div `
    background-image: url(${FirstReportageImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 352px;
    height: 197.16px;
`
export const ReportageImgMiddle = styled.div `
    background-image: url(${SecondReportageImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 352px;
    height: 197.16px;
`
export const ReportageImgRight = styled.div `
    background-image: url(${ThirdReportageImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 352px;
    height: 197.16px;
`


export const IntervjueContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 100px;
`

export const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 30px;
`

export const IntervjueImgLeft = styled.div `
    background-image: url(${IntervjueImgFirst});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 352px;
    height: 197.16px;
`

export const IntervjueImgRight = styled.div `
    background-image: url(${IntervjueImgSecond});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 741px;
    height: 414.88px;
`

export const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
