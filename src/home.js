import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from './th.jpg';

function Home(props) {
    const navigate = useNavigate();

    function handleChange(e) {
        props.setImage(URL.createObjectURL(e.target.files[0]));
        navigate("/hasil");
    }

    return (
        <div className = "App">
          <div className = "header">
            <img className = "logos" src = {logo} alt = "Logo" />
            <div className = "header-text">
              <h2 style={{margin: 0 }}>Deep Fake Detector</h2>
            </div>
          </div>
          <div className = "upload-container">
            <input type = "file" accept="image/jpeg, image/png, image/jpg" onChange = {handleChange} />
          </div>
          <div className = "header-text">
            <a>© Ananda Adhicitta, Universitas Buddhi Dharma 2023</a>
          </div>
        </div>
    )
}

export default Home;