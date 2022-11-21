import PageHeader from "../../components/PageHeader/PageHeader";
import { AboutP, AboutSection } from "./StyledAbout";
import React from 'react';

const AboutPage = () => {
  return (
    <AboutSection>
      <PageHeader title="About" />
      <article>
        <AboutP>
          카페 입지를 추천해주는 사이트입니다!
        </AboutP>
        <AboutP>
          Service 탭에서 원하는 지역을 검색하시고 해당 서비스를 이용해 보세요!
        </AboutP>
      </article>
    </AboutSection>
  );
};

export default AboutPage;