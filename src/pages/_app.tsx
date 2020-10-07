import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store';
import GlobalStyles from '@/styles/GlobalStyles';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
    <GlobalStyles />
  </Provider>
);

export default App;
