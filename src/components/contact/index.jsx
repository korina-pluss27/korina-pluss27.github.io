import React from 'react';

import GitHub from './github';
import LinkedIn from './linkedin';
import Mail from './mail';
import WordsSection from '../../components/wordsSection';
import { Flex, Box, Text } from '../styled';

const SocialBar = () => {
  return (
    <Flex marginY={4} justifyContent="center">
      <Box marginRight={4} />
      <GitHub link="https://github.com/korina-pluss27" />
      <Box marginRight={4} />
      <LinkedIn />
      <Box marginRight={4} />
      <Mail />
      <Box marginRight={4} />
    </Flex>
  );
};

const Contact = () => {
  return (
    <>
      <SocialBar />
      <Box width="80%">
        <WordsSection title="contact">
          <Text fontSize={[1, 1, 2]} paddingLeft={5}>
            Get in touch with me! I am currently searching for a co-op for the
            January-June 2021 time period.
          </Text>
        </WordsSection>
      </Box>
    </>
  );
};

export default Contact;
