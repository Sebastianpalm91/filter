import React, { Component } from 'react';
import Svg from './Hamburger/svg';
import { Li, StyledLink, Ul, Wrapper, SubMenu, SubMenuLi, SubMenuUl, Vr, StyledLinkSubMenu, LinkInfo, Title, Summary, SummaryImg } from './styles';
import posed from "react-pose";

class Navigation extends Component {
    state = {
        hover: true,
        submenu: true,
    };

    onMouseEnterHandler = () => {
        this.setState({
            hover: true,
            submenu: true,
        });
        console.log('enter');
    }

    onMouseLeaveHandler = () => {
        this.setState({
            hover: false,
            submenu: false,
        });
        console.log('leave');
    }


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
                        <SubMenuLi><StyledLinkSubMenu to='/latestnumber'>Senaste Numret</StyledLinkSubMenu></SubMenuLi>
                        <SubMenuLi><StyledLinkSubMenu to='/categories'>Omgiven av idioti</StyledLinkSubMenu></SubMenuLi>
                        <SubMenuLi><StyledLinkSubMenu to='/articles/Palme-Mordet'>Den förlorade sonen</StyledLinkSubMenu></SubMenuLi>
                        <SubMenuLi><StyledLinkSubMenu to='/blog'>Upptäcksresan</StyledLinkSubMenu></SubMenuLi>
                        <SubMenuLi><StyledLinkSubMenu to='/about'>Från Sverige med kärlek</StyledLinkSubMenu></SubMenuLi>
                        <SubMenuLi><StyledLinkSubMenu to='/subscription'>Pernille Fisher</StyledLinkSubMenu></SubMenuLi>
                        <SubMenuLi><StyledLinkSubMenu to='/subscription'>Christensen</StyledLinkSubMenu></SubMenuLi>
                        </Vr>
                        <LinkInfo>
                            <Title>
                                Granskning
                            </Title>
                            <Summary>
                                “Sanningen är att det inte är mer vetenskapligt än horoskop.”<br /><br />
                                 Tomas Eriksson har gjort enorm succé med boken Omgiven av idioter, som han hävdar bygger på forskning. Det stämmer inte.
                            </Summary>
                        </LinkInfo>
                        <SummaryImg />
                    </SubMenuUl>
                </SubMenu>
                 : null }
            </Wrapper>
        );
    }
}

export default Navigation;
