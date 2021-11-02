
import './App.css';
import React from 'react';
import imageInSrc from "./imageInSrc.jpg"
import './style.css'


function App() {
  return (
    <div className="App">

      <div style={{ border: "solid  1px black", maxWidth: "100vw" }}>

        <h1 className="title red">Your name here</h1>
        <div className="div-img">
        <img src={imageInSrc} className="images" />
        <img src="/imageInPublic.jpg" className="images" />
        </div>

      </div>

      <video width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4" />

      </video>

    </div>
  );
}

export default App;
