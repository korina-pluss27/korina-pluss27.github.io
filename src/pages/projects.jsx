import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import 'normalize.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';

const Projects = (props) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Projects" />
      <h1>These are my projects</h1>
      <p>Welcome to {props.path}</p>
    </Layout>
  </ThemeProvider>
);

export default Projects;
