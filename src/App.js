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
        <Link to={'/read-file'}>Navigate to read file</Link>
          <Router>
            <Routes>
              <Route path="/read-file" element={<ReadFile/>}/>
              <Route path="/output" element={<Output/>}/>
            </Routes>
          </Router>
        </Ctx.Provider>
      </>
  );
}

