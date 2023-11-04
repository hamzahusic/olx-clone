import UserLayout from "../../components/Layouts/UserLayout";
import Categories from "../../components/Header/Categories"
import categoriesImg from '../../assets/categories.svg'
import Article from "../../components/Article";
import olxShopIcon from '../../assets/olxshopnew.svg'
import olxCatIcon from '../../assets/more-listing.svg'
import { Link } from "react-router-dom";
import { useState } from "react";
import PopUp from "../../components/PopUp";

const UserPage = () => {
    const image = "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
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
                
                <div className="grid grid-cols-[repeat(auto-fill,minmax(233px,1fr))] justify-center gap-4">
                    <Article id={1} image={image} separate={true} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article id={2} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article id={3} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article id={4} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article id={5} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                </div>
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