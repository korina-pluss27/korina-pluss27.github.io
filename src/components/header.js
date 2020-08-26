import React from 'react';
import styled from 'styled-components';

import Logo from '../components/logo';
import { Flex, Box, Link } from '../components/styled';

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.utility};
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Header = ({ show }) => {
  return (
    <Flex
      position="fixed"
      top={show ? '0px' : '-60px'}
      height="60px"
      justifyContent="space-between"
      padding={5}
      borderBottom="1px solid"
      borderColor="tmux"
      zIndex={1}
      width="100%"
      backgroundColor="background.dark"
      style={{
        transition: 'all .6s ease-in-out',
        boxShadow: '1px 1px 1px #222',
      }}
    >
      <Flex alignItems="center">
        <Logo />
      </Flex>
      <Flex alignItems="center" width="60%" justifyContent="space-between">
        <HeaderLink fontSize={[1, 1, 2]} href="#about">
          [1] about
        </HeaderLink>
        <Box marginRight={3} />
        <HeaderLink fontSize={[1, 1, 2]} href="#projects">
          [2] projects
        </HeaderLink>
        <Box marginRight={3} />
        <HeaderLink fontSize={[1, 1, 2]} href="#contact">
          [3] contact
        </HeaderLink>
        <Box marginRight={3} />
      </Flex>
    </Flex>
  );
};

export default Header;
