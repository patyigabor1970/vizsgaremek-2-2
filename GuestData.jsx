import { useState, useEffect } from "react";
import Weekday from "./Weekday";
import UserContext from "./context/UserContext";

const GuestData = (props) => {
  const [selectedIdopont, setSelectedIdopont] = useState("");
  const [userData] = useState(props.id, props.nev);
  const [profile, setProfile] = useState([]);
  const [success, setSuccess] = useState();
  let formObj = {
    id: 0,
  };

  const [formData, setFormData] = useState(formObj);
  const [refresh, setRefresh] = useState(false);
  const update = () => {
    setRefresh((prev) => !prev);
  };
  let id = 7;
  const handleIdopontTorles = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    kuldes(formData);
    if (success) {
      setSelectedIdopont("");
      setSuccess(false);
      update();
    }
  };
  useEffect(() => {
    fetch(`http://localhost:80/api/fitness/guestProfile/${id}`)
      .then((result) => result.json())
      .then((adatok) => setProfile(adatok));
  }, [refresh]);

  const kuldes = (adat) => {
    fetch("http://localhost:80/api/fitness/guestRescind", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(adat),
    })
      .then((res) => res.json())
      .then((result) => setSuccess(result))
      .catch((error) => alert(error));
  };
  /*useEffect(() => {
    const fetchFoglalas = async () => {
      if (selectedIdopont) {
        const response = await fetch(`/api/foglalas?idopont=${selectedIdopont}`);
        const data = await response.json();
        userData();
      }
    };
    fetchFoglalas();
  }, [selectedIdopont]);*/

  return (
    <div>
      {profile.length !== 0 ? (
        <div className="hero max-h-screen bg-red-600">
          <div className="hero-content flex-col">
            <div>
              <img
                src="src/images/vendegeknek.jpg"
                className="max-w-lg rounded-lg shadow-2xl border-8 border-black"
              />
            </div>
            <div className="w-full max-w bg-white border border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-8 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <p></p>
                <h2 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                  Üdvözlöm {profile.Nev}!
                </h2>
                <h2 className="text-2xl font-bold">Az Ön adatai:</h2>
                <p>Email: {profile.Email}</p>
                <p>Mobil: {profile.Telefonszam}</p>
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
                    {profile.Orak.map((ora, i) => (
                      <option
                        className="text-xl font-bold"
                        key={i}
                        value={ora.HetNap + ora.Kezdes}
                      >
                        <Weekday day={ora.HetNap} /> {ora.Kezdes}
                      </option>
                    ))}
                  </select>
                  {selectedIdopont && (
                    <>
                      <p></p>
                      <ul className="bg-white border-black border mt-2 rounded-lg p-2 text-xl font-bold">
                        {profile.Orak.map((foglalt, i) =>
                          foglalt.HetNap + foglalt.Kezdes ===
                          selectedIdopont ? (
                            <div key={i}>
                              <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex items-center justify-between mb-4"></div>
                                <div className="flow-root">
                                  <ul
                                    role="list"
                                    className="divide-y divide-gray-200 dark:divide-gray-700"
                                  >
                                    <li className="py-3 sm:py-4">
                                      <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0"></div>
                                        <div className="flex-1 min-w-0">
                                          <p className="text-lg font-bold text-gray-900 dark:text-white truncate">
                                            Oktató: {foglalt.Oktatonev}
                                          </p>
                                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Foglalkozás: {foglalt.Nev}
                                          </p>
                                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Terem: {foglalt.Lokacio}{" "}
                                            {foglalt.Cim}
                                          </p>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="flex flex-col items-end">
                                  <button
                                    className="btn bg-black hover:bg-red-600"
                                    id="id"
                                    value={foglalt.rId}
                                    onClick={(e) => handleIdopontTorles(e)}
                                  >
                                    Időpont törlése
                                  </button>
                                </div>{" "}
                              </div>
                            </div>
                          ) : null
                        )}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GuestData;
