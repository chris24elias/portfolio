import React from "react";

const Header = ({ name }) => {
  return (
    <header class="header">
      <div class="header__text-box">
        {/* <svg viewBox="0 0 16 16" class="icon icon--center icon--logo icon-logo">
	<use xlink:href="#icon-logo"></use>
</svg> */}

        <h1 class="heading-primary">
          <span className="heading-primary-main">{name} </span>
          <span className="heading-primary-sub">Front End Developer</span>
        </h1>
        <a href="#projects" class="btn btn--white btn--animated">
          View my work
        </a>
      </div>
    </header>
  );
};

export default Header;
