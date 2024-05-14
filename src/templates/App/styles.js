import styled, { css } from 'styled-components';

export const Wrappper = styled.div`
  ${({ background }) => css`
    background: ${background};
  `}
`;
