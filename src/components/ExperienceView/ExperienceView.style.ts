import styled from 'styled-components';
import { StyledButton, StyledContainer } from '../../globalStyle';

export const StyledExperienceView = styled(StyledContainer).attrs({
  as: 'article',
})``;

export const StyledExperienceViewTitle = styled.h3`
  font-weight: 400;
`;

export const StyledExperienceViewCompany = styled.h4`
  font-size: 0.875rem;

  background-color: ${({ theme }) => theme.colors.lightGrey2};
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.blueGrey};
`;

export const StyledExperienceViewDate = styled.p`
  color: ${({ theme }) => theme.colors.blueGrey};
  margin-bottom: 1.25rem;
`;

export const StyledExperienceViewDescription = styled.ul`
  margin-bottom: 1.25rem;
  list-style: none;
  li {
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    .experience-view__description-icon {
      color: ${({ theme }) => theme.colors.primaryBlue2};
      min-width: 0.875rem;
    }
    .experience-view__description-text {
      color: ${({ theme }) => theme.colors.darkGrey};
      font-size: 0.875rem;
    }
  }
`;
