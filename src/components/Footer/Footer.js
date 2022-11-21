import React from 'react';
//import { planets } from "../../constants";
import {
  Border,
  FooterA,
  FooterLink,
  FooterP,
  HeaderFooterP,
  StyledFooterColumn,
  StyledFooterRow,
  StyledFooterSection,
} from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooterSection>
      <StyledFooterColumn>
        <HeaderFooterP>카페 입지 추천 시스템</HeaderFooterP>
        <FooterP>
          해당 사이트에서 제공하는 서비스를 활용하여 카페 입지를 추천 받아 보세요
        </FooterP>
      </StyledFooterColumn>
      <StyledFooterRow margin>
        <StyledFooterRow>
          <StyledFooterRow linkContainer>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>Services</HeaderFooterP>
              
            </StyledFooterColumn>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>Information</HeaderFooterP>
              <FooterA href="/About">How it works</FooterA>

            </StyledFooterColumn>
            <StyledFooterColumn>

            </StyledFooterColumn>
          </StyledFooterRow>
        </StyledFooterRow>
      </StyledFooterRow>
      <Border />
      <StyledFooterRow bottomContainer>
        <FooterP bottom>
          Copyright 2022 Codingmons, All rights reserved.
        </FooterP>
        <StyledFooterRow bottomDiv>
          <FooterP bottom>Terms of Service</FooterP>
          <FooterP bottom>Privacy Policy</FooterP>
        </StyledFooterRow>
      </StyledFooterRow>
    </StyledFooterSection>
  );
};

export default Footer;