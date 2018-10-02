import React, { PureComponent } from 'react';
import { ReportageImgLeft, ReportageImgMiddle, ReportageImgRight, ArciveContainer, ArciveWrapper, ReportageTitle, ReportageInfo, TextWrapper, FlexWrapper, CredentialColor, CredentialsWrapper } from './styles'
class LatestReportages extends PureComponent {

    render() {
        return (
            <ArciveContainer>
                <FlexWrapper>
                    <ArciveWrapper>
                        <ReportageImgLeft />
                        <TextWrapper>
                            <ReportageTitle>
                                »Jag är en extremsportare inom konsten«
                            </ReportageTitle>
                            <ReportageInfo>
                                Med alla olika metanivåer i Återträffen fick hon publiken att spekulera, fascineras och förfäras. Nu tar Anna Odell obehaget till nya höjder.
                            </ReportageInfo>
                            <CredentialsWrapper>
                                TEXT: <CredentialColor>MADELENE POLLNOW</CredentialColor>
                                <br />
                            </CredentialsWrapper>
                            <CredentialsWrapper>
                                FOTO: <CredentialColor>MAGNUS BERGSTRÖM</CredentialColor>
                            </CredentialsWrapper>
                        </TextWrapper>
                    </ArciveWrapper>
                    <ArciveWrapper>
                        <ReportageImgMiddle />
                        <TextWrapper>
                            <ReportageTitle>
                                »Jag fann extraktet av mänsklig kamp«
                            </ReportageTitle>
                            <ReportageInfo>
                                I sin nya film Goliat utforskar Tjuvheder-regissören Peter Grönlund återigen kriminalitet, klass och utanförskap. Varför är en medelklassgrabb från Bromma så skicklig på att skildra samhällets utkanter?
                            </ReportageInfo>
                            <CredentialsWrapper>
                                TEXT: <CredentialColor>OSKAR SONN LINDELL</CredentialColor>
                                <br />
                            </CredentialsWrapper>
                            <CredentialsWrapper>
                                FOTO: <CredentialColor>MAGNUS BERGSTRÖM</CredentialColor>
                            </CredentialsWrapper>
                        </TextWrapper>
                    </ArciveWrapper>
                    <ArciveWrapper>
                        <ReportageImgRight />
                        <TextWrapper>
                            <ReportageTitle>
                                »Mitt personbästa är 62 meter under vattnet«
                            </ReportageTitle>
                            <ReportageInfo>
                                I fjol blev hon Sveriges första representant vid Miss Mermaid International. Linda Ågren förklarar varför det handlar om så mycket mer än att sitta på ett snäckskal och se vacker ut.
                            </ReportageInfo>
                            <CredentialsWrapper>
                                TEXT: <CredentialColor>MATTIAS GÖRANSSON</CredentialColor>
                                <br />
                            </CredentialsWrapper>
                            <CredentialsWrapper>
                                FOTO: <CredentialColor>MAGNUS BERGSTRÖM</CredentialColor>
                            </CredentialsWrapper>
                        </TextWrapper>
                    </ArciveWrapper>
                </FlexWrapper>
            </ArciveContainer>
        );
    }

}

export default LatestReportages;
