import styled from 'styled-components';
import {
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

export const Text = styled.p(
  compose(layout, flexbox, position, typography, space, color),
);

export default {};
