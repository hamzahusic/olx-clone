import logo from "../../assets/logoOLX.svg"
import oglasiIcon from '../../assets/listOglasi.svg'
import searchIcon from '../../assets/search.svg'
import objaviIcon from '../../assets/objavi.svg'
import messagesIcon from '../../assets/big-speech-balloon.svg'
import creditsIcon from '../../assets/olxcredit.svg'
import whiteProfile from "../../assets/white-olx.svg"
import menuIcon from '../../assets/menu.svg'
import closeBtn from '../../assets/close.svg'
import olxShopIcon from '../../assets/menuimg/olx_shop.svg'
import megaphoneIcon from '../../assets/menuimg/megaphone.svg'
import allArticleIcon from '../../assets/menuimg/all-articles.svg'
import errorIcon from '../../assets/menuimg/error-new.svg'
import hiddenIcon from '../../assets/menuimg/hide-new.svg'
import refreshIcon from '../../assets/menuimg/refresh.svg'
import expiredIcon from '../../assets/menuimg/expired.png'
import deliveryTruckIcon from '../../assets/menuimg/delivery-truck-new.svg'
import userIcon from '../../assets/menuimg/user.svg'
import searchSmallIcon from '../../assets/menuimg/search-new.svg'
import lifeGuardIcon from '../../assets/menuimg/lifeguard-float.svg'
import olxProIcon from '../../assets/menuimg/logo-pro.svg'
import chartIcon from '../../assets/menuimg/profit-chart.svg'
import blockedIcon from '../../assets/menuimg/blocked.svg'
import settingsIcon from '../../assets/menuimg/settings2.svg'
import logoutIcon from '../../assets/menuimg/logout.svg'
import ostaloIcon from '../../assets/ostalo_icon.svg'

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopUp from "../PopUp"

