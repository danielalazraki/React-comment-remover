import { Ctx } from "./context";
import { useContext } from "react";

export function Output(){
    const {fileContent} = useContext(Ctx);
    console.log(Ctx)
    
    
    
    return(
        <>
        <h1>Output</h1>
        <p>string: {fileContent}</p>
        <p>output: {deleteSLC(fileContent)}</p>
        </>
    )
}
const deleteSLC = (str) => {
    let array = str.split("\n");
    array.filter((line) => {
       for(let i = 0; i < line.length -1; i++){
        if(line[i] === '/' && line[i+1] === '/'){
           return false;
        } else {
            return true;
          }
      }
    })
      
    
    let answer = array.toString();
    
    return answer;
}
function deleteComments(string) {
    var i = 0;
    var newString = ""
    while (i < (string.length - 1)) {
        //search for opening tag
        if (string[i] === '/' && string[i + 1] === '*') {
            //Add characters found in text until opening comment tag
            newString += string.slice(0, i);
            //search for next closing tag
            for (let z = i + 2; z < (string.length - 1); z++) {
                if (string[z] === '*' && string[z + 1] === '/') {
                    if (string.length - 1 > z) {
                        newString += string.slice(z + 2);
                    }
                }
            }
        }
        i++;
    }
    return newString
}