import React from "react";

export default (props) => {

    function getMemeImg(event){
        event.preventDefault();
    }

    return(
        <form onSubmit={props.onSubmit}>
            <div className="inputs">
            <input
                type="text"
                placeholder="Top Text"
                onChange={props.onChange}
                name="topText"
                value={props.topText}
            />
            <input
                type="text"
                placeholder="Bottom Text"
                onChange={props.onChange}
                name="bottomText"
                value={props.bottomText}
            />
            </div>
            <button>
                Get a new meme image
            </button>
        </form>
    )
}