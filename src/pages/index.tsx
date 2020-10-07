import React, { useCallback, useEffect, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { useRouter } from 'next/router';
import { Form } from '@unform/web';

import Input from '@/components/Input';
import { IState } from '@/store';
import { signInRequest } from '@/store/modules/auth/actions';
import { useDispatch, useSelector } from 'react-redux';

interface IFormProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();
  const router = useRouter();

  const isLoggedIn = useSelector<IState, boolean>(
    state => state.auth.isLoggedIn,
  );

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/products');
    }
  }, [isLoggedIn]);

  const handleSubmit = useCallback(
    (data: IFormProps) => {
      dispatch(signInRequest(data));
    },
    [dispatch],
  );

  return (
    <>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input name="email" label="E-mail" type="email" />
        <Input name="password" label="Password" type="password" />
        <button type="submit">SignIn</button>
      </Form>
    </>
  );
};

export default SignIn;
