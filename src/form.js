import React from "react";
import memes from "./memes";

export default function Form(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    function Memelog(){
  let rand = Math.floor(Math.random() * allMemeImages.data.memes.length);
  let memeD= allMemeImages.data.memes;
 let img=memeD[rand].url;	
setMeme(prev=>(
 {...prev,randomImage: img

}));
    }

    const [allMemeImages, setAllMemeImages] = React.useState(memes)
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
  

    return( 
     
        <main>
            
            <div className="form">
                <input type="text" 
                placeholder="top text "
                className="form--input" 
                name="topText" 
                 value={meme.topText}
                onChange={handleChange}
                
                />




                <input type="text"
                 placeholder="bottom text " 
                 className="form--input"
                 
                 name="bottomText"
                 value={meme.bottomText}
                 onChange={handleChange}
                 
                 />
                <button onClick={Memelog} className="form--button">Get new Image</button>
            </div>

            <div className="meme">
            <img className="meme-img" src={meme.randomImage}></img>

                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}

