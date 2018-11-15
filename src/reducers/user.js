import Client from '../utils/UserClient';

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
            pearsonUsers: action.user,
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
const getUserList = (params = { pageNumber: 1, rowcount: 10 }) => (dispatch) => {
    dispatch(userRequest(params));
    return Client.get(`users?page=${params.pageNumber}&per_page=${params.rowcount}`)
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
