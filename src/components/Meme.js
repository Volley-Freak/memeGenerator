import React from "react";
import memeImg from "../images/memeimg.png"

export default function Meme(props){

    // let randomNumber = Math.floor(Math.random()*100);
    let styles={
        color:`#${props.textColor}`,
        webkitTextStroke : props.textColor==='000000' ?  `0.8px white`: `1px black`
    }
    return(
        <div className="meme">
            <img src={props.memeImg} alt="meme-img" id="meme-img" />
            <h1 id="top-text" style={styles}>{props.topText}</h1>
            <h1 id="bottom-text" style={styles}>{props.bottomText}</h1>
        </div>
    )
}