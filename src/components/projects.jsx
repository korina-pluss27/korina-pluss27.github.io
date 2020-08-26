import React from 'react';
import WordsSection from '../components/wordsSection';
import { Box } from './styled';

const Projects = () => {
  const words = `🚧 This section is under construction! 🚧`;

  return (
    <>
      <Box width="80%">
        <WordsSection title="Projects" words={words} />
      </Box>
    </>
  );
};

export default Projects;
