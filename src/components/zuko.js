import React, { useState } from 'react';
import { css } from '@emotion/core';
import { useTrail, animated, config } from 'react-spring';

import fire0 from '../images/fire-0.png';
import fire1 from '../images/fire-1.png';
import fire2 from '../images/fire-2.png';
import zuko from '../images/zuko.png';

const Zuko = () => {
  const images = [fire0, fire1, fire2];
  const [toggle, set] = useState(true);
  const trail = useTrail(images.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : -20,
    from: { opacity: 0, x: -20 },
  });

  const element = css`
    position: absolute;
  `;
  const container = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <div
      css={container}
      onMouseEnter={() => set(!toggle)}
      onMouseLeave={() => set(!toggle)}
    >
      <animated.img
        src={zuko}
        css={css`
          position: relative;
        `}
      />
      {trail.map(({ x, ...style }, index) => (
        <animated.img
          key={index}
          css={element}
          src={images[index]}
          style={{
            ...style,
            transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
          }}
        />
      ))}
    </div>
  );
};

export default Zuko;
