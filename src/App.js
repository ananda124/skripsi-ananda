import React, { useState }  from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home';
import Hasil from './hasil';

function App() {
  const [image, setImage] = useState(null)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home setImage={setImage} />} />
        <Route path="/hasil" element={<Hasil image={image} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
