import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

const Projects = ({ profile, elementToAnalyse }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const projectList = () => {
    if (profile[elementToAnalyse].length === 0)
      return (
        <div className="projects-empty">
          This user hasn't posted any {elementToAnalyse}
        </div>
      );

    return profile[elementToAnalyse].map((project) => {
      return (
        <div key={project.id} className="projects-item">
          <h1>{project.name}</h1>
          <h2>{project.organizations.map((org) => org.name)}</h2>
          <div>
            {project.fromMonth} - {project.fromYear}
          </div>
          <br />
          <div>Link: unavailable</div>
        </div>
      );
    });
  };

  return (
    <div className="projects-slider">
      <div className="projects-list">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={2}
          gutter={20}
          leftChevron={<button className="projects-button">{"<"}</button>}
          rightChevron={<button className="projects-button">{">"}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {projectList()}
        </ItemsCarousel>
      </div>
    </div>
  );
};

export default Projects;
