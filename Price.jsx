import { Link } from "react-router-dom";
import "./PriceStyle.css";

function Price() {
  return (
    <div>
      <div className="bg bg-red-600">
        <h1 id="h1">ÁRAINK</h1>
        <div className="flex flex-col">
          <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-black dark:bg-gray-700 text-white">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        TÍPUS
                      </th>
                      <th scope="col" className="px-6 py-3">
                        LEÍRÁS
                      </th>
                      <th scope="col" className="px-6 py-3">
                        MENNYISÉG
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ÁR
                      </th>
                      <th scope="col" className="px-6 py-3">
                        VÁSÁRLÁS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        1
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        Napijegy
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        Napi egyszeri belépésre jogosít
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div>
                            <input
                              type="number"
                              id="first_product"
                              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="1"
                              required
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        2.000.-
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          KOSÁRBA
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        2
                      </td>

                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        Havi bérlet
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        Érvényesség 1 hónap, napi egyszeri belépésre jogosít
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div>
                            <input
                              type="number"
                              id="first_product"
                              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="1"
                              required
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        14.000.-
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          KOSÁRBA
                        </a>
                      </td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        3
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        Havi korlátlan
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        Érvényesség 1 hónap, napi többszöri belépésre jogosít
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div>
                            <input
                              type="number"
                              id="first_product"
                              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="1"
                              required
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        16.000.-
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          KOSÁRBA
                        </a>
                      </td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        4
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        10 alkalmas bérlet
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        Érvényesség 2 hónap, napi egyszeri belépésre jogosít
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div>
                            <input
                              type="number"
                              id="first_product"
                              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="1"
                              required
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        10.000.-
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          KOSÁRBA
                        </a>
                      </td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        5
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        3 havi diák/nyugdíjas bérlet*
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        Érvényesség 3 hónap, napi egyszeri belépésre jogosít
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div>
                            <input
                              type="number"
                              id="first_product"
                              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="1"
                              required
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        30.000.-
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          KOSÁRBA
                        </a>
                      </td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        6
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        Éves bérlet
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        Érvényesség 1 év, napi egyszeri belépésre jogosít
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div>
                            <input
                              type="number"
                              id="first_product"
                              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="1"
                              required
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        140.000.-
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          KOSÁRBA
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        7
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        Diák/nyugdíjas havi bérlet*
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        Érvényesség 1 hónap, napi egyszeri belépésre jogosít
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div>
                            <input
                              type="number"
                              id="first_product"
                              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="1"
                              required
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        12.000.-
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          KOSÁRBA
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white font-bold text-2xl text-align-center ">
        <ul>
          <li>*</li>
          <li>
            Bérleteink napi egyszeri belépésre jogosítanak fel, maximum 4 óra
            erejéig (kivétel a korlátlan bérlet esetében)
          </li>
          <li>Bérlettel rendelkező vendégeink ingyenes edzéstervet kapnak</li>
          <li>A napjegy kivételével klubkártya megváltása szükséges</li>
          <li>A bérletek évente 1 alkalommal maximum 2 hétig szüneteltethetőek</li>
          <li>Diák bérletet érvényes nappali tagozatos diákkal lehet kiváltani 23 éves kor alatt</li>
          <li>Nyugdíjas bérletet érvényes nyugdíjas igazolvánnyal lehet kiváltani 65 éves kor felett</li>
        </ul>
      </div>
      <div className="bg bg-red-600">
        <Link to="/">
          <button
            className="bg-blue-600 hover:bg-black text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline items-center"
            type="button"
          >
            Vissza a főoldalra
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Price;
