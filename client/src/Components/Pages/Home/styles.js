import styled from 'styled-components';
import { breakpoint } from '../../../assets/mixins/mixins';
//Images import
import FrontPageImg from '../../../assets/img/teodor-forselius-4b.jpg'
import FirstReportageImage from '../../../assets/img/anna-odell-1.jpg'
import SecondReportageImage from '../../../assets/img/peter-grocc88nlund-1.jpg'
import ThirdReportageImage from '../../../assets/img/linda-acc8agren-1.jpg'
import IntervjueImgSecond from '../../../assets/img/niklas-ekstedt-1.jpg'
import IntervjueImgFirst from '../../../assets/img/vinforskare_kimberlynicholas1.jpg'
import ConversationImgSecond from '../../../assets/img/anton-berg-1.jpg'
import ConversationImgFirst from '../../../assets/img/carolina-neurath-2.jpg'

export const MainColor = styled.p`
    color: #E1AB99;
    padding: 0px;
    margin: 0px;
    padding-left: 6px;
`

export const CredentialsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    color: #FCFCF9;
    font-family: dp_light;
    font-size: 16px;
    letter-spacing: 0.02em;
`

export const CredentialColor = styled.p`
    color: #E1AB99;
    text-decoration: underline;
    margin: 0px;
    padding-left: 5px;
`

export const Container = styled.div `
    display: flex;
    justify-content: center;
    background-color: #1A1A1A;
    padding: 60px 0px 60px 0px;
    margin-top: -1px;
`

export const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 200px;
    margin-right: 200px;
    ${breakpoint.down('s')`
        width: 100%;
        margin: 0px;
    `}
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
    ${breakpoint.down('s')`
        font-size: 12px;
        width: unset;
        margin: 40px 16px 0px 16px;
    `}
`

export const Hr = styled.hr `
    display: block;
    width: 100%;
    border-width: 0.5px;
    border-color: #FCFCF9;
    border-style: solid;
    margin-bottom: 30px;
    ${breakpoint.down('s')`
        width: unset;
        margin: 2px 16px 10px 16px;
    `}
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
    ${breakpoint.down('s')`
        font-size: 24px;
        letter-spacing: 0.04em;
    `}
`


// export const LinkTo = styled.a `
//     color: #E1AB99;
// `

export const FirstReportageWrapper = styled.div `
    margin-bottom: 80px;
    ${breakpoint.down('s')`
        margin: 0px 16px 0px 16px;
    `}
`


export const ArticleImage = styled.div `
    background-image: url(${FrontPageImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    margin: 24px 0px 24px 0px;
    ${breakpoint.down('s')`
        height: 192px;
    `}
`

export const SubTitle = styled.h2`
    font-family: hd_light;
    line-height: 27px;
    font-size: 24px;
    letter-spacing: 0.06em;
    color: #FCFCF9;
    margin: 0px;
    width: 738px;
    padding-bottom: 12px;
    font-variant-ligatures: discretionary-ligatures;
    font-feature-settings: dlig;
    ${breakpoint.down('s')`
        width: unset;
        padding-bottom: 10px;
    `}
`

//Arcive
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
    ${breakpoint.down('s')`
        width: unset;
        margin: 0px 16px 0px 16px;
    `}
`

export const ArciveWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 30px
    &:last-child {
        padding-right: 0px;
    }
    ${breakpoint.down('s')`
        padding: 0px;
        &:last-child {
            display: none;
        }
        width: 157.71px;
    `}
`

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    ${breakpoint.down('s')`
        justify-content: space-between;
    `}
`

//Reportage
export const ReportageTitle = styled.h1`
    font-family: hd_light;
    line-height: normal;
    font-size: 33px;
    letter-spacing: 0.06em;
    margin: 0px;
    color: #FCFCF9;
    padding-top: 40px;
    font-variant-ligatures: discretionary-ligatures;
    font-feature-settings: dlig;
    ${breakpoint.down('s')`
        font-size: 16px;
        padding: 12px 0px 12px 0px;
    `}
`
export const ReportageInfo = styled.h2`
    font-family: dp_light;
    line-height: normal;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-align: left;
    margin: 0px;
    padding: 20px 60px 12px 0px;
    color: #FCFCF9;
    font-variant-ligatures: discretionary-ligatures;
    font-feature-settings: dlig;

    ${breakpoint.down('s')`
        line-height: 1.4em;
        font-size: 12px;
        padding: 0px 0px 10px 0px;
    `}
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${breakpoint.down('s')`

    `}
`

export const ReportageImgLeft = styled.div `
    background-image: url(${FirstReportageImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 352px;
    height: 197.16px;
    ${breakpoint.down('s')`
        width: unset;
        height: 88.39px;
    `}
`
export const ReportageImgMiddle = styled.div `
    background-image: url(${SecondReportageImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 352px;
    height: 197.16px;
    ${breakpoint.down('s')`
        width: unset;
        height: 88.39px;
    `}
`
export const ReportageImgRight = styled.div `
    background-image: url(${ThirdReportageImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 352px;
    height: 197.16px;
    ${breakpoint.down('s')`
        width: unset;
        height: 88.39px;
    `}
`


//Intervjues
export const IntervjueContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 100px;
    ${breakpoint.down('s')`
        margin: 0px 16px 0px 16px;
    `}
`

export const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    ${breakpoint.down('s')`
        width: 157.71px;
        padding: 0px;
    `}
`

export const IntervjueImgLeft = styled.div `
    background-image: url(${IntervjueImgFirst});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 352px;
    height: 197.16px;
    ${breakpoint.down('s')`
        height: 88.3px;
        width: unset;
    `}
`

export const IntervjueImgRight = styled.div `
    background-image: url(${IntervjueImgSecond});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 741px;
    height: 414.88px;
    ${breakpoint.down('s')`
        height: 88.3px;
        width: unset;
    `}
`

export const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${breakpoint.down('s')`
        padding: 0px;
        width: 157.71px;
    `}
`

//Conversations
export const RightWrapperConversation = styled.div`
    display: flex;
    flex-direction: column;
    ${breakpoint.down('s')`
        width: 157.71px;
    `}
`

export const LeftWrapperConversation = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    ${breakpoint.down('s')`
        padding: 0px;
        width: 157.71px;
    `}
`

export const ConversationImgLeft = styled.div `
    background-image: url(${ConversationImgFirst});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 352px;
    height: 197.16px;
    ${breakpoint.down('s')`
        width: unset;
        height: 88.3px;
    `}
`

export const ConversationImgRight = styled.div `
    background-image: url(${ConversationImgSecond});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 741px;
    height: 414.88px;
    ${breakpoint.down('s')`
        width: unset;
        height: 88.3px;
    `}
`
