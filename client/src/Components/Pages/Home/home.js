import React, { PureComponent } from 'react';
import { Container, Wrapper, Hr, BreadCrumb, MainColor } from './styles'
import LatestReportage from './latestreportage.js';
import LatestReportages from './latestreportages.js'
import LatestIntervjues from './latestintervjues.js'
import LatestConversations from './latestconversations.js'

class Home extends PureComponent {

    render() {
        return (
            <Container>
                <Wrapper>
                    <BreadCrumb>Reportage<MainColor> Filter #64</MainColor></BreadCrumb>
                    <Hr></Hr>
                    <LatestReportage />
                    <BreadCrumb>Från senaste numret <MainColor>Filter #64</MainColor></BreadCrumb>
                    <Hr></Hr>
                    <LatestReportages />
                    <BreadCrumb>artikeltyp <MainColor>samtal</MainColor></BreadCrumb>
                    <Hr></Hr>
                    <LatestIntervjues />
                    <BreadCrumb>artikeltyp <MainColor>intervjuer</MainColor></BreadCrumb>
                    <Hr></Hr>
                    <LatestConversations />
                </Wrapper>
            </Container>
        );
    }

}

export default Home;
