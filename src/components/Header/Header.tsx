import React from 'react';
import { StyledHeader, StyledHero } from './Header.style';

export default function Header() {
  return (
    <StyledHeader>
      <StyledHero>Experience</StyledHero>
      <div className="header__under-line"></div>
    </StyledHeader>
  );
}
