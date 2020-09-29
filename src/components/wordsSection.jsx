import React from 'react';
import { Box, Span, Text } from './styled';

const WordsSection = ({ title, children }) => {
  return (
    <>
      <Text as="h2" alignSelf="flex-start" color="primary">
        const&nbsp;
        <Span color="utility">{title}</Span>&nbsp;
        <Span color="secondary">=</Span>
      </Text>
      <Box marginBottom={4} />
      {children}
      <Box marginBottom={4} />
      <Text as="h2" alignSelf="flex-start" color="utility">{`;`}</Text>
    </>
  );
};

export default WordsSection;
