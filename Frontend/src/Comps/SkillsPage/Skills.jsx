import React from "react";
import "./Skills.css";
import SkillsListView from "../CardListView/SkillsListView";
import Html from "./icons8-html.svg";
import Css from "./icons8-css.svg";
import JavaScript from "./icons8-javascript.svg";
import ReactJs from "./icons8-react-native.svg";
import Java from "./java-svgrepo-com.svg";
import NodeJs from "./icons8-nodejs.svg";
import ExpressJs from "./icons8-express-js.svg";
import MongoDb from  "./icons8-mongodb.svg";
import ChatGpt from  "./chatgpt-icon.svg";

function Skills() {
  return (
    <div className="skillsDiv">
      <div className="listViewDiv">
        <SkillsListView image={Html} title="HTML" />
        <SkillsListView image={Css} title="Css" />
        <SkillsListView image={JavaScript} title="JavaScript" />
        <SkillsListView image={ReactJs} title="React Js" />
        <SkillsListView image={NodeJs} title="Node Js"/>
        <SkillsListView image={ExpressJs} title="Express" />
        <SkillsListView image={MongoDb} title="Mongo Db" />
        <SkillsListView image={Java} title="Java" />
        <SkillsListView image={ChatGpt} title="ChatGPT" />
      </div>
      <label>I am from India and currently living in West Bengal. I am a skilled Full Stack Web App Developer, proficient in the following areas.</label>
    </div>
  );
}

export default Skills;
