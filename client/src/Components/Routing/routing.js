import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles.css';

import ArticleContainer from '../Pages/article/'
import Home from '../Pages/Home/home.js';


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
                                <Route exact path='/' component={Home} />
                                <Route exact path='/articles/:title' component={ArticleContainer} />
                            </Switch>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
        )
    }
}

export default withRouter(Routing);
