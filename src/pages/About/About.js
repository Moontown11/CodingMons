import PageHeader from "../../components/PageHeader/PageHeader";
import { AboutP, AboutSection } from "./StyledAbout";
import React from 'react';

const AboutPage = () => {
  return (
    <AboutSection>
      <PageHeader title="About" />
      <article>
        <AboutP>
          설명
        </AboutP>
        <AboutP>
          설명2
        </AboutP>
      </article>
    </AboutSection>
  );
};

export default AboutPage;