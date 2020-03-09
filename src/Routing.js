import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import Dashboard from './containers/Dashboard';
import Header from './components/Header';
const routing = props => {
    return (<div>
                <Router>
                    <Header />
                        <Switch>
                            <Route exact path="/" component={Dashboard} />  
                        </Switch>   
                    {/* <Footer /> */}
                </Router>
            </div>);
}

export default routing;