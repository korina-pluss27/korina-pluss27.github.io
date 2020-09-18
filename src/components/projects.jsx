import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import WordsSection from '../components/wordsSection';
import { Box, Link } from './styled';

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
        <WordsSection
          title="Projects"
          words={
            <>
              🚧 Projects coming soon! 🚧 For now, download my{' '}
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
            </>
          }
        />
      </Box>
    </>
  );
};

export default Projects;
