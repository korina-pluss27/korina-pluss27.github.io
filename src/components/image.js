import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "profile" } }) {
        nodes {
          id
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  `);
  const images = [...data.images.nodes];

  useEffect(() => {
    const timer = setInterval(() => {
      const newVal = (currentImg + 1) % images.length;
      setCurrentImg(newVal);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentImg]);

  return (
    <Img
      fixed={images[currentImg].childImageSharp.fixed}
      alt="profile-photo"
      style={{ border: '1px solid transparent', borderRadius: '50%' }}
    />
  );
};

export default Image;
