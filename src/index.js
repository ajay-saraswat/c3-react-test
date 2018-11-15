import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
// Material UI Customization
import { MuiThemeProvider } from '@material-ui/core/styles';
import thunkMiddleware from 'redux-thunk';
import multi from 'redux-multi';
import 'babel-polyfill';
import theme from './styles/UsrMainTheme';
import './styles/main.scss';
import App from './App';
import usrApp from './reducers/index';

const history = createHistory();

const middleware = [multi, thunkMiddleware];
const store = createStore(
    usrApp,
    applyMiddleware(...middleware),
);

ReactDOM.render(
    (
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <HashRouter>
                    <App history={history} />
                </HashRouter>
            </Provider>
        </MuiThemeProvider>
    ), document.getElementById('root'),
);
