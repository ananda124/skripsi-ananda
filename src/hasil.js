import logo from './th.jpg';
import { useNavigate } from 'react-router-dom';

function Hasil(props) {
  var random = Math.random() < 0.5 ? "Asli" : "Palsu";
  const navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }

    return (
        <div>
            <div className = "header">
                <img className = "logos" src = {logo} alt = "Logo" />
                <div className = "header-text">
                    <h2 style = {{margin: 0 }}>Deep Fake Detector</h2>
                </div>
            </div>
            <div className = "row" >
              <div className = "hasil col-12 col-md-4">
                <h1 className = "text-hasil">Gambarmu {random}</h1>
                <br></br>
                <button className = "btn-dark" onClick={ handleClick } style={{textAlign: "center"}}>Try Another Image</button>       
            </div>
        
            <div className = "col-12 col-md-8">
              <img className = "output" src = {props.image} alt = "Gambar Hasil" />
            </div>
          </div>

          <div className = "header-text">
            <a>© Ananda Adhicitta, Universitas Buddhi Dharma 2023</a>
          </div>
        </div>

    )
}

export default Hasil;