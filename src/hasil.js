import logo from './th.jpg';

function Hasil(props) {
  var random = Math.random() < 0.5 ? "Asli" : "Palsu";

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
                <button className = "btn-dark" onClick={() => window.location.href="/"} style={{textAlign: "center"}}>Try Another Image</button>       
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