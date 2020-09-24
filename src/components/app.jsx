import React from 'react';

import Contact from '../components/contact';
import Projects from '../components/projects';
import About from '../components/about';
import Content from '../components/content';
import Header from '../components/header';
import useSticky from '../hooks/useSticky';
import { Flex, Box } from '../components/styled';

const App = () => {
  const { isSticky } = useSticky();

  return (
    <Flex width="100vw" height="100vh" flexDirection="column">
      <Header show={isSticky} />
      <Flex>
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
