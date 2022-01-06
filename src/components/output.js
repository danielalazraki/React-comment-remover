import { Ctx } from "./context";
import { useContext } from "react";

export function Output(){
    const {fileContent} = useContext(Ctx);
    console.log(Ctx)
  
    return(
        <>
        <h1>Output</h1>
        <p>String: <br/>{fileContent}</p>
        <p>Output: <br/>{deleteSLC(deleteComments(fileContent))}</p>
        </>
    )
}

const deleteComments = (string) => {
    let i = 0;
    let lastComment = 0;
    let newString = "";
    let closingTagNotFound = true;
    
    while (i < (string.length - 1)) {
        //search for opening tag
        if (string[i] === '/' && string[i + 1] === '*') {
            //Add characters found in text until opening comment tag
            newString += string.slice(lastComment, i);
            closingTagNotFound = true;
            //search for next closing tag
            for (let z = i + 2; z < (string.length - 1); z++) {
                if (string[z] === '*' && string[z + 1] === '/') {
                    closingTagNotFound = false;
                    if (string.length - 1 > z+1) {
                        lastComment = z + 2;
                        i = z + 2;
                        z = string.length - 1;
                        
                    }else{
                        lastComment = z + 1;
                    }   
                }
            }

            if(closingTagNotFound){
                newString += string.slice(i, string.length);
                return newString;
            }
        }else{
           i++; 
        }
        
    }
    newString += string.slice(lastComment, (string.length));
    return newString;
}

const deleteSLC = (str) => {
    let newArray = [];
    let array = str.split("\n");
    //iterate through each line
    array.forEach(line => {
        for(let i = 0; i < (line.length - 1); i++){
            //find comments and where
            if(line[i] === '/' && line[i+1] === '/'){
                line = line.slice(0, i);
            }
        }
        newArray.push(line);
    });
    let answer = newArray.toString().split(',').join('');
    return answer;
}