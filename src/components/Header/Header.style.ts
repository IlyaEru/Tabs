import styled from 'styled-components';
import { StyledMainHeading } from '../../globalStyle';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  .header__under-line {
    width: 5rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.primaryBlue2};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-column: 1 / 3;
  }
`;

export const StyledHero = styled(StyledMainHeading)`
  font-size: 2rem;
  margin-bottom: 0.75rem;
`;
