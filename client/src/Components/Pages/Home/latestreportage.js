import React, { PureComponent } from 'react';
import { Title, Hr, BreadCrumb, ArticleImage, MainColor, SubTitle, Imginfo, FirstReportageWrapper, CredentialColor, CredentialsWrapper } from './styles'

class Latest extends PureComponent {
    render () {
        return (
            <FirstReportageWrapper>
                <Title>
                    Den här 23-åringen skippade gymnasiet. Nu är hans bolag värt en miljard. Det är det minst konstiga med den här historien.
                </Title>
                <ArticleImage />
                <SubTitle>
                    Så vill Theodor Forselius och ett gäng utflippade pionjärer förändra internet i grunden.
                </SubTitle>
                <CredentialsWrapper>
                    TEXT: <CredentialColor>CHRISTOPHER FRIMAN</CredentialColor>
                    <br />
                </CredentialsWrapper>
                <CredentialsWrapper>
                    FOTO: <CredentialColor>MAGNUS BERGSTRÖM</CredentialColor>
                </CredentialsWrapper>
            </FirstReportageWrapper>
        );
    }
}

export default Latest;
