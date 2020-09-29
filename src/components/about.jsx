import React from 'react';
import WordsSection from '../components/wordsSection';
import ProfilePic from '../components/profilePic';
import { Box, Flex, Link, Text } from './styled';

const About = () => {
  return (
    <Box>
      <Flex marginBottom={4}>
        <Flex flexDirection="column" width="50%" justifyContent="center">
          <Text fontSize={[3, 3, 5]}>Korina Pluss</Text>
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
          <ProfilePic />
        </Flex>
      </Flex>
      <Box width="80%">
        <WordsSection title="about">
          <Text fontSize={[1, 1, 2]} paddingLeft={5}>
            {`Hi there! I'm Kori. I am a Computer Engineering and Computer Science student at `}
            <Link
              href="http://catalog.northeastern.edu/undergraduate/engineering/electrical-computer/computer-engineering-computer-science-bscompe/"
              color="highlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              Northeastern University
            </Link>
            {`. I love `}
            <Link
              href="/plants"
              color="highlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              plants
            </Link>
            {`, anime, and making coffee. Yes, I spent hours customizing my iOS 14 `}
            <Link
              href="https://twitter.com/koritheworm/status/1308900537316913152?s=20"
              color="highlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              home screen
            </Link>
            {`!`}
          </Text>
        </WordsSection>
      </Box>
    </Box>
  );
};

export default About;
