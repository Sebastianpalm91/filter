import React, { PureComponent } from 'react';
import { ReportageTitle, ReportageInfo, TextWrapper, IntervjueContainer, RightWrapperConversation, ConversationImgLeft, ConversationImgRight, LeftWrapperConversation, FlexWrapper, CredentialColor, CredentialsWrapper } from './styles'

class LatestConversations extends PureComponent {
    render () {
        return (
            <IntervjueContainer>
                <FlexWrapper>
                    <LeftWrapperConversation>
                        <ConversationImgRight />
                        <TextWrapper>
                            <ReportageTitle>
                                »Att vara tillbakadragen och blyg ger ingenting«
                            </ReportageTitle>
                            <ReportageInfo>
                                Han driver tre restauranger, ger ut kokböcker, satsar på en internationell karriär – och släpper nu en ny TV-serie. Filter frågade Niklas Ekstedt om ju fler soppor ger en desto sämre kock.
                            </ReportageInfo>
                            <CredentialsWrapper>
                                TEXT: <CredentialColor>MATTIAS GÖRANSSON</CredentialColor>
                                <br />
                            </CredentialsWrapper>
                            <CredentialsWrapper>
                                FOTO: <CredentialColor>MAGNUS BERGSTRÖM</CredentialColor>
                            </CredentialsWrapper>
                        </TextWrapper>
                    </LeftWrapperConversation>
                    <RightWrapperConversation>
                        <ConversationImgLeft />
                        <TextWrapper>
                            <ReportageTitle>
                                »Att dricka vin är att smaka på klimat- förändringarna«
                            </ReportageTitle>
                            <ReportageInfo>
                                Finsmakare har redan oroats av att klimatförändringarna äventyrar produktionen av mörk choklad och kaffe. Nu varnar forskaren Kimberly Nicholas för att ytterligare ett njutningsmedel ligger i farozonen.
                            </ReportageInfo>
                            <CredentialsWrapper>
                                TEXT: <CredentialColor>ERIK EJE ALMQVIST</CredentialColor>
                                <br />
                            </CredentialsWrapper>
                            <CredentialsWrapper>
                                FOTO: <CredentialColor>MAGNUS BERGSTRÖM</CredentialColor>
                            </CredentialsWrapper>
                        </TextWrapper>
                    </RightWrapperConversation>
                </FlexWrapper>
            </IntervjueContainer>
        );
    }
}

export default LatestConversations;
