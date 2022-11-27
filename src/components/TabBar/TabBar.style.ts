import styled from 'styled-components';
import { StyledButton, StyledContainer } from '../../globalStyle';

export const StyledTabBar = styled(StyledContainer)`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  justify-content: center;
  max-width: ${({ theme }) => theme.smallMaxWidth};
  margin-bottom: 3rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-column: 1;
    grid-auto-flow: row;
    align-items: start;
    justify-items: start;
    height: fit-content;
  }
`;

export const StyledTabButton = styled(StyledButton)`
  background: transparent;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  font-size: 1.25rem;
  border-radius: 0;
  padding: 0.25rem 0;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.primaryBlue2};
    box-shadow: 0 2px ${({ theme }) => theme.colors.primaryBlue2};

    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
      box-shadow: -2px 0 0 ${({ theme }) => theme.colors.primaryBlue2};
      padding: 0.25rem 1rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0.25rem 1rem;
  }
`;
