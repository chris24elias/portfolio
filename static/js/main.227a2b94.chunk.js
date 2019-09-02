(window["webpackJsonpreact-portfolio"]=window["webpackJsonpreact-portfolio"]||[]).push([[0],[,function(e){e.exports=JSON.parse('{"name":"Chris Elias","position":"Front End Developer","portrait_src":"images/portrait.jpg","bio_description":"Currently I am a software developer working for FastPBX. I am passionate about learning and always finding new ways of improving myself.","resume_link":"/resume.pdf","github_link":"https://github.com/chris24elias","linkedin_link":"https://www.linkedin.com/in/christopher-elias","skills":[{"title":"Web","skills":["HTML5","CSS3 | SASS","Javascript","React | Redux"],"icon":"fas fa-window-maximize fa-4x"},{"title":"Mobile","skills":["React Native","Typescript","iOS | Android","Java | Swift"],"icon":"fas fa-mobile-alt fa-4x"},{"title":"Server","skills":["Node JS","Express","MySQL","PHP"],"icon":"fas fa-server fa-4x"}],"projects":[{"title":"Portfolio","technologies":["React","Javascript","CSS3 | SASS"],"repoLink":"https://github.com/chris24elias/portfolio","image":""},{"title":"FastPBX Link","technologies":["React Native","Typescript","Redux | GraphQL"],"repoLink":"https://github.com/chris24elias/fastpbx-link-demo","image":"fastpbx-link"},{"title":"VoIPScore","technologies":["React Native","Typescript","Redux | GraphQL"],"repoLink":"https://github.com/chris24elias/voipscore_demo","image":"voipscore"}]}')},,,function(e,t,a){e.exports=a(10)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(3),l=a.n(n),s=(a(9),function(e){var t=e.name;return r.a.createElement("header",{class:"header"},r.a.createElement("div",{class:"header__text-box"},r.a.createElement("h1",{class:"heading-primary"},r.a.createElement("span",{className:"heading-primary-main"},t," "),r.a.createElement("span",{className:"heading-primary-sub"},"Front End Developer")),r.a.createElement("a",{href:"#projects",class:"btn btn--white btn--animated"},"View my work")))}),c=function(e){var t=e.name,a=e.portrait_src,i=e.bio_description;return r.a.createElement("section",{class:"section-about"},r.a.createElement("div",{class:"bio"},r.a.createElement("div",{class:"bio_container"},r.a.createElement("div",{class:"bio_img"},r.a.createElement("img",{alt:t+" ",class:"bio_img_img",loading:"lazy",src:a,width:"250",height:"250"})),r.a.createElement("div",{class:"bio_text"},r.a.createElement("div",{class:"bio_text_main"},"Let me tell you a few things..."),r.a.createElement("div",{class:"bio_text_sub"},i)))))},o=function(e){var t=e.title,a=e.skills,i=e.icon;return r.a.createElement("div",{class:"skill-box"},r.a.createElement("div",{class:"skill-box-icon"},i&&r.a.createElement("i",{class:i})),r.a.createElement("h3",{class:"skill-box-title"},t),r.a.createElement("div",{class:"skill-box-text"},r.a.createElement("ul",null,a?a.map(function(e,t){return r.a.createElement("li",{key:t},e)}):null)))},m=function(e){var t=e.skills;return r.a.createElement("section",{class:"section-skills",id:"skills"},r.a.createElement("div",{class:"skills-container"},t?t.map(function(e,t){return r.a.createElement(o,{key:t,title:e.title,skills:e.skills,icon:e.icon})}):null))},d=function(e){var t=e.title,a=e.technologies,i=e.repoLink,n=e.image;return r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card__side card__side--front"},r.a.createElement("div",{class:"card__picture card__picture__"+n},"\xa0"),r.a.createElement("h3",{class:"card__heading"},r.a.createElement("span",{class:"card__heading-span"},t)),r.a.createElement("div",{class:"card__details"},r.a.createElement("ul",null,a?a.map(function(e,t){return r.a.createElement("li",{key:t},e)}):null))),r.a.createElement("div",{class:"card__side card__side--back"},r.a.createElement("div",{class:"card__cta"},r.a.createElement("a",{class:"btn btn--white",href:i,target:"_blank",rel:"noopener noreferrer"},"Github repo"))))},p=function(e){var t=e.projects;return r.a.createElement("section",{class:"section-projects",id:"projects"},r.a.createElement("div",{class:"projects-header"},r.a.createElement("h2",{class:"projects-header-text"},"Projects")),r.a.createElement("div",{class:"projects-container"},function(){if(t)return t.map(function(e,t){return r.a.createElement(d,{key:t,repoLink:e.repoLink,title:e.title,technologies:e.technologies,image:e.image})})}()))},u=function(e){var t=e.github,a=e.resume,i=e.linkedin;return r.a.createElement("footer",{class:"footer"},r.a.createElement("div",{class:"menu-container"},r.a.createElement("ul",{class:"menu-list"},r.a.createElement("li",{class:"menu-list-item"},r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},"GITHUB")),r.a.createElement("li",{class:"menu-list-item"},r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"LINKEDIN")),r.a.createElement("li",{class:"menu-list-item"},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"RESUME")))),r.a.createElement("div",{class:"text-container"},r.a.createElement("p",{class:"footer-text"},"Copyright \xa9 2019")))},E=a(1);var h=function(){var e=E.name,t=E.portrait_src,a=E.skills,i=E.projects,n=E.bio_description,l=E.resume_link,o=E.github_link,d=E.linkedin_link;return r.a.createElement("div",null,r.a.createElement(s,{name:e}),r.a.createElement("main",{id:"main"},r.a.createElement(c,{name:e,portrait_src:t,bio_description:n}),r.a.createElement(m,{skills:a}),r.a.createElement(p,{projects:i})),r.a.createElement(u,{github:o,resume:l,linkedin:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.227a2b94.chunk.js.map