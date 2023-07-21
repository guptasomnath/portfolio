import React,{ useState, createContext, useEffect} from "react";
import "./App.css";
import NavBar from "./Comps/NavBar/NavBar";
import Section from "./Comps/Section/Section";
import Footer from "./Comps/Footer/Footer";
import Projects from "./Comps/ProjectsPage/Projects";
import Skills from "./Comps/SkillsPage/Skills";
import About from "./Comps/AboutPage/About";
import PopUpDialog from "./Comps/PopUpDialog/PopUpDialog";
import { Route, Routes } from "react-router-dom";
export const AppContext = createContext(null);
export const baseUrl = "/portfolio"; //  ex:- "/baseurl"

function App() {
const [toggleDialog, setToggleDialgo] = useState(false);
const [dataList, setDataList] = useState([]);

useEffect(()=>{
  document.documentElement.style.setProperty('--appCompHeight', window.innerHeight + "px");
},[]);

  return (
    <AppContext.Provider value={{dataList:dataList, setDataList:setDataList}}>
    <div className="App">
      <PopUpDialog toggleDialog = {toggleDialog} setToggleDialgo = {setToggleDialgo}/>
      <NavBar />
      <Routes>
        <Route path= {baseUrl} element={<Section toggleDialog = {toggleDialog} setToggleDialgo = {setToggleDialgo}/>}/>

        <Route path={baseUrl + "/projects"} element={<Projects />} />
        
        <Route path = {baseUrl + "/skills"} element = {<Skills />} />
        <Route path = {baseUrl + "/about"} element = {<About toggleDialog = {toggleDialog} setToggleDialgo = {setToggleDialgo} />}/>
      </Routes>
      <Footer />
    </div>
    </AppContext.Provider>
  );
}

export default App;
