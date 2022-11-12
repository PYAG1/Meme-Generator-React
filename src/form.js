import React from "react";
import memes from "./memes";

export default function Form(){

    function Memelog(){
  let rand = Math.floor(Math.random() * memes.data.memes.length);
  let memeD= memes.data.memes;
 console.log (memeD[rand].url);
    }
  


    return( 
     
        <main>
            
            <div className="form">
                <input type="text" placeholder="top text "className="form--input"/>
                <input type="text" placeholder="bottom text " className="form--input"/>
                <button onClick={Memelog} className="form--button">Get new Image</button>
            </div>
        </main>
    )
}