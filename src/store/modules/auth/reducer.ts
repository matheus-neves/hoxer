import { Reducer } from 'redux';
import produce from 'immer';
import { ActionTypes, IAuthState } from './types';

const INITIAL_STATE: IAuthState = {
  isLoggedIn: false,
  token: '',
  error: false,
};

const auth: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.signInSuccess: {
        const { token } = action.payload;

        draft = {
          isLoggedIn: true,
          token,
          error: false,
        };
        return draft;
      }
      case ActionTypes.signInFailure: {
        draft.error = true;
        return draft;
      }
      case ActionTypes.signOutSuccess: {
        draft = {
          isLoggedIn: false,
          token: '',
          error: false,
        };
        return draft;
      }

      default: {
        return draft;
      }
    }
  });
};

export default auth;
