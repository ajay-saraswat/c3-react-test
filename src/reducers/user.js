import Client from '../utils/UserClient';
import UserUtils from '../utils/UserUtils';

export const types = {
    USER_DATA_REQUEST: 'USER_DATA_REQUEST',
    USER_DATA_SUCCESS: 'USER_DATA_SUCCESS',
    USER_DATA_FAILURE: 'USER_DATA_FAILURE',
};

export default (state = { pearsonUsers: [] }, action) => {
    switch (action.type) {
    case types.USER_DATA_REQUEST:
    case types.USER_DATA_FAILURE:
        return {
            ...state,
            pearsonUsers: [],
        };
    case types.USER_DATA_SUCCESS:
        return {
            ...state,
            pearsonUsers: UserUtils.removeDuplicateUsers([...state.pearsonUsers, ...action.user]),
            /*
            Its always preferable to do extensive job related to state at reducer level instead at component!
             */
        };
    default:
        return state;
    }
};

// //////////////////////////////////////////////////////////////
// Search USER DATA
// //////////////////////////////////////////////////////////////
const userSuccess = user => ({ type: types.USER_DATA_SUCCESS, user });
const userRequest = params => ({ type: types.USER_DATA_REQUEST, params });
const userFailure = error => ({ type: types.USER_DATA_FAILURE, error });
const getUserList = params => (dispatch) => {
    dispatch(userRequest(params));
    return Client.get(`users?page=${params.pageNumber ? params.pageNumber : 1}&per_page=${params.rowCount ? params.rowCount : 10}`)
        .then(
            (result) => {
                dispatch(userSuccess(result.data.data));
            },
            (error) => {
                dispatch(userFailure(error.data));
            },
        );
};

export const actions = {
    getUserList,
};
