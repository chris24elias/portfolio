import React from "react";

const Bio = ({ name, portrait_src, bio_description }) => {
  return (
    <section class="section-about">
      {/* <h2 class="bio-header">about</h2> */}
      <div class="bio">
        <div class="bio_container">
          <div class="bio_img">
            <img
              alt={name + " "}
              class="bio_img_img"
              loading="lazy"
              src={portrait_src}
              width="250"
              height="250"
            />
          </div>
          <div class="bio_text">
            <div class="bio_text_main">Let me tell you a few things...</div>
            <div class="bio_text_sub">{bio_description}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
