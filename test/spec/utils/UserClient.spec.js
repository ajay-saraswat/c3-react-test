import axios from 'axios';
import Client from '../../../src/utils/UserClient';

describe('UserClient', () => {
    const sandbox = sinon.createSandbox();
    const baseURL = '/user';
    const url = '/user/4/detail/';
    const params = { user: true };
    let options = {};

    beforeEach(() => {
        options = {
            baseURL,
        };
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('get()', () => {
        it('should GET with correct url', () => {
            sandbox.stub(axios, 'get').resolves({});
            Client.get(url);
            expect(axios.get).to.have.been.calledWith(url, ...options);
        });
    });

    describe('post()', () => {
        beforeEach(() => {
            sandbox.stub(axios, 'post').resolves({});
        });

        it('should POST with correct parameters', () => {
            Client.post(url, params);
            expect(axios.post).to.have.been.calledWith(url, params, ...options);
        });

        it('should POST with empty body if no params passed', () => {
            Client.post(url);
            expect(axios.post).to.have.been.calledWith(url, {}, ...options);
        });
    });

    describe('patch()', () => {
        beforeEach(() => {
            sandbox.stub(axios, 'patch').resolves({});
        });

        it('should PATCH with correct parameters', () => {
            Client.patch(url, params);
            expect(axios.patch).to.have.been.calledWith(url, params, ...options);
        });

        it('should PATCH with empty body if no params passed', () => {
            Client.patch(url);
            expect(axios.patch).to.have.been.calledWith(url, {}, ...options);
        });
    });

    describe('put()', () => {
        beforeEach(() => {
            sandbox.stub(axios, 'put').resolves({});
        });

        it('should PUT with correct parameters', () => {
            Client.put(url, params);
            expect(axios.put).to.have.been.calledWith(url, params, ...options);
        });

        it('should PUT with empty body if no params passed', () => {
            Client.put(url);
            expect(axios.put).to.have.been.calledWith(url, {}, ...options);
        });
    });

    describe('delete()', () => {
        it('should DELETE with correct url', () => {
            sandbox.stub(axios, 'delete').resolves({});
            Client.delete(url);
            expect(axios.delete).to.have.been.calledWith(url, ...options);
        });
    });
});
