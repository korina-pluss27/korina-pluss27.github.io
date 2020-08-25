import styled from 'styled-components';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
} from 'styled-system';

export const Flex = styled.div(
  compose(background, border, color, flexbox, layout, position, space),
  { display: 'flex' },
);

export const Box = styled.div(
  compose(background, border, color, flexbox, layout, position, space),
);

export default {};
