import React from "react";
import trollFace from "../images/trollFace.png"

export default function Header() {
  return (
    <header>
      <img src={trollFace} alt="troll-face"></img>
      <h3>Meme Generator</h3>
    </header>
  );
}
