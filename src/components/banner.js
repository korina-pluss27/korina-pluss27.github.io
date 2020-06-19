import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import mq from '../styles/media-queries';
import Flexy from './flexy';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      self: file(relativePath: { eq: "self.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sunflowers: file(relativePath: { eq: "sunflower.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      strawberries: file(relativePath: { eq: "strawberries.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Flexy
      css={{
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'white',
        height: '100vh',
        width: '100%',
      }}
    >
      <div
        css={mq({
          margin: '2px auto',
          width: ['360px', '420px', '768px', '990px', '1120px'],
          minWidth: ['360px', '420px', '768px', '990px', '1120px'],
        })}
      >
        <div css={{ position: 'relative' }}>
          <div
            css={{
              width: '200px',
              height: '100px',
              position: 'absolute',
              left: '30px',
              top: '20px',
            }}
          >
            <Img fluid={data.sunflowers.childImageSharp.fluid} />
          </div>
          <div
            css={mq({
              fontSize: ['2rem', '4rem', '5rem'],
              textTransform: 'uppercase',
              letterSpacing: ['24px', '36px', '42px'],
              fontWeight: '700',
              color: 'white',
              position: 'absolute',
              width: '100%',
              left: '0',
              top: '55%',
              transform: 'translateY(-50%)',
              textAlign: 'center',
              mixBlendMode: 'difference',
              zIndex: '9',
            })}
          >
            Korina Pluss
          </div>
          <div
            css={{
              width: '536px',
              margin: '0 auto',
            }}
          >
            <Img fluid={data.self.childImageSharp.fluid} />
          </div>
          <div
            css={{
              width: '200px',
              position: 'absolute',
              right: '30px',
              bottom: '20px',
            }}
          >
            <Img fluid={data.strawberries.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </Flexy>
  );
};

export default Banner;
