import UserLayout from "../../components/Layouts/UserLayout";
import Categories from "../../components/Header/Categories"
import categoriesImg from '../../assets/categories.svg'
import Article from "../../components/Article";
import olxShopIcon from '../../assets/olxshopnew.svg'
import olxCatIcon from '../../assets/more-listing.svg'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PopUp from "../../components/PopUp";
import ClipLoader from "react-spinners/ClipLoader";

const UserPage = () => {
    const image = "https://images.unsplash.com/photo-1593198805047-b97ea2348680?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const [isPopUpOpen,setPopUp] = useState(false);
    const [allCategories,setAllCategories] = useState([
        "Vozila",
"Moj dom",
"Nekretnine",
"Dijelovi i oprema za vozila",
"Biznis i Industrija",
"Kompjuteri",
"Servisi i usluge",
"Tehnika",
"Mobilni uređaji",
"Odjeća i obuća",
"Sportska oprema",
"Ljepota i Zdravlje",
"Sve ostalo",
"Životinje",
"Nakit i Satovi",
"Igre i igračke",
"Video igre",
"Poslovi",
"Hrana i piće",
"Muzička oprema"
    ])
    const [loading,setLoading] = useState(true)
    const [allArticleData,setAllArticleData] = useState([])
    const [numberOfItemsPerPage,setNumberOfItemsPerPage] = useState(100)

    const handleAllArticles = async (articleNumber) => {
        setLoading(true)
        try {
            const response = await fetch(`http://localhost:8080/api/get/all/article/${articleNumber}`)
    
            if(!response.ok)
                throw Error("Error getting all articles")
            
            const data = await response.json()
            const allItems = await data;

            setAllArticleData(allItems)
            setLoading(false)
            console.log(allItems)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleAllArticles(numberOfItemsPerPage)
    },[numberOfItemsPerPage])

    return ( 
        <UserLayout>
            <Categories/>
            <div className="p-4 bg-[#f1f4f5]">
                <div className="flex items-center justify-between pt-3 pb-7">
                    <h2 className=" text-[28px]">Izdvojeni oglasi</h2>
                    <button onClick={() => setPopUp(true)} className="flex items-center justify-center text-sm gap-2 border-2 border-[#002f34] px-4 py-3 rounded-md ">
                        <img src={categoriesImg} width={17}/>
                        Filtriraj izdvojene oglase
                    </button>

                    <PopUp title={"Kategorije"} isOpen={isPopUpOpen} onClose={() => setPopUp(false)}>
                        <div className="p-4 flex flex-col">
                            {allCategories.map((categorie,index) => (
                                <Link to='/' className="py-2 px-3 text-gray-600 text-[15px] hover:bg-[#002f34] hover:text-white" key={index}>{categorie}</Link>
                            ))}
                        </div>
                    </PopUp>

                </div>
                
                {!loading && allArticleData && <div className="grid auto-rows-max grid-cols-[repeat(auto-fill,minmax(233px,1fr))] justify-center gap-4">
                        {allArticleData.map((article) => (
                            <Article 
                                key={article.idA}
                                id={article.idA}
                                image={article.Slikas[0].slika_link} 
                                title={article.naslov} 
                                time={new Date(article.datum_promjene).toLocaleDateString()} 
                                price={article.cijena.toLocaleString("de-DE")} 
                                tags={[article.lokacija,article.stanje]} 
                                available={article.dostupno}
                                separate={true}
                                />
                        ))}
                </div>}
                {loading && !allArticleData.length>0 && 
                    <div className="w-full grid place-items-center py-40">
                        <ClipLoader color={"#002f34"} size={45} />               
                    </div>
                }
                <div className="flex items-center justify-center">
                  <button className="txt-color border-2 border-[#002f34] py-3 px-3 rounded-md text-md my-20">Prikaži više oglasa</button>
                </div>
            </div>
            <div className="bg-gray-800 text-white flex items-center justify-center gap-5 py-2 ">
                <img src={olxShopIcon} alt="" />
                <div>
                    <h3 className="pb-4 text-2xl font-semibold">Otvorite OLX shop.</h3>
                    <p className="text-2xl font-light max-w-5xl">Promovišite vaš biznis i maksimizirajte prihode uz minimalan utrošak energije.</p>
                </div>
                <Link to="/" className="bg-white txt-color px-8 py-3 rounded-md">Pogledaj pakete</Link>
            </div>
            <div className="flex justify-center items-start gap-6 bg-[#cbf7ee] py-4">
                <img src={olxCatIcon} alt="" width={134} />
                <div>
                    <p className="max-w-5xl">
                        <span className=" font-medium pr-1">
                         Popularne kategorije:
                        </span>
                        vozila,
                        nekretnine,
                        servisi i usluge,
                        poslovi,
                        mobilni uređaji,
                        kompjuteri,
                        tehnika,
                        biznis i industrija,
                        odjeća i obuća,
                        životinje,
                        literatura,
                        umjetnost,</p>
                </div>
            </div>
        </UserLayout>
     );
}
 
export default UserPage;