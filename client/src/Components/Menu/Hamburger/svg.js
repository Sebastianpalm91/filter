import React, { Component } from 'react';
import { Container, Line, Toggle, ListItem, Ul, Nav, LinkItems, MainNavitem } from './styles';
// import './AnimationStyle/animation.css';
import AnimateHeight from 'react-animate-height';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
class Svg extends Component {
    state = {
        addClass: false,
        subMenu: false,
        height: 0,
        activeIndex: '',
    }
    componentDidMount() {
        this.setState({ activeIndex: [] })
    }

    toggle() {
        this.setState({
            addClass: !this.state.addClass,
        });
    }
    toggleSubMenu = (index, e) => {
        const { height } = this.state;
        this.setState({
            height: height === 0 ? 'auto' : 0,
            activeIndex: index,
        });
    }

    render() {
        const { height } = this.state;
        return (
            <Container>
                <Toggle version="1.1" id="Layer_1" x="0px" y="0px"
                    viewBox="0 0 15 15"
                    style={{width:"40px", height: "40px"}}
                    onClick={this.toggle.bind(this)}
                    active={this.state.addClass}>
                    <g>
                        <Line active={this.state.addClass} d="M1.9,3.8h11.2C13.54,3.8,13.9,3.44,13.9,3S13.54,2.2,13.1,2.2H1.9C1.46,2.2,1.1,2.56,1.1,3S1.46,3.8,1.9,3.8z"/>
                        <Line active={this.state.addClass} d="M13.1,6.2H1.9C1.46,6.2,1.1,6.56,1.1,7s0.36,0.8,0.8,0.8h11.2C13.54,7.8,13.9,7.44,13.9,7S13.54,6.2,13.1,6.2z"/>
                        <Line active={this.state.addClass} d="M13.1,10.2H1.9c-0.44,0-0.8,0.36-0.8,0.8s0.36,0.8,0.8,0.8h11.2c0.44,0,0.801-0.36,0.801-0.8S13.54,10.2,13.1,10.2z"/>
                    </g>
                </Toggle>
                <Nav active={this.state.addClass}>
                    <Ul>
                        <MainNavitem onClick={this.toggleSubMenu.bind(this, 0)}>Senaste numret{ this.state.activeIndex === 0 && height === 0 ? <FaAngleDown style={{ paddingLeft: '15px', height: '20px', width: '10px'}}/> : <FaAngleUp style={{ paddingLeft: '15px', height: '20px', width: '10px'}}/>}
                        </MainNavitem>
                            {this.state.activeIndex === 0 ?
                                <AnimateHeight
                                    duration={ 500 }
                                    height={ height }
                                    >
                                    <ListItem><LinkItems onClick={this.toggle.bind(this)} style={{ padding: '10px 0px 0px 0px'}} to='/'>Filter #63</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggle.bind(this)} to='/articles/Omgiven-av-idioti'> Omgiven av idioti</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggle.bind(this)} to='/'>Den förlorade sonen</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} to='/'>Upptäcksresan</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} to='/'>Från Sverige med krälek</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} style={{ padding: '0px 0px 10px 0px'}} to='/'>Pernille Fischer Christensen</LinkItems></ListItem>
                                </AnimateHeight>
                            : null}

                        <MainNavitem onClick={this.toggleSubMenu.bind(this, 1)}>Kategorier{ this.state.activeIndex === 1 && height === 0 ? <FaAngleDown style={{ paddingLeft: '15px', height: '20px', width: '10px'}}/> : <FaAngleUp style={{ paddingLeft: '15px', height: '20px', width: '10px'}}/>}
                        </MainNavitem>
                            {this.state.activeIndex === 1 ?
                                <AnimateHeight
                                    duration={ 500 }
                                    height={ height }
                                    >
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} style={{ padding: '10px 0px 0px 0px'}} to='/'>Filter #63</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} to='/'>Omgiven av idioti</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} to='/'>Den förlorade sonen</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} to='/'>Upptäcksresan</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} to='/'>Från Sverige med krälek</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} style={{ padding: '0px 0px 10px 0px'}} to='/'>Pernille Fischer Christensen</LinkItems></ListItem>
                                </AnimateHeight>
                            : null}

                        <MainNavitem onClick={this.toggleSubMenu.bind(this, 2)}>Arkivet{ this.state.activeIndex === 2 && height === 0 ? <FaAngleDown style={{ paddingLeft: '15px', height: '20px', width: '10px'}}/> : <FaAngleUp style={{ paddingLeft: '15px', height: '20px', width: '10px'}}/>}
                        </MainNavitem>
                            {this.state.activeIndex === 2 ?
                                <AnimateHeight
                                    duration={ 500 }
                                    height={ height }
                                    >
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} style={{ padding: '10px 0px 0px 0px'}} to='/'>Filter #63</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} to='/'>Omgiven av idioti</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} to='/'>Den förlorade sonen</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} to='/'>Upptäcksresan</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} to='/'>Från Sverige med krälek</LinkItems></ListItem>
                                    <ListItem><LinkItems onClick={this.toggleSubMenu.bind(this)} style={{ padding: '0px 0px 10px 0px'}} to='/'>Pernille Fischer Christensen</LinkItems></ListItem>
                                </AnimateHeight>
                            : null}

                        <MainNavitem onClick={this.toggleSubMenu}><LinkItems style={{ fontSize: '24px', fontFamily: 'dp_bold'}} to='/'>Bloggen</LinkItems></MainNavitem>

                        <MainNavitem onClick={this.toggleSubMenu.bind(this, 3)}>Om filter{ this.state.activeIndex === 3 && height === 0 ? <FaAngleDown style={{ paddingLeft: '15px', height: '20px', width: '10px'}}/> : <FaAngleUp style={{ paddingLeft: '15px', height: '20px', width: '10px'}}/>} </MainNavitem>
                            {this.state.activeIndex === 3 ?
                                <AnimateHeight
                                    duration={ 500 }
                                    height={ height }
                                    >
                                    <ListItem><LinkItems style={{ padding: '10px 0px 0px 0px'}} to='/'>Filter #63</LinkItems></ListItem>
                                    <ListItem><LinkItems to='/'>Omgiven av idioti</LinkItems></ListItem>
                                    <ListItem><LinkItems to='/'>Den förlorade sonen</LinkItems></ListItem>
                                    <ListItem><LinkItems to='/'>Upptäcksresan</LinkItems></ListItem>
                                    <ListItem><LinkItems to='/'>Från Sverige med krälek</LinkItems></ListItem>
                                    <ListItem><LinkItems style={{ padding: '0px 0px 10px 0px'}} to='/'>Pernille Fischer Christensen</LinkItems></ListItem>
                                </AnimateHeight>
                            : null}
                        <MainNavitem onClick={this.toggleSubMenu}><LinkItems style={{ fontSize: '24px', fontFamily: 'dp_bold'}} to='/'>Bli Prenumerant</LinkItems></MainNavitem>
                    </Ul>
                </Nav>
            </Container>
        );
    }
}

export default Svg;
