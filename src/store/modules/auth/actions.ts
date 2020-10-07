import { ISignInCredentials, ActionTypes } from './types';

const signInRequest = ({ email, password }: ISignInCredentials) => ({
  type: ActionTypes.signInRequest,
  payload: { email, password },
});

const signInSuccess = (token: string) => ({
  type: ActionTypes.signInSuccess,
  payload: {
    token,
  },
});

const signOutRequest = () => ({
  type: ActionTypes.signOutRequest,
});

const signOutSuccess = () => ({
  type: ActionTypes.signOutSuccess,
});

const signInFailure = () => ({
  type: ActionTypes.signInFailure,
});

export {
  signInRequest,
  signInSuccess,
  signInFailure,
  signOutRequest,
  signOutSuccess,
};
