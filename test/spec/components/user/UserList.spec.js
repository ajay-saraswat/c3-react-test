/* eslint-disable no-unused-expressions  */
import Q from 'q';
import { Card, Button } from '@material-ui/core';
import UserList from '../../../../src/components/user/UserList';

describe('Pearson User List', () => {
    const userList = [...UsrMocks.pearsonUsers];
    const props = {
        users: [],
        getUserList: () => Q.when(userList),
        match: {
            params: {
                pageNumber: 1,
                rowCount: 10,
            },
        },
    };
    const sandbox = sinon.createSandbox();
    let wrapper;
    afterEach(() => {
        sandbox.restore();
    });

    describe('componentDidMount()', () => {
        it('should call "getUserList"()', () => {
            sandbox.spy(props, 'getUserList');
            wrapper = shallow(<UserList {...props} />);
            expect(props.getUserList).to.have.been.called;
        });

        it('should intialize state', () => {
            wrapper = shallow(<UserList {...props} />);
            wrapper.setState({ users: userList });
            expect(wrapper.state().users.length).to.equal(4);
        });
    });

    describe('render', () => {
        it('should render user list', (done) => {
            wrapper = mount(<UserList {...props} />);
            wrapper.setState({ users: userList });
            setTimeout(() => {
                expect(wrapper.find(Card)).to.have.length(4);
                done();
            });
        });
    });

    describe('deleteUser()', () => {
        it('should call onDelete', (done) => {
            wrapper = mount(<UserList {...props} />);
            wrapper.setState({ users: userList });
            wrapper.setProps({
                users: userList,
            });
            sandbox.spy(wrapper.instance(), 'deleteUser');
            setTimeout(() => {
                wrapper.find(Card).at(0).find(Button).at(0)
                    .simulate('click');
                expect(wrapper.state().users.length).to.equal(3);
                done();
            });
        });
    });
});
