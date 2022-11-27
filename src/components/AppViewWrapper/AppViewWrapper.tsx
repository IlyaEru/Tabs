import React from 'react';
import { StyledAppViewWrapper, StyledMain } from './AppViewWrapper.style';

export default function AppViewWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledAppViewWrapper>
      <StyledMain>{children}</StyledMain>
    </StyledAppViewWrapper>
  );
}
