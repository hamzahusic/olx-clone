import { useState } from "react";
import Article from "../../components/Article";
import Filters from "../../components/Header/Filters";
import UserLayout from "../../components/Layouts/UserLayout";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchArticles = () => {
    const image = "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    const [result,setResult] = useState(true);
    const [openFilter,setFilter] = useState(false);
    const [openSort,setSort] = useState(false);

    const user = useSelector(state => state.isLogged,shallowEqual);
    

    return ( 
        <UserLayout>
            <Filters/>
            {!result && 
                <div className="bg-yellow-100 text-center py-32 text-[#002f34] text-3xl">
                    UPSSS! NO RESULTS
                </div>
            }
            {result && 
            <div>
                <div className="flex justify-between px-4 pt-5 bg-[#f1f4f5] items-center">
                    <p className="font-semibold">248.928 REZULTATA</p>
                    <div className="flex gap-4">
                        <div className="relative">
                            <button onClick={() => setFilter(!openFilter)} className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#002f34]">
                            <span className="mr-2">Filteri</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                            </button>
                            <div id="dropdown-menu" className={`${openFilter ? 'block' : 'hidden'} absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-3  z-10 min-w-[300px]`}>
                                <p className="text-sm mb-2">Stanje oglasa</p>
                                <div className="flex gap-2 text-sm">
                                    <button className="bg-gray-100 py-3 rounded-md w-full">Novo</button>
                                    <button className="bg-gray-100 py-3 rounded-md w-full">Korišteno</button>
                                </div>
                                <p className="text-sm mb-2 mt-2">Datum objave</p>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <button className="bg-gray-100 py-3 rounded-md w-full">Sve</button>
                                    <button className="bg-gray-100 py-3 rounded-md w-full">Zadnja 24h</button>
                                    <button className="bg-gray-100 py-3 rounded-md w-full">Zadnjih 7 dana</button>
                                    <button className="bg-gray-100 py-3 rounded-md w-full">Zadnji mjesec</button>
                                </div>
                                <div className="flex flex-col gap-7 py-5 px-2 text-sm">
                                    <div className="flex items-center gap-3">
                                        <input type="checkbox" name="dostupnoOdmah" id="dostupnoOdmah" />
                                        <label htmlFor="dostupnoOdmah"> Oglas je dostupan odmah</label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <input type="checkbox" name="cijena" id="cijena" />
                                        <label htmlFor="cijena"> Sa unesenom cijenom</label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <input type="checkbox" name="olxShop" id="olxShop" />
                                        <label htmlFor="olxShop"> Samo iz OLX shop-a</label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <input type="checkbox" name="akcija" id="akcija" />
                                        <label htmlFor="akcija"> Akcijske Ponude</label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <input type="checkbox" name="izdvojeni" id="izdvojeni" />
                                        <label htmlFor="izdvojeni"> Samo izdvojeni</label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <input type="checkbox" name="olxdostava" id="olxdostava" />
                                        <label htmlFor="olxdostava"> OLX brza dostava</label>
                                    </div>              
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <button onClick={() => setSort(!openSort)} className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#002f34]">
                            <span className="mr-2">Sortiraj</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                            </button>
                            <div className={`${openSort ? 'block' : 'hidden'} absolute right-0 mt-2 text-sm rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-3  z-10 min-w-[300px] grid grid-cols-2 gap-3`}>
                                <button className="bg-gray-100 py-3 rounded-md">Najjeftiniji</button>
                                <button className="bg-gray-100 py-3 rounded-md">Najsljuplii</button>
                                <button className="bg-gray-100 py-3 rounded-md">Najstariji</button>
                                <button className="bg-gray-100 py-3 rounded-md">Najnoviji</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 bg-[#f1f4f5] grid grid-cols-[repeat(auto-fill,minmax(233px,1fr))] gap-4">
                    <Article id={1} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article id={2} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article id={3} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article id={4} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                </div>
            </div>
            }
        </UserLayout>
     );
}
 
export default SearchArticles;