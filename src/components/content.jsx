import React from 'react';

import { Flex, FullHeightSection } from '../components/styled';

const Content = ({ children, title }) => {
  return (
    <FullHeightSection id={title}>
      <Flex
        height="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Flex flexDirection="column" width={['90%', '90%', '70%']}>
          {children}
        </Flex>
      </Flex>
    </FullHeightSection>
  );
};

export default Content;
