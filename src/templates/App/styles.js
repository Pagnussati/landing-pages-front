import styled, { css } from 'styled-components';

export const Wrappper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
  `}
`;
