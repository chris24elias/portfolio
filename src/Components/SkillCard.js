import React from "react";

const SkillCard = ({ title, skills, icon }) => {
  function renderSkills() {
    if (skills) {
      return skills.map((skill, index) => {
        return <li key={index}>{skill}</li>;
      });
    }

    return null;
  }

  return (
    <div class="skill-box">
      <div class="skill-box-icon">{icon && <i class={icon}></i>}</div>
      <h3 class="skill-box-title">{title}</h3>
      <div class="skill-box-text">
        <ul>{renderSkills()}</ul>
      </div>
    </div>
  );
};

export default SkillCard;

// <div class="card">
//   <div class="card__side card__side--front card__side--front-2">
//     <div class="card__picture card__picture--2">&nbsp;</div>
//     <img
//       src="img/fire.gif"
//       class="card__svg-icon card__svg-icon-2"
//       alt=""
//     />
//     <div class="card__heading">
//       <span class="card__heading-span--2">Instalava Picture App</span>
//     </div>
//     <div class="card__details">
//       <ul>
//         <li>React | Redux</li>
//         <li>SemanticUI</li>
//         <li>Express | NodeJS</li>
//         <li>PostgreSQL</li>
//       </ul>
//     </div>
//     <div class="card__side card__side--back card__side--back-2">
//       <div class="card__cta">
//         <div class="card__box">
//           <div class="card__description">
//             <p>
//               Instagram-inspired picture app with feed, profiles, followers
//             </p>
//           </div>
//         </div>
//         <a href="#popup-2" class="btn btn--white btn--github">
//           Demo
//         </a>
//       </div>
//     </div>
//   </div>
// </div>
