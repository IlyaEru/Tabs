import React from 'react';
import { Experience } from '../../App';
import { StyledButton } from '../../globalStyle';
import { StyledTabBar, StyledTabButton } from './TabBar.style';

interface TabBarProps {
  experience: Experience[];
  callbacks: {
    setActiveBar: (company: string) => void;
  };
  activeBar: string;
}

export default function TabBar({
  experience,
  callbacks,
  activeBar,
}: TabBarProps) {
  return (
    <StyledTabBar>
      {experience.map((exp) => (
        <StyledTabButton
          key={exp.id}
          className={exp.company === activeBar ? 'active' : ''}
          value={exp.company}
          onClick={(e) =>
            callbacks.setActiveBar((e.target as HTMLButtonElement).value)
          }
        >
          {exp.company}
        </StyledTabButton>
      ))}
    </StyledTabBar>
  );
}
