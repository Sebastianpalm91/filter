import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles.css';

import React from 'react'
import PropTypes from 'prop-types'

import ENTER_COMPONENT_NAME from 'ENTER_COMPONENT_NAME';

class Routing extends Component {
    render () {
        return (
                <TransitionGroup className="transition-group">
                    <CSSTransition
                        key={this.props.location.key}
                        timeout={{ enter: 1000, exit: 1000 }}
                        classNames="fadeIn"
                    >
                        <section className="route-section">
                            <Switch location={this.props.location}>
                                <Route exact path='/' /*component={ENTER_COMPONENT_NAME}*/ render={() => <ENTER_COMPONENT_NAME  />}/>
                                <Route exact path='/' render={() => <ENTER_COMPONENT_NAME  />}/>
                                <Route exact path='/' component={ENTER_COMPONENT_NAME}/>
                                <Route exact path='/' component={ENTER_COMPONENT_NAME}/>
                            </Switch>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
        )
    }
}

export default withRouter(Routing);
