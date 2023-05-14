
import { useState, useEffect } from "react";

const GuestData = (props) => {
  const [selectedIdopont, setSelectedIdopont] = useState("");
  const [userData]=useState(props.id,props.nev);
  

  const handleIdopontTorles = () => {
    setSelectedIdopont("");
    
  };

  useEffect(() => {
    const fetchFoglalas = async () => {
      if (selectedIdopont) {
        const response = await fetch(`/api/foglalas?idopont=${selectedIdopont}`);
        const data = await response.json();
        userData();
      }
    };
    fetchFoglalas();
  }, [selectedIdopont]);


  return (
    <div>
      <div className="hero max-h-screen bg-red-600">
        <div className="hero-content flex-col">
          <div className="w-full max-w bg-white border border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-8 pt-4"></div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-50 h-50 mb-3 rounded-full shadow-lg"
                src={props.kep}
                alt={props.nev}
              />
              <p></p>
              <h2 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                Üdvözlöm {props.nev}!
              </h2>
              <h2 className="text-2xl font-bold">Az Ön adatai:</h2>
              <p>Cím: {props.cim}</p>
              <p>Email: {props.email}</p>
              <p>Mobil: {props.mobil}</p>
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
                  {props.orak.map((ora) => (
                    <option
                      className="text-xl font-bold"
                      key={ora.id}
                      value={ora.idopont}
                    >
                      {ora.idopont}
                    </option>
                  ))}
                </select>
                {selectedIdopont && (
                  <>
                    <p></p>
                    <ul className="bg-white border-black border mt-2 rounded-lg p-2 text-xl font-bold">
                      {props.orak.map((foglalt) =>
                        foglalt.idopont === selectedIdopont ? (
                          <div>
                            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                              <div className="flex items-center justify-between mb-4"></div>
                              <div className="flow-root">
                                <ul
                                  role="list"
                                  className="divide-y divide-gray-200 dark:divide-gray-700"
                                >
                                  <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                      <div className="flex-shrink-0">
                                        <img
                                          className="w-20 h-20 rounded-full"
                                          key={foglalt.id}
                                          src={foglalt.kep}
                                          alt={foglalt.oktatonev}
                                        />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="text-lg font-bold text-gray-900 dark:text-white truncate">
                                          Oktató: {foglalt.oktatonev}
                                        </p>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                          Foglalkozás:{foglalt.nev}
                                        </p>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                          Mobil: {foglalt.cim}
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="flex flex-col items-end">
                                <button
                                  className="btn bg-black hover:bg-red-600"
                                  onClick={handleIdopontTorles}
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
    </div>
  );
};

export default GuestData;
          
          
          
          
          