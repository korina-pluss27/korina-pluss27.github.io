import React from 'react';
import profilePic from '../images/profile.jpg';
import WordsSection from '../components/wordsSection';
import { Box, Flex, Link, Text, Image } from './styled';

const About = () => {
  const words = (
    <>
      {`Hi there! I'm Kori. I am a Computer Engineering and Computer Science student at `}
      <Link href="https://www.northeastern.edu/" color="highlight">
        Northeastern University
      </Link>
      {`. I love plants, anime, and making coffee!`}
      <Box marginBottom={4} />
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
          <Image
            maxHeight="200px"
            border="1px solid white"
            borderRadius="50%"
            src={profilePic}
            alt-text="my profile picture"
          />
        </Flex>
      </Flex>
      <Box width="80%">
        <WordsSection title="About" words={words} />
      </Box>
    </Box>
  );
};

export default About;
