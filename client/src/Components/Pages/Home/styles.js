import styled from 'styled-components';
import FilterSvg from '../../../assets/img/logo.svg';
import FrontPageImg from '../../../assets/img/teodor-forselius-4b.jpg'
import FirstReportageImage from '../../../assets/img/anna-odell-1.jpg'
import SecondReportageImage from '../../../assets/img/peter-grocc88nlund-1.jpg'
import ThirdReportageImage from '../../../assets/img/linda-acc8agren-1.jpg'


export const MainColor = styled.p`
    color: #E1AB99;
    padding: 0px;
    margin: 0px;
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
    font-family: dp;
    line-height: 21px;
    font-size: 18px
    letter-spacing: 0.02em;
    word-wrap: break-word;
    color: #FCFCF9;
    text-align: left;
    margin: 0px;
    text-transform: uppercase;
`

export const Hr = styled.hr `
    display: block;
    width: 100%;
    border-width: 2px;
    border-color: #FCFCF9;
    border-style: solid;
    margin-bottom: 30px;
`
export const Title = styled.h1 `
    font-family: hd_light;
    line-height: normal;
    font-size: 48px;
    letter-spacing: 0.06em;
    color: #FCFCF9;
    margin: 0px
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
    font-family: hd_regular;
    line-height: 42px;
    font-size: 24px;
    letter-spacing: 0.06em;
    color: #FCFCF9;
    margin: 0px;
    width: 738px;
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
    justify-content: space-between;
    padding-right: 10px
    &:last-child {
        padding-right: 0px!important;
    }

`

export const ReportageTitle = styled.h1`
    font-family: hd_light;
    line-height: normal;
    font-size: 32px;
    letter-spacing: 0.06em;
    margin: 10px 0px 0px 0px;
    color: #FCFCF9;
`
export const ReportageInfo = styled.h2`
    font-family: dp;
    line-height: normal;
    font-size: 18px;
    letter-spacing: 0.02em;
    text-align: left;
    padding-right: 40px;
    margin: 0px;
    color: #FCFCF9;
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
