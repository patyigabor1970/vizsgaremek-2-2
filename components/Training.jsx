import { useLocation } from "react-router-dom";
import Load from "./Load";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Training.css";

function Training() {
  const [training,setTraining] = useState([]);
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    navigate(e.target.value);
  };
  useEffect(() => {
    fetch(`http://localhost:80/api/fitness`)
      .then((res) => res.json())
      .then((trainin) => setTraining(trainin))
      .catch((err) => alert(err));
  }, []);
  return (
    
    <div>{ training.length !== 0 ?
      <div className="hero max-h-screen bg-red-600">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={training[0].KepUrl}
            className="max-w-lg rounded-lg shadow-2xl border-8 border-black"
          />
          <div>
            <h1 className="text-5xl font-bold text-white" >{training[0].Nev}</h1>
            <p className="py-6  text-2xl font-bold text-white text-justify">
            {training[0].Leiras}
              Az időpontfoglaláshoz előzetesen be kell <a href="Login" className="text-2xl font-bold text-black">jelentkezned!</a>
            </p>
            <Link to="/load" state={{ name: training[0].Nev.toUpperCase(), short: training[0].Nev.toLowerCase() }}>
              <button
                className="btn btn-primary hover:bg-black"
                id="load"
                value="/load"
                onClick={(e) => handleButtonClick(e)}
              >
                Foglalás
              </button>
            </Link>
          </div>
        </div>
      </div> : <></>}{ training.length !== 0 ?
      <div className="hero max-h-screen bg-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            id="responsive"
            src={training[1].KepUrl}
            className="max-w-lg rounded-lg shadow-2xl border-8 border-red-600"
          />
          <div>
            <h1 className="text-5xl font-bold text-white">{training[1].Nev}</h1>
            <p className="py-6 text-2xl font-bold text-white text-justify">
            {training[1].Leiras}
              Az időpontfoglaláshoz előzetesen be kell <a href="Login" className="text-2xl font-bold text-red-600">jelentkezned!</a>
            </p>
            <Link to="/load" state={{ name: training[0].Nev.toUpperCase(), short:  training[0].Nev.toLowerCase() }}>
              <button
                className="btn btn-primary hover:bg-red-600"
                id="load"
                value="/load"
                onClick={(e) => handleButtonClick(e)}
              >
                Foglalás
              </button>
            </Link>
          </div>
        </div>
      </div>: <></>}{ training.length !== 0 ?
      <div className="hero max-h-screen bg-red-600">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={training[2].KepUrl}
            className="max-w-lg rounded-lg shadow-2xl border-8 border-black"
          />
          <div>
            <h1 className="text-5xl font-bold text-white">{training[2].Nev}</h1>
            <p className="py-6 text-5xl font-bold text-white text-justify">
            {training[2].Leiras}
              Az időpontfoglaláshoz előzetesen be kell <a href="Login" className="text-2xl font-bold text-black">jelentkezned!</a>
            </p>
            <Link to="/load" state={{ name: training[0].Nev.toUpperCase(), short: training[0].Nev.toLowerCase() }}>
              <button
                className="btn btn-primary hover:bg-black"
                id="load"
                value="/load"
                onClick={(e) => handleButtonClick(e)}
              >
                Foglalás
              </button>
            </Link>
          </div>
        </div>
      </div>: <></>}
      <div className="bg-black">
        <Link to="/">
          <button
            className="bg-blue-600 hover:bg-red-500 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline items-center"
            type="button"
          >
            Vissza a főoldalra
          </button>
        </Link>
      </div>
    </div>

  );
}

export default Training;
