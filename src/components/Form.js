import React from "react";

export default (props) => {
  function getMemeImg(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={props.onSubmit}>
      <h2 className="text-center">Add Your Text</h2>
      
      
      <div className="inputs">
      <label htmlFor="topText">Text At Top</label>
        <input
          type="text"
          placeholder="Top Text"
          onChange={props.onChange}
          name="topText"
          value={props.topText}
          color={props.textColor}
          id="topText"
        />
        <label htmlFor="bottomText">Text At Bottom</label>
        <input
          type="text"
          placeholder="Bottom Text"
          onChange={props.onChange}
          name="bottomText"
          value={props.bottomText}
          color={props.textColor}
          id="bottomText"
        />
      </div>
      <div className="text-colors">
        <h3 id="text-color-heading">Text Color</h3>
        <div className="text-color-inputs">
          <input
            type="radio"
            name="textColor"
            value="000000"
            id="black"
            onChange={props.colorChange}
            // checked={props.textColor==='black'}
          />
          <input
            type="radio"
            name="textColor"
            value="ffffff"
            id="white"
            onChange={props.colorChange}
            // checked={props.textColor==="white"}
          />
          <input
            type="radio"
            name="textColor"
            value="D89701"
            id="yellow"
            onChange={props.colorChange}
            // checked={props.textColor==="yellow"}
          />
        </div>
      </div>
      <button>Get new meme image</button>
    </form>
  );
};
