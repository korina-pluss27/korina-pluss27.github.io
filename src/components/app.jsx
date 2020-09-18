import React from 'react';

import Contact from '../components/contact';
import Projects from '../components/projects';
import About from '../components/about';
import Content from '../components/content';
import Header from '../components/header';
import useSticky from '../hooks/useSticky';
import { Flex, Box, Text } from '../components/styled';

const App = () => {
  const { isSticky } = useSticky();

  const lineNumbers = [];
  for (let i = 1; i < 100; i++) {
    lineNumbers.push(
      <Flex alignItems="center" key={i} justifyContent="flex-end">
        <Text color="gray" fontSize={1}>
          {i}
        </Text>
      </Flex>,
    );
  }

  return (
    <Flex width="100vw" height="100vh" flexDirection="column">
      <Header show={isSticky} />
      <Flex>
        <Flex paddingTop="60px">
          <Box bg="gray" width="10px" height="100%" />
          <Box marginRight={1} />
          <Flex
            marginTop={1}
            justifyContent="space-between"
            flexDirection="column"
          >
            {lineNumbers}
          </Flex>
          <Box marginRight={5} />
        </Flex>
        <Box>
          <Content title="about">
            <About />
          </Content>
          <Content title="projects">
            <Projects />
          </Content>
          <Content title="contact">
            <Contact />
          </Content>
        </Box>
      </Flex>
    </Flex>
  );
};

export default App;
