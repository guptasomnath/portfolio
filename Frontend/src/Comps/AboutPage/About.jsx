import React from "react";
import "./About.css";
import Contact from "../ContactMeComp/Contact";

function About({ toggleDialog, setToggleDialgo }) {
  return (
    <div className="aboutPageDiv">
      <div className="aboutMeDiv">
        <label>{"</About Me>"}</label>
        <p>
          I'm Somnath Gupta, a full stack web developer experienced in <strong>HTML, CSS,
          JavaScript, React.js, Node.js, Express.js, MongoDB, Chat GPT, and Core
          Java </strong>. Let's create efficient and engaging web applications together!
          {/* I'm Somnath Gupta, a full stack web app developer proficient in HTML, CSS,
          JavaScript, React.js, Node.js, Express.js, MongoDB, Chat GPT, and Core
          Java. I create efficient and engaging web applications. Let's bring
          your ideas to life together!
           Hello, I am Somnath Gupta, a full stack web app developer with expertise
          in creating web applications using React JS, as well as the
          foundational technologies of HTML, CSS, and JavaScript. Additionally,
          I possess knowledge in the programming language of Core Java, making
          me a well-rounded asset to any tech team.*/}
        </p>
      </div>

      <Contact
        text="Contact me with:-"
        isVisiable="true"
        toggleDialog={toggleDialog}
        setToggleDialgo={setToggleDialgo}
      />
    </div>
  );
}

export default About;
