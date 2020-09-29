import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import GitHub from './contact/github';
import WordsSection from '../components/wordsSection';
import { Box, Flex, Link, Text } from './styled';

const ProjectCard = ({ title, description, link, github }) => {
  return (
    <Box margin={2} padding={3} backgroundColor="gray" borderRadius="4px">
      <Flex flexDirection="row" alignItems="center">
        <Box marginRight={4} />
        <Flex flexDirection="column">
          <Flex justifyContent="flex-end" flexDirection="row">
            {link && <Link marginRight={4} href={link} />}
            {github && <GitHub link={github} />}
          </Flex>
          <Text as="h2" fontSize={[2, 2, 3]} color="primary">
            {title}
          </Text>
          <Text fontSize={[1, 1, 2]}>{description}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      pdf: file(relativePath: { eq: "korina-pluss.pdf" }) {
        publicURL
      }
    }
  `);

  return (
    <>
      <Box width="80%">
        <WordsSection title="projects">
          <Box display="grid" style={{ 'grid-auto-rows': '1fr' }}>
            <ProjectCard
              title="My Portfolio"
              description="I created this website as one of my very first projects! It is built with JavaScript, React, Gatsby, and it is deployed via Github Pages."
              github="https://github.com/korina-pluss27/korina-pluss27.github.io"
            />
          </Box>
        </WordsSection>
        <Box marginTop={4} />
        <Text fontSize={[1, 1, 2]} paddingLeft={5}>
          🚧 This section is currently under construction! 🚧 For more
          information about me, download my{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={data.pdf.publicURL}
            color="highlight"
          >
            resume
          </Link>{' '}
          or{' '}
          <Link href="#contact" color="highlight">
            get in touch
          </Link>
          .
        </Text>
      </Box>
    </>
  );
};

export default Projects;
