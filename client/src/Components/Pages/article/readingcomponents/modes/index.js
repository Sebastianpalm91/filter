import React, { Component } from 'react';
import { Container, Wrapper, Mode, ModeBox, BigFont, SmallFont, Row, Paragraph, NightMode } from './styles';


class MobileButton extends Component {

    state = {
        toggleOpen: false,
        NightMode: false,
    }

    onClick = ({ target }) => {
        if (target.classList.toggle('active')) {
            [...target.parentNode.children].forEach(x => x.classList.remove('active'));
            target.classList.add('active');
            console.log('2');
        }
    }

    showSocials = (e) => {
        this.setState({ toggleOpen: !this.state.toggleOpen })
    }

    toggleNightMode = () => {
        this.setState({ NightMode: !this.state.NightMode })
    }

    render() {
        return (
            <Container>
                <Wrapper>
                    <Mode onClick={(e) => {this.onClick(e); this.showSocials(e); this.toggleNightMode()}}/>
                    <ModeBox toggleOpen={this.state.toggleOpen}>
                        <Row>
                            <SmallFont onClick={this.props.font}/>
                            <BigFont onClick={this.props.font}/>
                        </Row>
                        <Paragraph>night mode</Paragraph>
                        <NightMode nightMode={this.state.NightMode} onClick={this.props.nightmode}/>
                    </ModeBox>
                </Wrapper>
            </Container>
        );
    }

}

export default MobileButton;
