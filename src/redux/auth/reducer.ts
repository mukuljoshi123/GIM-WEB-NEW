import { authActions } from './actions';

import { IAuthState } from './interface';

export const initialState: IAuthState = {

    loaders: {

    },
    errors: {

    }
};

export const authReducer = (state: IAuthState = initialState,
    action: { type: string; payload: any }) => {
    switch (action.type) {
        default:
            return state;
    }
};

