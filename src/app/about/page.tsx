import React from "react";

import Experiences from "@/components/Experiences";
import PageHeader from "@/components/PageHeader";
import PersonalInformation from "@/components/PersonalInformation";
import TechStack from "@/components/TechStack";

const AboutPage = () => {
  return (
    <div className="container">
      <PageHeader
        subTitle="resume"
        mainTitle={{
          normal: "about",
          strong: "me",
        }}
      />
      <PersonalInformation />
      <TechStack />
      <Experiences />
    </div>
  );
};

export default AboutPage;
