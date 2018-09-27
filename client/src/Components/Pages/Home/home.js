import React, { PureComponent } from 'react';
import { Container, Wrapper, Title, Hr, BreadCrumb, ArticleImage, LinkTo, SubTitle, Imginfo, MainColor, ReportageImgLeft, ReportageImgMiddle, ReportageImgRight, ArciveContainer, ArciveWrapper, ReportageTitle, ReportageInfo } from './styles'


class Home extends PureComponent {

    render() {
        return (
            <Container>
                <Wrapper>
                    <BreadCrumb>Reportage<MainColor>Filter #64</MainColor></BreadCrumb>
                    <Hr></Hr>
                    <Title>
                        Den här 23-åringen skippade gymnasiet. Nu är hans bolag värt en miljard. Det är det minst konstiga med den här historien.
                    </Title>
                    <ArticleImage />
                    <SubTitle>
                        Så vill Theodor Forselius och ett gäng utflippade pionjärer förändra internet i grunden.
                    </SubTitle>
                    <Imginfo>
                        Text: CHRISTOPHER FRIMAN
                        <br />
                        Foto: MAGNUS BERGSTRÖM
                    </Imginfo>
                    <BreadCrumb>Från senaste numret Filter #64</BreadCrumb>
                    <Hr></Hr>
                    <ArciveContainer>
                        <ArciveWrapper>
                            <ReportageImgLeft />
                            <ReportageTitle>
                                »Jag är en extremsportare inom konsten«
                            </ReportageTitle>
                            <ReportageInfo>
                                Med alla olika metanivåer i Återträffen fick hon publiken att spekulera, fascineras och förfäras. Nu tar Anna Odell obehaget till nya höjder.
                            </ReportageInfo>
                        </ArciveWrapper>
                        <ArciveWrapper>
                            <ReportageImgMiddle />
                            <ReportageTitle>
                                »Jag fann extraktet av mänsklig kamp«
                            </ReportageTitle>
                            <ReportageInfo>
                                I sin nya film Goliat utforskar Tjuvheder-regissören Peter Grönlund återigen kriminalitet, klass och utanförskap. Varför är en medelklassgrabb från Bromma så skicklig på att skildra samhällets utkanter?
                            </ReportageInfo>
                        </ArciveWrapper>
                        <ArciveWrapper>
                            <ReportageImgRight />
                            <ReportageTitle>
                                »Mitt personbästa är 62 meter under vattnet«
                            </ReportageTitle>
                            <ReportageInfo>
                                I fjol blev hon Sveriges första representant vid Miss Mermaid International. Linda Ågren förklarar varför det handlar om så mycket mer än att sitta på ett snäckskal och se vacker ut.
                            </ReportageInfo>
                        </ArciveWrapper>
                    </ArciveContainer>
                    <BreadCrumb>artikeltyp SAMTAL</BreadCrumb>
                    <Hr></Hr>
                </Wrapper>
            </Container>
        );
    }

}

export default Home;
