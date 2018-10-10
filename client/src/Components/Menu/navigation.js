import React, { Component } from 'react';
import { Li, StyledLink, Ul, Wrapper, SubMenu, SubMenuLi, SubMenuUl, Vr, StyledLinkSubMenu, LinkInfo, Title, Summary, SummaryImg, Animation, SubMenuUlCat, LinkInfoCat, VrCat, SubMenuLiCat } from './styles';

class Navigation extends Component {
    state = {
        hover: false,
        activeIndex: 0,
    };

    onMouseEnterHandler = (index, e) => {
        this.setState({
            hover: true,
            activeIndex: index,
        });
    }

    onMouseLeaveHandler = (index, e) => {
        this.setState({
            hover: false,
            activeIndex: index,
        });
    }


    render() {

        return (
            <Wrapper>
                <Ul onMouseLeave={this.onMouseLeaveHandler}>
                    <Li>
                        <StyledLink
                            onMouseEnter={this.onMouseEnterHandler.bind(this, 0)}
                            to='/latestnumber'>SENASTE NUMRET
                        </StyledLink>
                    </Li>
                    <Li>
                        <StyledLink
                            onMouseEnter={this.onMouseEnterHandler.bind(this, 1)}
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
                <SubMenu active={this.state.hover} onMouseLeave={this.onMouseLeaveHandler}>
                    <Animation active={this.state.hover} onMouseEnter={this.onMouseEnterHandler.bind(this, 0)}>
                    {
                        this.state.activeIndex === 0
                        ?
                            <SubMenuUl active={this.state.hover}>
                                <Vr>
                                <SubMenuLi><StyledLinkSubMenu to='/latestnumber'>Senaste Numret</StyledLinkSubMenu></SubMenuLi>
                                <SubMenuLi><StyledLinkSubMenu to='/articles/Omgiven-av-idioti'>Omgiven av idioti</StyledLinkSubMenu></SubMenuLi>
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

                        :
                        <SubMenu onMouseEnter={this.onMouseEnterHandler.bind(this, 1)} active={this.state.hover} onMouseLeave={this.onMouseLeaveHandler}>
                            {
                                this.state.activeIndex === 1
                                ?
                                        <SubMenuUlCat active={this.state.hover}>
                                            <VrCat>
                                            <SubMenuLiCat><StyledLinkSubMenu to='/latestnumber'>Artikeltyp</StyledLinkSubMenu></SubMenuLiCat>
                                            <SubMenuLiCat><StyledLinkSubMenu to='/articles/Omgiven-av-idioti'>Ämnen</StyledLinkSubMenu></SubMenuLiCat>
                                            </VrCat>
                                            <LinkInfoCat>
                                            <SubMenuLiCat><StyledLinkSubMenu to='/latestnumber'>Musik</StyledLinkSubMenu></SubMenuLiCat>
                                            <SubMenuLiCat><StyledLinkSubMenu to='/latestnumber'>Litteratur</StyledLinkSubMenu></SubMenuLiCat>
                                            <SubMenuLiCat><StyledLinkSubMenu to='/latestnumber'>Politik</StyledLinkSubMenu></SubMenuLiCat>
                                            <SubMenuLiCat><StyledLinkSubMenu to='/latestnumber'>Historia</StyledLinkSubMenu></SubMenuLiCat>
                                            <SubMenuLiCat><StyledLinkSubMenu to='/latestnumber'>Sport</StyledLinkSubMenu></SubMenuLiCat>
                                            <SubMenuLiCat><StyledLinkSubMenu to='/latestnumber'>Mat</StyledLinkSubMenu></SubMenuLiCat>
                                            <SubMenuLiCat><StyledLinkSubMenu to='/latestnumber'>Miljö</StyledLinkSubMenu></SubMenuLiCat>
                                            <SubMenuLiCat><StyledLinkSubMenu to='/latestnumber'>Livsnöje</StyledLinkSubMenu></SubMenuLiCat>
                                            <SubMenuLiCat><StyledLinkSubMenu to='/latestnumber'>Film</StyledLinkSubMenu></SubMenuLiCat>
                                            </LinkInfoCat>
                                        </SubMenuUlCat>
                                : null
                            }
                        </SubMenu>
                    }
                    </Animation>
                </SubMenu>
            </Wrapper>
        );
    }
}

export default Navigation;
