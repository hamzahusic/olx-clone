import { useState } from "react";
import { Link } from "react-router-dom";

const Filters = () => {

    const [openCategory,setCategory] = useState(false);
    const [openPrice,setPrice] = useState(false);
    const [openLocation,setLocation] = useState(false);

    return ( 
        <div className="flex items-center px-5 pb-4 pt-2 gap-4">
            <div className="relative">
                <button id="dropdown-button" onClick={() => setCategory(!openCategory)} className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#002f34]">
                <span className="mr-2">Kategorije</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                </button>
                <div id="dropdown-menu" className={`${openCategory ? 'block' : 'hidden'} absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-10 min-w-[300px]`}>
                    <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Kategorija 1</Link>
                    <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Kategorija 2</Link>
                    <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Kategorija 3</Link>
                    <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Kategorija 4</Link>
                </div>
            </div>

            <div className="relative">
                <button id="dropdown-button" onClick={() => setPrice(!openPrice)} className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#002f34]">
                <span className="mr-2">Cijena</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                </button>
                <div className={`${openPrice ? 'block' : 'hidden'} absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-3 z-10 min-w-[300px]`}>
                    <div className="flex gap-2 mb-3">
                        <input type="text" className="bg-gray-100 py-2 px-3 rounded w-full outline-none" placeholder="od"/>
                        <input type="text" className="bg-gray-100 py-2 px-3 rounded w-full outline-none" placeholder="do"/>
                    </div>
                    <button className="py-2 rounded border-2 border-[#002f34] text-sm block w-full">Osvježi rezultate</button>
                </div>
            </div>

            <div className="relative">
                <button id="dropdown-button" onClick={() => setLocation(!openLocation)} className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#002f34]">
                <span className="mr-2">Lokacija</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                </button>
                <div className={`${openLocation ? 'block' : 'hidden'} absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2 space-y-1 z-10 min-w-[300px]`}>
                    <select name="region" className='bg-gray-100 outline-none p-3 rounded-md w-full'>
                        <option value="">Odaberite regiju</option>
                        <option value="tuzlanski kanton">Tuzlanski kanton</option>
                        <option value="kanton sarajevo">Kanton Sarajevo</option>
                    </select>
                </div>
            </div>          
        </div>
     );
}
 
export default Filters;