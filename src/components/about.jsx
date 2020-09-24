import React from 'react';
import WordsSection from '../components/wordsSection';
import Image from '../components/Image';
import { Box, Flex, Link, Text } from './styled';

const About = () => {
  const words = (
    <>
      {`Hi there! I'm Kori. I am a Computer Engineering and Computer Science student at `}
      <Link href="https://www.northeastern.edu/" color="highlight">
        Northeastern University
      </Link>
      {`. I love plants, anime, and making coffee!`}
    </>
  );

  return (
    <Box>
      <Flex marginBottom={4}>
        <Flex flexDirection="column" width="50%" justifyContent="center">
          <Text fontSize={[2, 2, 4]}>Korina Pluss</Text>
          <Box marginBottom={2} />
          <Text
            fontSize={[1, 1, 2]}
            color="lightGray"
            lineHeight={['20px', '20px', '24px']}
          >
            I write code that ✨delights✨ and amuses.
          </Text>
          <Box marginBottom={2} />
        </Flex>
        <Box marginRight={4} />
        <Flex width="50%" justifyContent="center">
          <Image />
        </Flex>
      </Flex>
      <Box width="80%">
        <WordsSection title="about" words={words} />
      </Box>
    </Box>
  );
};

export default About;
