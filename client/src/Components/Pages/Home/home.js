import React, { PureComponent } from 'react';
import { Container, Wrapper, Title, Hr, BreadCrumb, ArticleImage, LinkTo, SubTitle, Imginfo, MainColor, ReportageImgLeft, ReportageImgMiddle, ReportageImgRight, ArciveContainer, ArciveWrapper, ReportageTitle, ReportageInfo, TextWrapper } from './styles'
import LatestReportage from './latestreportage.js';
import LatestReportages from './latestreportages.js'
import LatestIntervjues from './latestintervjues.js'

class Home extends PureComponent {

    render() {
        return (
            <Container>
                <Wrapper>
                    <LatestReportage />
                    <BreadCrumb>Från senaste numret <MainColor>Filter #64</MainColor></BreadCrumb>
                    <Hr></Hr>
                    <LatestReportages />
                    <BreadCrumb>artikeltyp <MainColor>samtal</MainColor></BreadCrumb>
                    <Hr></Hr>
                    <LatestIntervjues />
                    <BreadCrumb>artikeltyp <MainColor>intervjuer</MainColor></BreadCrumb>
                    <Hr></Hr>
                </Wrapper>
            </Container>
        );
    }

}

export default Home;
