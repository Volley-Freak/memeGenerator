import React from "react";
import Header from "./components/Header"
import Form from "./components/Form";
import Meme from "./components/Meme";

function App() {
  let [memeData, setMemeData]=React.useState({
    topText:"Bhago Yaha Se, Shobhit ne firse",
    bottomText:" Group me apk file bheji hai",
    imgUrl:"https://i.imgflip.com/9vct.jpg"
})
let [memesArray,setMemeArray] =React.useState(); 

function handleChange(event){
  let {name} = event.target
  setMemeData(prevMemeData => {
    return{
      ...prevMemeData,
      [name]:event.target.value
    }
  })
}
// console.log(memeData)


React.useEffect(function(){
  console.log("useEffect rendered");
  fetch("https://api.imgflip.com/get_memes")
  .then(res => res.json())
  .then(data => setMemeArray(data.data.memes))
},[])


function getMemeImg(event){
  event.preventDefault();
  let randomNum = Math.floor(Math.random()*100);
  setMemeData(prevMemeData => {
    return{
      ...prevMemeData,
      "imgUrl":memesArray[randomNum].url
    }
  })
}

  return (
    <div className="container">
      <Header/>
      <main>
      <Form
        topText={memeData.topText}
        bottomText={memeData.bottomText}
        onChange={handleChange}
        onSubmit={getMemeImg}
      />
      <Meme
        memeImg={memeData.imgUrl}
        topText={memeData.topText}
        bottomText={memeData.bottomText}
      />
      </main>
    </div>
  );
}

export default App;
