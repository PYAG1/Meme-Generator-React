import React from "react";
import memes from "./memes";

export default function Form(){

    function Memelog(){
  let rand = Math.floor(Math.random() * memes.data.memes.length);
  let memeD= memes.data.memes;
 let img=memeD[rand].url;	
setmemei(img);
    }

    const [memei,setmemei]=React.useState(``);

  

    return( 
     
        <main>
            
            <div className="form">
                <input type="text" placeholder="top text "className="form--input"/>
                <input type="text" placeholder="bottom text " className="form--input"/>
                <button onClick={Memelog} className="form--button">Get new Image</button>
            </div>

            <img className="meme-img" src={memei}></img>
        </main>
    )
}

