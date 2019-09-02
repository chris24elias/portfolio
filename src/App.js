import React from "react";
import Header from "./Sections/Header";
import Bio from "./Sections/Bio";
import Skills from "./Sections/Skills";
// import ContactMe from "./Sections/ContactMe";
import Projects from "./Sections/Projects";
import Footer from "./Sections/Footer";
import ResumeInfo from "./ResumeInfo";

function App() {
  let {
    name,
    portrait_src,
    skills,
    projects,
    bio_description,
    resume_link,
    github_link,
    linkedin_link
  } = ResumeInfo;

  return (
    <div>
      <Header name={name} />
      <main id="main">
        <Bio
          name={name}
          portrait_src={portrait_src}
          bio_description={bio_description}
        />
        <Skills skills={skills} />
        <Projects projects={projects} />
        {/* <ContactMe /> */}
      </main>
      <Footer
        github={github_link}
        resume={resume_link}
        linkedin={linkedin_link}
      />
    </div>
  );
}

export default App;
