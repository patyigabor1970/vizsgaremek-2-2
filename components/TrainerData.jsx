import React, { useState, useEffect } from "react";

function TrainerData(props) {
  const [selectedIdopont, setSelectedIdopont] = useState(null);
  const [profile, setProfile] = useState([]);
  let id = 1;

  useEffect(() => {
    fetch(`http://localhost:80/api/fitness/trainerProfile/${id}`)
      .then((result) => result.json())
      .then((adatok) => setProfile(adatok));
  }, []);

  return (

    <div>{ profile.length !== 0 ?
      <div className="hero max-h-screen bg-red-600 max-height-80vh overflow-y-auto">
        <div className="hero-content flex-col">
          <div className="w-full max-w bg-white border border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-8 pt-4"></div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-50 h-50 mb-3 rounded-full shadow-lg"
                src={profile.TrainerKepUrl}
                alt={profile.Nev}
              />
              <p></p>
              <h2 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                Üdvözlöm {profile.Nev}!
              </h2>
              <h2 className="text-2xl font-bold">Az Ön adatai:</h2>
              <p className="font-bold">Sportág:</p> <ul>
                {profile.Mozgasformak.map((mozgas,i)=><li key={i}>{mozgas.Nev}</li>)}
                </ul>
              <p><span className="font-bold">Email:</span> {profile.Email}</p>
              <p><span className="font-bold">Mobil:</span> {profile.Telefonszam}</p>
              <div>
                <p className="text-xl text-center font-bold">Az Ön órái:</p>
                <select
                  className="bg-gray-50 text-xl font-bold border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 
        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectedIdopont}
                  onChange={(e) => setSelectedIdopont(e.target.value)}
                >
                  <option value="" className="text-xl  font-bold">
                    Válasszon időpontot
                  </option>
                  {profile.Orak.map((ora) => (
                    <option
                      className="text-xl font-bold"
                      key={ora.Id}
                      value={ora.HetNap+ora.Kezdes}
                    >
                      {ora.Nev} - {ora.HetNap} {ora.Kezdes}
                    </option>
                  ))}
                </select>
                {selectedIdopont && (
                  <>
                    <p className="text-xl text-center font-bold">Résztvevők:</p>
                    <ul className="bg-white border-black border mt-2 rounded-lg p-2 text-xl font-bold">
                      {profile.Orak
                        .find((ora) => ora.HetNap+ora.Kezdes === selectedIdopont)
                        .Resztvevok.map((resztvevo) => (
                          <div>
                            <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                              <div class="flex items-center justify-between mb-4"></div>
                              <div className="flow-root">
                                <ul
                                  role="list"
                                  className="divide-y divide-gray-200 dark:divide-gray-700"
                                >
                                  <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                      <div className="flex-1 min-w-0">
                                        <p
                                          className="text-sm font-bold text-gray-900 truncate dark:text-white"
                                          
                                        >
                                          Név: {resztvevo.Nev}
                                        </p>
                                        <p
                                          className="text-sm font-medium text-gray-900 truncate dark:text-white"
                                         
                                        >
                                          Email:{resztvevo.Email}
                                        </p>
                                        <p
                                          className="text-sm font-medium text-gray-900 truncate dark:text-white"
                                          
                                        >
                                          Mobil:{resztvevo.Telefonszam}
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>: <></>}
    </div>
  );
}
export default TrainerData;
