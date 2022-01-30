import React from "react";
import Header from "./components/Header"
import Form from "./components/Form";
import Meme from "./components/Meme";

function App() {
  let [memeData, setMemeData]=React.useState({
    topText:"Enter your text here",
    bottomText:"Enter your text here",
    imgUrl:"https://i.imgflip.com/9vct.jpg",
    textColor:'d89701'
})
let [memesArray,setMemeArray] =React.useState(); 

function handleChange(event){
  let {name,type,checked} = event.target
  setMemeData(prevMemeData => {
    return{
      ...prevMemeData,
      [name]:event.target.value
    }
  })
}
console.log(memeData)


React.useEffect(function(){
  // console.log("useEffect rendered");
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

// function changeColor(event){
//   let color = event.target;
//   console.log(color)
//   setMemeData(prevMemeData => {
//     return{
//       ...prevMemeData,
//       [event.target.name]:color.value
//     }
//   })
// }

  return (
    <div className="container">
      <Header/>
      <main>
      <Meme
        memeImg={memeData.imgUrl}
        topText={memeData.topText}
        bottomText={memeData.bottomText}
        textColor={memeData.textColor}
      />
      <Form
        topText={memeData.topText}
        bottomText={memeData.bottomText}
        onChange={handleChange}
        onSubmit={getMemeImg}
        colorChange={handleChange}
        textColor={memeData.textColor}
      />
      
      </main>
    </div>
  );
}

export default App;
