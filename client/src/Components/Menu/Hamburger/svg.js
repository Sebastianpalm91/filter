import React, { Component } from 'react';
import { Container, Line, Toggle, Panel, SubMenuLi, StyledLinkSubMenu } from './styles';
// import './AnimationStyle/animation.css';

class Svg extends Component {
    constructor(props) {
        super(props);
        this.state = {addClass: false}
    }
    toggle() {
        this.setState({addClass: !this.state.addClass});
    }
    render() {

        return (
            <Container>
                <Panel active={this.state.addClass}>
                    <SubMenuLi><StyledLinkSubMenu to='/latestnumber'>Senaste Numret</StyledLinkSubMenu></SubMenuLi>
                    <SubMenuLi><StyledLinkSubMenu to='/categories'>Omgiven av idioti</StyledLinkSubMenu></SubMenuLi>
                    <SubMenuLi><StyledLinkSubMenu to='/articles/Palme-Mordet'>Den förlorade sonen</StyledLinkSubMenu></SubMenuLi>
                    <SubMenuLi><StyledLinkSubMenu to='/blog'>Upptäcksresan</StyledLinkSubMenu></SubMenuLi>
                    <SubMenuLi><StyledLinkSubMenu to='/about'>Från Sverige med kärlek</StyledLinkSubMenu></SubMenuLi>
                    <SubMenuLi><StyledLinkSubMenu to='/subscription'>Pernille Fisher</StyledLinkSubMenu></SubMenuLi>
                    <SubMenuLi><StyledLinkSubMenu to='/subscription'>Christensen</StyledLinkSubMenu></SubMenuLi>
                </Panel>
                <Toggle version="1.1" id="Layer_1" x="0px" y="0px"
                     viewBox="0 0 15 15"
                     style={{width:"40px", height: "40px"}}
                     onClick={this.toggle.bind(this)}
                     active={this.state.addClass}>
                <g>
                    <Line d="M1.9,3.8h11.2C13.54,3.8,13.9,3.44,13.9,3S13.54,2.2,13.1,2.2H1.9C1.46,2.2,1.1,2.56,1.1,3S1.46,3.8,1.9,3.8z"/>
                    <Line d="M13.1,6.2H1.9C1.46,6.2,1.1,6.56,1.1,7s0.36,0.8,0.8,0.8h11.2C13.54,7.8,13.9,7.44,13.9,7S13.54,6.2,13.1,6.2z"/>
                    <Line d="M13.1,10.2H1.9c-0.44,0-0.8,0.36-0.8,0.8s0.36,0.8,0.8,0.8h11.2c0.44,0,0.801-0.36,0.801-0.8S13.54,10.2,13.1,10.2z"/>
                </g>
                </Toggle>
            </Container>
        );
    }
}





export default Svg;
