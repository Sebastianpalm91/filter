import React, { Component } from 'react';
import Svg from './Hamburger/svg';
import { Li, StyledLink, Ul, Wrapper, SubMenu, SubMenuLi, SubMenuUl, Vr } from './styles';

class Navigation extends Component {
    state = {
        hover: false,
        submenu: true,
    };

    // onMouseEnterHandler = () => {
    //     this.setState({
    //         hover: true,
    //         submenu: true,
    //     });
    //     console.log('enter');
    // }
    //
    // onMouseLeaveHandler = () => {
    //     this.setState({
    //         hover: false,
    //         submenu: false,
    //     });
    //     console.log('leave');
    // }


    render() {
        return (
            <Wrapper>
                <Ul onMouseLeave={this.onMouseLeaveHandler}>
                    <Li>
                        <StyledLink
                            onMouseEnter={this.onMouseEnterHandler}
                            to='/latestnumber'>SENASTE NUMRET
                        </StyledLink>
                    </Li>
                    <Li>
                        <StyledLink
                            onMouseEnter={this.onMouseEnterHandler}
                            to='/categories'>KATEGORIER
                        </StyledLink>
                    </Li>
                    <Li>
                        <StyledLink
                            onMouseEnter={this.onMouseEnterHandler}
                            to='/articles/Palme-Mordet'>ARKIVET
                        </StyledLink>
                    </Li>
                    <Li>
                        <StyledLink
                            onMouseEnter={this.onMouseEnterHandler}
                            to='/blog'>BLOGGEN
                        </StyledLink>
                    </Li>
                    <Li>
                        <StyledLink
                            onMouseEnter={this.onMouseEnterHandler}
                            to='/about'>OM FILTER
                        </StyledLink>
                    </Li>
                    <Li>
                        <StyledLink
                            onMouseEnter={this.onMouseEnterHandler}
                            to='/subscription'>BLI PRENUMERANT
                        </StyledLink>
                    </Li>
                </Ul>
                { this.state.submenu ?
                <SubMenu onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                    <SubMenuUl>
                        <Vr>
                        <SubMenuLi><StyledLink to='/latestnumber'>SENASTE NUMRET</StyledLink></SubMenuLi>
                        <SubMenuLi><StyledLink to='/categories'>KATEGORIER</StyledLink></SubMenuLi>
                        <SubMenuLi><StyledLink to='/articles/Palme-Mordet'>ARKIVET</StyledLink></SubMenuLi>
                        <SubMenuLi><StyledLink to='/blog'>BLOGGEN</StyledLink></SubMenuLi>
                        <SubMenuLi><StyledLink to='/about'>OM FILTER</StyledLink></SubMenuLi>
                        <SubMenuLi><StyledLink to='/subscription'>BLI PRENUMERANT</StyledLink></SubMenuLi>
                        </Vr>
                    </SubMenuUl>
                </SubMenu>
                 : null }
            </Wrapper>
        );
    }
}

export default Navigation;
