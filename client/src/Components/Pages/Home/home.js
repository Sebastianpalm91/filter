import React, { PureComponent } from 'react';
import { Container, Wrapper, Title, Hr, HeaderInfo, SubscriptionContainer, Logo, LinkTo } from './styles'


class Home extends PureComponent {

    render() {
        return (
            <Container>
                <Wrapper>
                    <Logo />
                    <Title>Vi har gjort det till en dygd att gå över ån efter vatten.</Title>
                    <Hr></Hr>
                    <HeaderInfo>
                        Vem mördade Olof Palme? Vem är Skandiamannen? Varför har polisen dåligt samvete? Läs om det uppmärksammade avslöjandet och mycket mer i tidningen Filter eller på vår webb <LinkTo href="https://magasinetfilter.se">magasinetfilter.se</LinkTo>
                    </HeaderInfo>
                </Wrapper>
            </Container>
        );
    }

}

export default Home;
