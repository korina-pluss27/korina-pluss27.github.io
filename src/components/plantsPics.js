import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { Box, Text } from './styled';

const Circle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin: 2%;
`;

const PlantsPics = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "plants" } }) {
        nodes {
          id
          name
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  `);

  return data.images.nodes.map((current, key) => {
    return (
      <Circle key={key}>
        <Img
          key={key}
          fixed={current.childImageSharp.fixed}
          alt={`my plant named ${current.name}`}
          style={{ border: '2px solid #98fb98', borderRadius: '50%' }}
        />
        <Box marginTop={2} />
        <Text color="#ebe8ea">{current.name}</Text>
      </Circle>
    );
  });
};

export default PlantsPics;
