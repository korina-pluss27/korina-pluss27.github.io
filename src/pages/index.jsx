import React from 'react';
import Particles from 'react-tsparticles';
import { ThemeProvider } from 'styled-components';

import App from './app';
import theme from '../styles/theme';
import '../styles/index.css';

const Home = () => {
  return (
    <main id="kp-main">
      <Particles
        style={{ position: 'fixed', pointerEvents: 'none' }}
        id="particle-effect"
        options={{
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onHover: {
                enable: true,
                mode: 'bubble',
              },
              onClick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                links: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
            },
          },
          particles: {
            number: {
              value: 355,
              density: {
                enable: true,
                area: 789.1476416322727,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                sides: 5,
              },
              image: {
                src: 'https://cdn.matteobruni.it/images/particles/github.svg',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.3,
              random: {
                enable: false,
              },
              animation: {
                enable: true,
                speed: 0.15,
                minimumValue: 0,
                sync: false,
              },
            },
            size: {
              value: 1.5,
              random: { enable: true },
              anim: {
                enable: true,
                speed: 2,
                minimumValue: 0,
                sync: false,
              },
            },
            links: {
              enable: false,
              distance: 150,
              color: { value: '#ffffff' },
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.15,
              direction: 'none',
              random: true,
              straight: false,
              outMode: 'out',
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
            },
          },
          detectRetina: true,
        }}
      />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </main>
  );
};

export default Home;
