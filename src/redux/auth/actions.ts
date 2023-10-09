const actionTypePrefix = 'AUTH/';

export const authActions = {
    LOGIN: `${actionTypePrefix}LOGIN`,
    LOGIN_SUCCESS: `${actionTypePrefix}LOGIN_SUCCESS`,
    LOGIN_FAIL: `${actionTypePrefix}LOGIN_FAIL`,

    LOGOUT: `${actionTypePrefix}LOGOUT`,
    LOGOUT_SUCCESS: `${actionTypePrefix}LOGOUT_SUCCESS`,
    LOGOUT_FAIL: `${actionTypePrefix}LOGOUT_FAIL`,
};

export const login = (payload: any) => ({
    type: authActions.LOGIN,
    payload,
});
