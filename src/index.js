import React from "react";
import "./style.css"
import  ReactDOM  from "react-dom";
import App from "./App";


function Meme(){
  return(
    <div>
   <App/>
    </div>
  )
}

ReactDOM.render(<Meme/>,document.getElementById("root"));