import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import React, {useState} from "react";
import { ReadFile } from "./components/readFile";
import { Output } from "./components/output";
import './App.css';
import { Ctx } from "./components/context";

export function App() {
  const [fileContent, setFileContent] = useState('nada');

  const save = (value) => {
    setFileContent(value)
  }

  return (
      <>
        <Ctx.Provider value={{fileContent, save}}>
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

