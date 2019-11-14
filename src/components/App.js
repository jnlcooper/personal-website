import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './homePage/Home';
import { NoMatch } from './NoMatch';
import './App.css'
//Add icons to library so they can be called at any point in the application (see ContactPage for an example)
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <Router history={this.props.history}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route component={NoMatch}/>
                        </Switch>
                    </Router>
            </React.Fragment>
        );
    }
}

export default App;