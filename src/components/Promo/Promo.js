import React from 'react';

import {
  StyledSection,
  StyledHeading,
  StyledPlanet,
  StyledCelestialObject,
  StyledPlanetParagraph
} from "./StyledPromo";

const PromoSection = () => (
  <StyledSection>
    <StyledHeading>카페 입지를 추천해 주는 사이트 입니다!!</StyledHeading>
      <StyledPlanetParagraph>1. 원하시는 구역을 선택 </StyledPlanetParagraph>
      <StyledPlanetParagraph>2. 선택된 구역의 정보와 점포 현황 파악 </StyledPlanetParagraph>
      <StyledPlanetParagraph>3. 관심있는 점포 아이콘을 클릭하여 해당 점포에 대한 정보를 볼 수 있음 </StyledPlanetParagraph>
  </StyledSection>
)

export default PromoSection;