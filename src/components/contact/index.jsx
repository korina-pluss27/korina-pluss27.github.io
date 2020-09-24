import React from 'react';
import GitHub from './github';
import LinkedIn from './linkedin';
import Mail from './mail';
import WordsSection from '../../components/wordsSection';
import { Flex, Box } from '../styled';

const SocialBar = () => {
  return (
    <Flex marginY={4} justifyContent="center">
      <Box marginRight={4} />
      <GitHub />
      <Box marginRight={4} />
      <LinkedIn />
      <Box marginRight={4} />
      <Mail />
      <Box marginRight={4} />
    </Flex>
  );
};

const Contact = () => {
  const words =
    'Get in touch with me! I am currently searching for a co-op for the January-June 2021 time period.';
  return (
    <>
      <SocialBar />
      <Box width="80%">
        <WordsSection title="contact" words={words} />
      </Box>
    </>
  );
};

export default Contact;
