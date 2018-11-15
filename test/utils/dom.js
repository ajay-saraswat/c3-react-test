const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const { window } = new JSDOM('');
const exposedProperties = ['window', 'navigator', 'document'];

global.window = window;
global.document = window.document;
global.HTMLElement = document.defaultView.HTMLElement;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js',
};

global.window.localStorage = {};
