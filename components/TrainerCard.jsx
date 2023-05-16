import React from "react";
import "./TrainerCard.css";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function TrainerCard({ elem }) {
  
  const navigate=useNavigate();

  const handleButtonClick = (e) => {
    navigate(e.target.value);
    }
  
  
  
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={elem.TrainerKepUrl} className="width 100%"></img>
          </div>
          <div className="flip-card-back">
            <h1 className="h1">Name: {elem.Nev}</h1>
            <p className="p">Phone: {elem.Telefonszam}</p>
            <p className="p">
              <small className="p text-[11px]">{elem.Leiras}</small>
            </p>
            <Link to="/training"><button className="btn btn-primary" id="training" value='/training'onClick={(e)=> handleButtonClick(e)}>Tovább a jelentkezéshez</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerCard;
