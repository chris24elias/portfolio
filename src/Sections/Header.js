import React from "react";

const Header = ({ name }) => {
  return (
    <header class="header">
      <div class="header-logo-box">
        <img src="images/logo.png" alt="Chris" class="header-logo" />
      </div>
      <div class="header__text-box">
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
