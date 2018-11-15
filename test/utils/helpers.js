import chai, { expect } from 'chai';
import sinon, { spy, stub } from 'sinon';
import sinonChai from 'sinon-chai';
import { configure, mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import React from 'react';
import ReactDom from 'react-dom';
import 'airbnb-js-shims/target/es2015';
import configureStore from 'redux-mock-store';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

// React
global.React = React;
global.ReactDOM = ReactDom;

// Redux
const middlewares = [multi, thunk];
global.getMockStore = () => configureStore(middlewares);
global.getStoreAction = (store, type) => {
    const matches = store.getActions().filter(action => action.type === type);

    if (matches.length) {
        const result = Object.assign({}, matches[0]);
        delete result.type;
        return result;
    }
    return {};
};
global.getLastAction = store => store.getActions()[store.getActions().length - 1];

// Sinon dependencies
global.sinon = sinon;
global.spy = spy;
global.stub = stub;

// Enzyme dependencies
global.mount = mount;
global.render = render;
global.shallow = shallow;

// Chai setup + dependencies
global.chai = chai;
global.expect = expect;
chai.use(sinonChai);

// Enzyme setup and helpers
configure({ adapter: new Adapter() });
global.getRouterContext = () => new ReactRouterEnzymeContext().get();
