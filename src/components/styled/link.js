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
  typography,
} from 'styled-system';

export const Link = styled.a(
  compose(
    background,
    border,
    color,
    flexbox,
    layout,
    position,
    space,
    typography,
  ),
);
export default {};
