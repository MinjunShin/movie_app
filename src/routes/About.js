import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        This is about page for Movie App.
      </span>
      <span>Created at 2021-09-21</span>
    </div>
  );
}

export default About;
