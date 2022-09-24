import { useState } from "react";

function App() {
  // Deklarasi Variable
  const [luasTanah, setLuasTanah] = useState(0);
  const [luasBangunan, setLuasBangunan] = useState(0);
  const [NTanah, setNTanah] = useState(0);
  const [NBangunan, setNBangunan] = useState(0);
  const [PBB, setPBB] = useState(null);

  // Function
  function besaranPBB() {
    let hargaTanah = luasTanah * NTanah;
    let hargaBangunan = luasBangunan * NBangunan;
    let pbb = (((((hargaTanah + hargaBangunan) - 12000000) * 20 / 100) * 5 / 100) - 15000);
    setPBB(pbb)
  }


  return (
    <div className="App">
      <div className="d-flex justify-content-center my-4 ">
        <div className="card text-bg-dark shadow-lg p-3 mb-5 rounded" style={{ width: "25rem" }}>
          <div className="card-body">
            <div className="form-group">
              <h2>PBB Kalkulator</h2>
              <p>Perhitungan pajak bumi dan bangunan</p>
              <hr />
            </div>
            <div className="form-group">
              <label className="form-label my-2">Luas Tanah</label>
              <input type="number" className="form-control my-1" required onChange={(e) => setLuasTanah(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label my-2">Luas Bangunan</label>
              <input type="number" className="form-control my-1" required onChange={(e) => setLuasBangunan(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label my-2">NJOP Tanah</label>
              <input type="number" className="form-control my-1" required onChange={(e) => setNTanah(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label my-2">NJOP Bangunan</label>
              <input type="number" className="form-control my-1" required onChange={(e) => setNBangunan(e.target.value)} />
            </div>
            <div className="col-12">
              <button className="btn btn-primary my-3" type="submit" onClick={besaranPBB}>Hitung</button>
            </div>
            <div>
              {
                PBB ?
                  <div className="alert alert-info" role="alert">
                    Besaran PBB pertahun adalah {PBB}
                  </div>
                  :
                  ""
              }
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
