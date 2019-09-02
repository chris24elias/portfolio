import React from "react";

const ProjectCard = ({ title, technologies, repoLink, image }) => {
  function renderTechnologies() {
    if (technologies) {
      return technologies.map((val, index) => {
        return <li key={index}>{val}</li>;
      });
    }

    return null;
  }

  return (
    <div class="card">
      <div class="card__side card__side--front">
        <div class={"card__picture card__picture__" + image}>&nbsp;</div>
        <h3 class="card__heading">
          <span class="card__heading-span">{title}</span>
        </h3>
        <div class="card__details">
          <ul>{renderTechnologies()}</ul>
        </div>
      </div>
      <div class="card__side card__side--back">
        <div class="card__cta">
          <a
            class="btn btn--white"
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
