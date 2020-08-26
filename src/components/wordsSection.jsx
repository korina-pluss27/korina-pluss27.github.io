import React from 'react';
import { Box, Span, Text } from './styled';

const WordsSection = ({ title, words }) => {
  return (
    <>
      <Text as="h2" alignSelf="flex-start" color="primary">
        const&nbsp;
        <Span color="utility">{title}</Span>&nbsp;
        <Span color="secondary">=</Span>
      </Text>
      <Box marginBottom={4} />
      <Text fontSize={[1, 1, 2]} paddingLeft={5}>
        {words}
      </Text>
      <Box marginBottom={4} />
      <Text as="h2" alignSelf="flex-start" color="utility">{`;`}</Text>
    </>
  );
};

export default WordsSection;
