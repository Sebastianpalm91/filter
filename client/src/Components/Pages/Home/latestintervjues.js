import React, { PureComponent } from 'react';
import { ReportageTitle, ReportageInfo, TextWrapper, IntervjueContainer, LeftWrapper, IntervjueImgLeft, IntervjueImgRight, RightWrapper, FlexWrapper, CredentialColor, CredentialsWrapper } from './styles'

class LatestIntervjues extends PureComponent {

    render() {
        return (
            <IntervjueContainer>
                <FlexWrapper>
                    <LeftWrapper>
                        <IntervjueImgLeft />
                        <TextWrapper>
                            <ReportageTitle>
                                »Att dricka vin är att smaka på klimat- förändringarna«
                            </ReportageTitle>
                            <ReportageInfo>
                                Finsmakare har redan oroats av att klimatförändringarna äventyrar produktionen av mörk choklad och kaffe. Nu varnar forskaren Kimberly Nicholas för att ytterligare ett njutningsmedel ligger i farozonen.
                            </ReportageInfo>
                            <CredentialsWrapper>
                                TEXT: <CredentialColor>ANNA LILJEMALM</CredentialColor>
                                <br />
                            </CredentialsWrapper>
                            <CredentialsWrapper>
                                FOTO: <CredentialColor>LINN BERGBRANT</CredentialColor>
                            </CredentialsWrapper>
                        </TextWrapper>
                    </LeftWrapper>

                    <RightWrapper>
                        <IntervjueImgRight />
                        <TextWrapper>
                            <ReportageTitle>
                                »Att vara tillbakadragen och blyg ger ingenting«
                            </ReportageTitle>
                            <ReportageInfo>
                                Han driver tre restauranger, ger ut kokböcker, satsar på en internationell karriär – och släpper nu en ny TV-serie. Filter frågade Niklas Ekstedt om ju fler soppor ger en desto sämre kock.
                            </ReportageInfo>
                            <CredentialsWrapper>
                                TEXT: <CredentialColor>MADELENE POLLNOW</CredentialColor>
                                <br />
                            </CredentialsWrapper>
                            <CredentialsWrapper>
                                FOTO: <CredentialColor>MAGNUS BERGSTRÖM</CredentialColor>
                            </CredentialsWrapper>
                        </TextWrapper>
                    </RightWrapper>
                </FlexWrapper>
            </IntervjueContainer>
        );
    }

}

export default LatestIntervjues;
