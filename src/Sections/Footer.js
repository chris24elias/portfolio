import React from "react";

const Footer = ({ github, resume, linkedin }) => {
  return (
    <footer class="footer">
      {/* <div class="footer-container"> */}
      <div class="menu-container">
        <ul class="menu-list">
          <li class="menu-list-item">
            <a href={github} target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
          </li>
          <li class="menu-list-item">
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              LINKEDIN
            </a>
          </li>
          <li class="menu-list-item">
            <a href={resume} target="_blank" rel="noopener noreferrer">
              RESUME
            </a>
          </li>
        </ul>
      </div>
      <div class="text-container">
        <p class="footer-text">Copyright &copy; 2019</p>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
