import React from "react";
import memeImg from "../images/memeimg.png"

export default function Meme(props){

    // let randomNumber = Math.floor(Math.random()*100);
    return(
        <div className="meme">
            <img src={props.memeImg} alt="meme-img" id="meme-img" />
            <h1 id="top-text">{props.topText}</h1>
            <h1 id="bottom-text">{props.bottomText}</h1>
        </div>
    )
}