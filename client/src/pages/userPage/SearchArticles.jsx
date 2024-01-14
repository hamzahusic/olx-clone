import { useEffect, useState } from "react";
import Article from "../../components/Article";
import Filters from "../../components/Header/Filters";
import UserLayout from "../../components/Layouts/UserLayout";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import noResultIcon from "../../assets/search-results.svg"

const SearchArticles = () => {
    
    const [result,setResult] = useState([]);
    const [copyResult,setCopyResult] = useState([]);
    const [openFilter,setFilter] = useState(false);
    const [openSort,setSort] = useState(false);
    const [loading,setLoading] = useState(true)
    
    const { inputValue } = useParams()
    
    const fetchAricles = async () => {
        try {
            console.log(inputValue)
            const response = await fetch(`http://localhost:8080/api/search/`,{
                method : "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body : JSON.stringify({
                    input : inputValue
                })
            })

            if(!response.ok)
                throw Error("Error getting articles")

            const data = await response.json()

            setResult(data)
            setCopyResult(data)
            setLoading(false)
            console.log(data)

        } catch (error) {
            console.error(error.message)
            setLoading(false)
        }
    }

    const handleSort = (type) => {
        setSort(false)
        switch(type){
            case "najjeftiniji" :
                setResult(result.sort((a,b) => {return Number(a.cijena) - Number(b.cijena)}))
            break;
            case "najskuplji" :
                setResult(result.sort((a,b) => {return Number(a.cijena) - Number(b.cijena)}).reverse())
            break;
            case "najstariji" :
                setResult(result.sort((a,b) => {return new Date(a.datum_promjene) - new Date(b.datum_promjene)}))
            break;
            default :
                setResult(result.sort((a,b) => {return new Date(a.datum_promjene) - new Date(b.datum_promjene)}).reverse())
            break;
        }
    }

    const handleFilter = (type) => {
        setFilter(false)
        switch(type){
            case "novo" :
                setResult(result.filter(value => value.stanje == "Novo"))
                break;
            case "koristeno" :
                setResult(result.filter(value => value.stanje == "Korišteno"))
            break;
            case "sve" : 
                setResult(result)
            break;
            case "24h" :
                setResult(result.filter(value => {new Date().getTime()-(24*60*60*1000) <= new Date(value.datum_promjene).getTime()}))
            break;
            case "7d" :
                setResult(result.filter(value => new Date().getTime()-(7*24*60*60*1000) <= new Date(value.datum_promjene).getTime()))
            break;
            case "1m" :
                setResult(result.filter(value => new Date().getTime()-(30*24*60*60*1000) <= new Date(value.datum_promjene).getTime()))
            break;
            case "dostupnoOdmah" : 
                setResult(result.filter(value => value.dostupno === true))
            break;
            default :
                setResult(result.filter(value => value.cijena != 0))
            break;
            }
        console.log(result)
    }

    useEffect(() => {
        fetchAricles()
    },[inputValue])

    return ( 
        <UserLayout>
            <Filters/>
            {!result.length > 0 && loading && 
                <div className="w-full grid place-items-center py-56">
                    <ClipLoader color={"#002f34"} size={45}/>
                </div>
            }       
            <div>
                <div className="flex justify-between px-4 pt-5 bg-[#f1f4f5] items-center">
                    <p className="font-semibold">{result.length} {result.length == 1 ? "REZULTAT" : "REZULTATA"}</p>
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
                                    <button className="bg-gray-100 py-3 rounded-md w-full" onClick={() => handleFilter("novo")}>Novo</button>
                                    <button className="bg-gray-100 py-3 rounded-md w-full" onClick={() => handleFilter("koristeno")}>Korišteno</button>
                                </div>
                                <p className="text-sm mb-2 mt-2">Datum objave</p>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <button className="bg-gray-100 py-3 rounded-md w-full" onClick={() => handleFilter("sve")}>Sve</button>
                                    <button className="bg-gray-100 py-3 rounded-md w-full" onClick={() => handleFilter("24h")}>Zadnja 24h</button>
                                    <button className="bg-gray-100 py-3 rounded-md w-full" onClick={() => handleFilter("7d")}>Zadnjih 7 dana</button>
                                    <button className="bg-gray-100 py-3 rounded-md w-full" onClick={() => handleFilter("1m")}>Zadnji mjesec</button>
                                </div>
                                <div className="flex flex-col gap-7 py-5 px-2 text-sm">
                                    <div className="flex items-center gap-3 select-none">
                                        <input type="checkbox" name="dostupnoOdmah" id="dostupnoOdmah" 
                                            onClick={() => {
                                                if(document.getElementById("dostupnoOdmah").checked) 
                                                    handleFilter("dostupnoOdmah")
                                            }}/>
                                        <label htmlFor="dostupnoOdmah"> Oglas je dostupan odmah</label>
                                    </div>
                                    <div className="flex items-center gap-3 select-none">
                                        <input type="checkbox" name="cijena" id="cijena" 
                                            onClick={() => {
                                                if(document.getElementById("cijena").checked) 
                                                    handleFilter("cijena")
                                            }}/>
                                        <label htmlFor="cijena"> Sa unesenom cijenom</label>
                                    </div>          
                                </div>
                                <button 
                                    className="bg-[var(--pcolor)] text-center w-full text-white py-2 rounded"
                                    onClick={() => {
                                        setResult(copyResult);setFilter(false)
                                        document.getElementById("cijena").checked = false
                                        document.getElementById("dostupnoOdmah").checked = false
                                    }}>
                                    Reset filters
                                </button>
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
                                <button className="bg-gray-100 py-3 rounded-md" onClick={() => handleSort("najjeftiniji")}>Najjeftiniji</button>
                                <button className="bg-gray-100 py-3 rounded-md" onClick={() => handleSort("najskuplji")}>Najsljuplji</button>
                                <button className="bg-gray-100 py-3 rounded-md" onClick={() => handleSort("najstariji")}>Najstariji</button>
                                <button className="bg-gray-100 py-3 rounded-md" onClick={() => handleSort("najnoviji")}>Najnoviji</button>
                            </div>
                        </div>
                    </div>
                </div>
                {!result.length > 0 && !loading && 
                <div className="grid place-items-center py-28 text-[#002f34] bg-[#f1f4f5] text-xl gap-4">
                    <img src={noResultIcon} alt="" className="max-w-[80px] max-h-[80px]"/>
                    <p>Nema rezultata za traženi pojam</p>
                </div>
                }
                {result.length > 0 && !loading && 
                <div className="p-5 bg-[#f1f4f5] grid grid-cols-[repeat(auto-fill,minmax(233px,1fr))] gap-4">
                        {result.map((article) => (
                                <Article 
                                    key={article.idA}
                                    id={article.idA}
                                    image={article.Slikas[0].slika_link} 
                                    title={article.naslov} 
                                    time={new Date(article.datum_promjene).toLocaleDateString("de-DE")} 
                                    price={article.cijena.toLocaleString("de-DE")} 
                                    tags={[article.lokacija,article.stanje]} 
                                    available={article.dostupno}/>
                            ))}
                </div>}
            </div>
            
        </UserLayout>
     );
}
 
export default SearchArticles;