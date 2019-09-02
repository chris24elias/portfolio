import React from "react";
import SkillCard from "../Components/SkillCard";

const Skills = ({ skills }) => {
  function renderSkills() {
    if (skills) {
      return skills.map((skill, index) => {
        return (
          <SkillCard
            key={index}
            title={skill.title}
            skills={skill.skills}
            icon={skill.icon}
          />
        );
      });
    }

    return null;
  }

  return (
    <section class="section-skills" id="skills">
      {/* <div class="skills-header">
        <h2 class="skills-header-text">Skills</h2>
      </div> */}
      <div class="skills-container">{renderSkills()}</div>
    </section>
  );
};

export default Skills;
