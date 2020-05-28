import styled from '@emotion/styled';

const Text = styled.p((props) => ({
  margin: '8px',
  padding: '8px',
  fontSize: props.fontSize || '18px',
}));

export default Text;
