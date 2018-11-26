/* eslint-disable no-unused-expressions */
import user, { types, actions } from '../../../src/reducers/user';
import Client from '../../../src/utils/UserClient';

describe('Reducer', () => {
    let state;
    let action;

    beforeEach(() => {
        state = {};
        action = {};
    });


    it('should handle "USER_DATA_REQUEST"', () => {
        action = {
            type: types.USER_DATA_REQUEST,
        };
        state = {
            pearsonUsers: [],
        };
        expect(user(state, action)).to.deep.equal(state);
    });

    it('should handle "USER_DATA_SUCCESS"', () => {
        action = {
            type: types.USER_DATA_SUCCESS,
            user: [
                {
                    id: 4,
                    first_name: 'Eve',
                    last_name: 'Holt',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
                },
            ],
        };
        state = {
            pearsonUsers: [],
        };
        expect(user(state, action)).to.deep.equal({
            pearsonUsers: action.user,
        });
    });
});

describe('Actions', () => {
    const store = getMockStore()({});
    const sandbox = sinon.createSandbox();
    afterEach(() => {
        sandbox.restore();
        store.clearActions();
    });

    describe('getUserList()', () => {
        const userList = [...UsrMocks.pearsonUsers];
        const happyResult = { data: { data: userList } };
        describe('Happy paths', () => {
            beforeEach(() => {
                sandbox.stub(Client, 'get').resolves(happyResult);
                store.dispatch(actions.getUserList({}));
            });

            it('should dispatch "USER_DATA_REQUEST" action', () => {
                expect(getStoreAction(store, types.USER_DATA_REQUEST)).to.exist;
            });

            it('should dispatch "USER_DATA_SUCCESS" with list of users from response', (done) => {
                setTimeout(() => {
                    expect(getStoreAction(store, types.USER_DATA_SUCCESS))
                        .to.eql({ user: userList });
                    done();
                });
            });
        });

        describe('Sad paths', () => {
            it('should dispatch "USER_DATA_FAILURE" with response error', (done) => {
                const error = 'Error getting for users :( ';
                sandbox.stub(Client, 'get').rejects({ data: error });
                store.dispatch(actions.getUserList({}));
                setTimeout(() => {
                    expect(getStoreAction(store, types.USER_DATA_FAILURE)).to.eql({ error });
                    done();
                });
            });
        });
    });
});
