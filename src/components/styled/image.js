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

export const Image = styled.img(
  compose(background, border, color, flexbox, layout, position, space),
);

export default {};
