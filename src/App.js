import React, { useState } from "react";
import logo from './th.jpg';
import './App.css';

function App() {
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div className = "App">
      <div className = "header">
        <img className = "logos" src = {logo}></img>
        <div className = "header-text">
          <h2 style={{margin: 0 }}>Deep Fake Detector</h2>
        </div>
      </div>
      <div className = "upload-container">
        <input type = "file" accept="image/jpeg, image/png, image/jpg" onChange = {handleChange} />
      </div>
      <img className = "output" src = {file} />
      <div className = "header-text">
        <a>© Ananda Adhicitta, Universitas Buddhi Dharma 2023</a>
      </div>
    </div>
  );
}

export default App;
