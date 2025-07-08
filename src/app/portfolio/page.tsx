import React from "react";

import PageHeader from "@/components/PageHeader";
import Projects from "@/components/Projects";

const PortfolioPage = () => {
  return (
    <div className="container">
      <PageHeader
        subTitle="PROJECTS"
        mainTitle={{
          normal: "my",
          strong: "portfolio",
        }}
      />
      <Projects />
    </div>
  );
};

export default PortfolioPage;
