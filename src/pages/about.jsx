import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import 'normalize.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';

const About = (props) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="About" />
      <h1>This is my about page</h1>
      <p>Welcome to {props.path}</p>
    </Layout>
  </ThemeProvider>
);

export default About;
