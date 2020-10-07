import React, { useCallback } from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { signOutRequest } from '@/store/modules/auth/actions';
import WithPrivateRoute from '@/components/WithPrivateRoute';
import api from '@/services/api';

interface IProduct {
  id: number;
  name: string;
}
interface IDashboardProps {
  products: IProduct[];
}

const Products: NextPage<IDashboardProps> = ({ products }) => {
  return (
    <>
      <h1>Products Page</h1>
      {products.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </>
  );
};

Products.getInitialProps = async () => {
  const response = await api.get('/products');
  const products = response.data;
  return { products };
};

export default WithPrivateRoute(Products);
