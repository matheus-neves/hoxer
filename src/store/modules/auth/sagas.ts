import cookie from 'js-cookie';
import api from '@/services/api';
import { AxiosResponse } from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects';
import {
  signInRequest,
  signInFailure,
  signInSuccess,
  signOutSuccess,
} from './actions';

type signInRequest = ReturnType<typeof signInRequest>;

function* signIn({ payload }: signInRequest) {
  const { email, password } = payload;

  try {
    const response: AxiosResponse = yield api.post('signin', {
      email,
      password,
    });

    if (response.statusText === 'OK') {
      const { accessToken } = response.data;
      cookie.set('jwt', accessToken);

      yield put(signInSuccess(accessToken));
    }
  } catch (error) {
    yield put(signInFailure());
  }
}

function* signOut() {
  yield cookie.remove('jwt');

  yield put(signOutSuccess());
}

export default all([
  takeLatest('SIGNIN_REQUEST', signIn),
  takeLatest('SIGNOUT_REQUEST', signOut),
]);
