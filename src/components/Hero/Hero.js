import {
  StyledSection,
  StyledContentContainer,
  StyledHeading,
  StyledParagraph,
  StyledEarthAndMoonContainer,
  StyledWaveBackground
} from "./StyledHero";

import React from 'react';

const HeroSection = () => (
  <StyledSection>
    <StyledContentContainer>
      <StyledHeading>카페 입지 추천을 받아보세요</StyledHeading>
      <StyledParagraph>위치 기반 데이터를 활용하여 사용자에게 적합한 위치를 찾아볼 수 있도록 도와줍니다.</StyledParagraph>
      {/* <StyledButton to="/planets">Start exploring</StyledButton> */}
    </StyledContentContainer>
    <StyledEarthAndMoonContainer>
      {/* 이미지 넣기 */ }
    </StyledEarthAndMoonContainer>
    <StyledWaveBackground width="1440" height="797" viewBox="0 0 1440 797" fill="none">
      <path d="M1440 575C1025.48 572.005 817.486 0 0 0V796.5H1440V575Z" fill="#141823"/>
    </StyledWaveBackground>
  </StyledSection>
);

export default HeroSection;