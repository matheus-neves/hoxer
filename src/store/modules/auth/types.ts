export enum ActionTypes {
  signInRequest = 'SIGNIN_REQUEST',
  signInSuccess = 'SIGNIN_SUCCESS',
  signInFailure = 'SIGNIN_FAILURE',
  signOutRequest = 'SIGNOUT_REQUEST',
  signOutSuccess = 'SIGNOUT_SUCCESS',
}

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface IAuthState {
  isLoggedIn: boolean;
  token: string;
  error: boolean;
}
