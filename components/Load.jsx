import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Load() {
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const data = location.state;

  let formObj = {
    oraId: 0,
    userId: 3
  };

  const [formData, setFormData] = useState(formObj);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };
  const handleButtonClick = (adat) => {
    
    fetch('http://localhost:80/api/fitness/signUp',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)
        })
        .then(res=>res.json())
        .catch(error=>console.error(adat));

  }
  const datas = {
    email: "admin@admin.hu",
    move: data.name,
  };

  const [trainer, setTrainer] = useState([]);
  const [activity, setActivity] = useState([]);
  const [page] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:80/api/fitness/trainers`)
      .then((res) => res.json())
      .then((trainer) => setTrainer(trainer))
      .catch((err) => alert(err));
  }, []);

  const getActivity = (trainerId) => {
    fetch(`http://localhost:80/api/fitness/trainerProfile/${trainerId}`)
      .then((res) => res.json())
      .then((active => setActivity(active)))
      .catch((err) => alert(err));
  };

  return (
    <div className="bg-red-600 p-6 shadow-2xl">
      <h2 className="text-4xl font-bold mb-4 text-center">
        JELENTKEZÉS {datas.move} FOGLALKOZÁSRA
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 justify-items-center m-5">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <p className="text-2xl font-bold mb-4 text-center">Edző</p>
                {trainer.length !== 0 ? (
                  <select
                    onChange={(e) => getActivity(e.target.value)}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      Válasszon edzőt!
                    </option>
                    {trainer.map((trainer, i) => (
                      <option key={i} value={trainer.Id}>
                        {trainer.Nev}
                      </option>
                    ))}
                  </select>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <p></p>
            <div className="grid grid-cols-1 justify-items-center m-5">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <p className="text-2xl font-bold mb-4 text-center">Órarend</p>
                {activity.length !== 0 ? (
                <select id="oraId"
                  onChange={(e) => setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option id="oraId" disabled selected>
                    Válasszon az időpontok közül!
                  </option>
                  {activity.Orak.map((ora, i) => (
                    <option id="oraId" key={i} value={ora.Id}>
                      {ora.Nev} {ora.HetNap} {ora.Kezdes}
                    </option>
                  ))}
                </select>): (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn-center"
            type="submit"
            onClick={()=>handleButtonClick(formData)}
          >
            Jelentkezés
          </button>
          {success && (
            <p className="text-black text-center text-xl mt-4">
              Sikeres jelentkezés!
            </p>
          )}
          <Link to="/training">
            <button
              className="bg-red-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center"
              type="button"
            >
              Mégse
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Load;
