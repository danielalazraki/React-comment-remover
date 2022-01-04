import { useState, useContext, useEffect} from "react"
import { Link } from "react-router-dom";
import { Ctx } from "./context";

export function ReadFile(){
    const [filename, setFileName ] = useState('upload file');
    const {fileContent, save} = useContext(Ctx);
   
    const showFile = async (e) => {
      e.preventDefault();
      setFileName(e.target.files[0].name);
      const reader = new FileReader();

      reader.onload = async (e) => {
        const text = (e.target.result);
        save(text);
        console.log(text);
      };
      reader.readAsText(e.target.files[0]);
    }
  
    return(
        <>
          <h1>readFile</h1>
          <input type="file" name="file" onChange={showFile}/>
          <p>filename {filename}</p>
          <br/>
          <Link to={`/output`}>To output</Link>
          <div>
            <p>String: <br/>{fileContent}</p>
          </div>
        </>
  
    )
  }


