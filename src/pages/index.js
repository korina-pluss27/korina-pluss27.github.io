import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import 'normalize.css';

import Flexy from '../components/flexy';
import Zuko from '../components/zuko';
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';

const Title = styled.h1((props) => ({
  margin: '0px',
  fontFamily: 'Roboto, sans-serif',
  letterSpacing: '3px',
  color: theme.colors.emphasis,
  fontSize: props.fontSize,
  marginLeft: props.marginLeft,
  marginTop: props.marginTop,
  marginBottom: '18px',
}));

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" />
        <Flexy>
          <Flexy css={{ width: '50%', flexDirection: 'column' }}>
            <Title fontSize="64px" marginLeft="80px" marginTop="100px">
              Software Developer
            </Title>
            <Title fontSize="32px" marginLeft="64px">
              Northeastern Univeristy
            </Title>
          </Flexy>
          <Flexy
            css={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ marginTop: '24px', width: '350px' }}>
              <Zuko />
            </div>
          </Flexy>
        </Flexy>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