const Navbar = () => {

    const navigate = useNavigate();
    const [menu,setMenu] = useState(false);
    const [inputValue,setInputValue] = useState(null);
    const [objavaPopUp,setObjavaPopUp] = useState(false);
    const [user,setUser] = useState(true);


    const searchArticle = (e) => {
        e.preventDefault();

        navigate(`/search/${inputValue}`,{replace:true})
        console.log("POKRENUTO")
    }

    return ( 
        <nav className="p-5 bg-white/95 sticky top-0 z-[999]">
            <div className="flex justify-between items-center">
                <div className="flex gap-5 text-sm items-center font-semibold">
                    <Link to="/"><img src={logo} alt="" width={71}/></Link>
                    <Link to="/">Početna</Link>
                    <Link to="/">Kategorije</Link>
                    <Link to="/">Shopovi</Link>
                    <Link to="/">Marketing</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">Objavi oglas</Link>
                </div>
                <div>
                    {!user && 
                        <div className=" font-[600] flex">
                            <Link to="/login" className="border-r-[1px] border-[#929a9b] pr-2" >Prijavi se</Link>
                            <Link to="/register" className="pl-2">Registracija</Link>
                        </div>
                    }
                    {user && 
                        <div className="flex gap-5 items-center text-sm font-semibold">
                            <Link to="/profile/my/active" className="flex gap-2 items-center border-r-[1px] pr-3 border-[#002f34]"><img src={oglasiIcon} width={15}/> Moji oglasi</Link>
                            <Link to="/" className="border-r-[1px] pr-3 border-[#002f34]"><img src={messagesIcon} width={20}/></Link>
                            <Link to="/" className="flex gap-2 items-center border-r-[1px] pr-3 border-[#002f34]"><img src={creditsIcon} width={20}/><span className="bg-yellow-100 px-2 rounded">13</span></Link>
                            <Link to="/profile/my/active" className="flex gap-3 items-center text-base"><div className=" w-10 h-10 rounded-full overflow-hidden"><img src={whiteProfile} className="bg-gray-800 w-full h-full object-fit p-1"/></div>Haze347</Link>
                            <button onClick={() => setMenu(true)}><img src={menuIcon}/></button>
                        </div>
                    }
                </div>
            </div>
            <div className="flex gap-4 mt-4 justify-between" >
                <form className="flex items-center shadow-sm bg-white px-4 py-3 rounded border-[1px] border-gray-300 w-full" onSubmit={searchArticle}>
                    <img src={searchIcon} className="pr-5"/>
                    <input type="search" placeholder="Pretraga" className="placeholder:text-gray-600 outline-none w-full" onChange={(e) => setInputValue(e.target.value)}/>
                </form>
                <button className="bg-[#002f34] text-white flex items-center justify-center px-14 py-3 rounded gap-1" onClick={() => setObjavaPopUp(true)}>
                    <img src={objaviIcon} width={17}/>
                    <span className="min-w-[100%]">Objavi oglas</span>
                </button>
                <PopUp title={"Objavite oglas"} isOpen={objavaPopUp} onClose={() => setObjavaPopUp(false)}>
                    <div>
                        <div className="grid grid-cols-2 gap-3 p-5 font-semibold">
                            <Link to={'/publish/article/cars'} className="border-[1px] border-[#002f34] rounded-md p-3 text-center">Automobili</Link>
                            <Link to={'/publish/article/realestate'} className="border-[1px] border-[#002f34] rounded-md p-3 text-center">Nekretnina</Link>
                            <Link to={'/publish/article/jobs'} className="border-[1px] border-[#002f34] rounded-md p-3 text-center">Posao</Link>
                            <Link to={'/publish/article/electronics'} className="border-[1px] border-[#002f34] rounded-md p-3 text-center" >Tehnika</Link>
                        </div>
                        <div className="p-5 w-full flex flex-col gap-4 border-t-[1px] border-gray-100">
                            <Link to={"/"}  className=" font-semibold flex gap-5 items-center">
                                <div className=" rounded-full p-3 shadow-md">
                                    <img src={ostaloIcon} className="max-w-[30px]"/>
                                </div>
                                Objavite nešto drugo
                            </Link>
                            
                            <div className="bg-gray-100 rounded-md p-4">
                                <p className="mb-4 text-lg txt-color font-semibold">Preostali broj oglasa</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between">
                                        <p>Automobili</p>
                                        <p className="font-semibold">0 od 3</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Nekretnine</p>
                                        <p className="font-semibold">0 od 2</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Ostalo</p>
                                        <p className="font-semibold">0 od 35</p>
                                    </div>
                                </div>
                            </div>

                            <Link to={"/"} className="block w-full text-center bgp text-white py-3 text-base rounded">Postani OLX pro</Link>
                        </div>
                    </div>
                </PopUp>
            </div>
            {user && menu && <div className="fixed shadow-xl bg-white top-0 right-0 bottom-0 z-[9999] w-full md:max-w-[350px] transition-width duration-500 animate-width overflow-y-scroll no-scrollbar ">
                     <div className="flex items-center justify-between mb-5 p-3">
                        <p className=" text-xl font-bold">Moj OLX</p>
                        <button onClick={() => setMenu(false)}><img src={closeBtn} width={15}/></button>
                    </div>
                    <Link to={'/'} className="flex justify-between items-center p-4 bg-yellow-100 rounded m-3">
                        <div className="flex gap-2 items-center font-semibold">
                            <img src={creditsIcon} width={20} />
                            <p>OLX KREDIT</p>
                        </div>
                        <span className="bg-yellow-200 px-2 rounded">13</span>
                    </Link>
                    <Link to={'/'} className="menu-link"> <img src={olxShopIcon} width={20}/> Postani OLX Shop</Link>
                    {/*LINKS*/}
                    <p className=" text-xs px-4 py-2 bg-gray-100 font-semibold">MOJI OGLASI</p>
                    <Link to={'/profile/my/active'} className="menu-link"> <img src={megaphoneIcon} width={20}/> Aktivni oglasi</Link>
                    <Link to={'/profile/my/closed'} className="menu-link"> <img src={allArticleIcon} width={20}/> Završeni oglasi</Link>
                    <Link to={'/'} className="menu-link"> <img src={errorIcon} width={20}/> Neaktivni oglasi</Link>
                    <Link to={'/'} className="menu-link"> <img src={hiddenIcon} width={20}/> Skriveni oglasi</Link>
                    <Link to={'/'} className="menu-link"> <img src={expiredIcon} width={20}/> Istekli oglasi</Link>
                    <Link to={'/'} className="menu-link"> <img src={refreshIcon} width={20}/> Obnovljivi oglasi</Link>
                    <Link to={'/'} className="menu-link"> <img src={megaphoneIcon} width={20}/> Promocije</Link>
                    <Link to={'/'} className="menu-link"> <img src={deliveryTruckIcon} width={20}/> Narudžbe</Link>
                    {/*LINKS*/}
                    <p className=" text-xs px-4 py-2 bg-gray-100 font-semibold">SPAŠENI</p>
                    <Link to={'/'} className="menu-link"> <img src={allArticleIcon} width={20}/> Spašeni oglasi</Link>
                    <Link to={'/profile/my/closed'} className="menu-link"> <img src={userIcon} width={20}/> Završeni oglasi</Link>
                    <Link to={'/'} className="menu-link"> <img src={searchSmallIcon} width={20}/> Neaktivni oglasi</Link>
                    {/*LINKS*/}
                    <p className=" text-xs px-4 py-2 bg-gray-100 font-semibold">OSTALI LINKOVI</p>
                    <Link to={'/'} className="menu-link"> <img src={olxShopIcon} width={20}/> OLX Shopovi</Link>
                    <Link to={'/'} className="menu-link"> <img src={lifeGuardIcon} width={20}/> Podrška korisnicima</Link>
                    <Link to={'/'} className="menu-link"> <img src={olxProIcon} width={20}/> Aktiviraj OLX</Link>
                    <Link to={'/'} className="menu-link"> <img src={chartIcon} width={20}/> Marketing</Link>
                    <Link to={'/'} className="menu-link"> <img src={blockedIcon} width={20}/> Blokirani korisnici</Link>
                    <Link to={'/'} className="menu-link"> <img src={settingsIcon} width={20}/> Postavke</Link>
                    <Link to={'/'} className="menu-link"> <img src={logoutIcon} width={20}/> Odjava</Link>

            </div>}
        </nav>
     );
}
 
export default Navbar;