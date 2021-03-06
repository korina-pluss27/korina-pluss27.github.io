import React from 'react';

import PlantsPics from '../components/plantsPics';
import SEO from '../components/seo';
import { Flex, Text } from '../components/styled';
import '../styles/index.css';

const Plants = () => {
  return (
    <main id="kp-main">
      <SEO title="Korina Pluss" />
      <Flex flexDirection="column" alignItems="center">
        <Text color="#ebe8ea" margin={4} as="h1">
          My Plants
        </Text>
        <Flex
          justifyContent="space-evenly"
          alignContent="center"
          flexWrap="wrap"
        >
          <PlantsPics />
        </Flex>
      </Flex>
    </main>
  );
};

export default Plants;
