import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from './containers/user/UserList';

class App extends Component {
    // eslint-disable-next-line
    render() {
        return (
            <div id="app">
                <div id="app-container">
                    <Switch>
                        <Route path="/:pageNumber?/:rowCount?" render={props => <UserList {...props} />} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
