import {
  BrowserRouter as Router,
  Link,
  Route, Routes
} from "react-router-dom";
import React, {useState, useEffect} from "react";
import { ReadFile } from "./components/readFile";
import { Output } from "./components/output";
import './App.css';
import { Ctx } from "./components/context";


export function App() {
  const [fileContent, setFileContent] = useState('nada');

  const save = (value) => {
    setFileContent(value);
  }
  

  return (
      <>
        <Ctx.Provider value={{fileContent, save}}>
          <Router>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path="/read-file" element={<ReadFile/>}/>
              <Route path="/output" element={<Output/>}/>
            </Routes>
          </Router>
        </Ctx.Provider>
      </>
  );
}


function Home(){
  return (
    <div>
    <h1>React Comment Remover</h1>
    <p>This is a multi-page React app. <br/> 
    The first page ('/read-file') has the ability to receive a .txt file and parse it into a string. <br/> 
    The Second Page ('/output') display the content of the .txt file but without comments where: <br/>
    - Block comments are represented as <br/>/* text more <br/>
     text and more text */ <br/>- Single line comments are represented as <br/>
     //text... </p>
    <Link to={'/read-file'}>To read-file</Link>
    </div>
  )
}