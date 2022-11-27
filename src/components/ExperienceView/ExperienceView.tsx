import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Experience } from '../../App';
import { StyledButton } from '../../globalStyle';
import {
  StyledExperienceView,
  StyledExperienceViewCompany,
  StyledExperienceViewDate,
  StyledExperienceViewDescription,
  StyledExperienceViewTitle,
} from './ExperienceView.style';

export default function ExperienceView({
  title,
  dates,
  duties,
  company,
}: Experience) {
  return (
    <StyledExperienceView>
      <StyledExperienceViewTitle>{title}</StyledExperienceViewTitle>
      <StyledExperienceViewCompany>{company}</StyledExperienceViewCompany>
      <StyledExperienceViewDate>{dates}</StyledExperienceViewDate>
      <StyledExperienceViewDescription>
        {duties.map((duty, index) => (
          <li key={index}>
            <FaAngleDoubleRight className="experience-view__description-icon" />
            <p className="experience-view__description-text">{duty}</p>
          </li>
        ))}
      </StyledExperienceViewDescription>
    </StyledExperienceView>
  );
}
