import React from 'react';
import { ThemeProvider } from 'styled-components';

import App from './app';
import theme from '../styles/theme';
import '../styles/index.css';

const Home = () => {
  return (
    <main id="kp-main">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </main>
  );
};

export default Home;
