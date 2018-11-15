import { connect } from 'react-redux';
import { actions as userActions } from 'reducers/user';
import UserList from '../../components/user/UserList';

const mapStateToProps = (state) => {
    const {
        user,
    } = state;
    return {
        users: user.pearsonUsers,
    };
};

const mapDispatchToProps = dispatch => ({
    getUserList: params => dispatch(userActions.getUserList(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
