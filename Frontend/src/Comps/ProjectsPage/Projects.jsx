import React, { useEffect, useState, useContext } from "react";
import "./Projects.css";
import CardListView from "../CardListView/ProjectListView";
import ShowProject from "./ShowProject/ShowProject";

import Papa from "papaparse";
import { AppContext } from "../../App";

let i = 0;

function Projects() {
const {dataList, setDataList} = useContext(AppContext);
  const [dialog, setDialog] = useState({
    visiablity: false,
    projectDetails: {
      imgUrl: null,
      title: null,
      description: null,
      redirectURl: null
    }
  });

  const [className, setClassName] = useState(dataList.length == 0 ? "projectsLayout" : "projectsDiv");

 // const [dataList, setDataList] = useState([]);


  useEffect(() => {
    i++;

    const url =
      "https://docs.google.com/spreadsheets/d/1Kk6Ezj4kVvQvF7dtn96roSH_fA5z0l5fLaStsvpl6Kw/export?format=csv";

    function gotRespons(response) {
      const parsedData = Papa.parse(response, {
        header: true,
      });

      setClassName("projectsDiv");
      setDataList(parsedData.data.reverse());
    }

    if(dataList.length == 0){

      fetch(url)
        .then((data) => data.text())
        .then((res) => gotRespons(res));

    }
   
  }, []);

  return (
  <>
  <div className="mainProjectContainer">
    <div className= {className}>
      <label style={{display: className === "projectsDiv"? "none":"block", marginTop: '25px'}}>Loading projects..</label>
       {dataList.map((data, index)=> (
        <CardListView key={index} ImageURL = {data.ImageURL} ProjectTitle = {data.ProjectTitle} ProjectDescription = {data.ProjectDescription} Time = {data.Time} RedirectURL = {data.RedirectURL} dialog = {dialog} setDialog = {setDialog} />
      ))}
    </div>
  </div>
  <ShowProject dialog = {dialog} setDialog = {setDialog}/>
  </>
  );
}

export default Projects;
