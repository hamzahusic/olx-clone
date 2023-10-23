import logo from "../../assets/logoOLX.svg"
import oglasiIcon from '../../assets/listOglasi.svg'
import searchIcon from '../../assets/search.svg'
import objaviIcon from '../../assets/objavi.svg'
import messagesIcon from '../../assets/big-speech-balloon.svg'
import creditsIcon from '../../assets/olxcredit.svg'
import whiteProfile from "../../assets/white-olx.svg"
import menuIcon from '../../assets/menu.svg'
import closeBtn from '../../assets/close.svg'

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [menu,setMenu] = useState(false);
    const [inputValue,setInputValue] = useState(null);
     
    const [user,setUser] = useState(true);


    const searchArticle = (e) => {
        e.preventDefault();

        navigate(`/search/${inputValue}`,{replace:true})
        console.log("POKRENUTO")
    }

    return ( 
        <nav className="p-5 bg-white">
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
                            <Link to="/" className="flex gap-2 items-center border-r-[1px] pr-3 border-[#002f34]"><img src={oglasiIcon} width={15}/> Moji oglasi</Link>
                            <Link to="/" className="border-r-[1px] pr-3 border-[#002f34]"><img src={messagesIcon} width={20}/></Link>
                            <Link to="/" className="flex gap-2 items-center border-r-[1px] pr-3 border-[#002f34]"><img src={creditsIcon} width={20}/><span className="bg-yellow-100 px-2 rounded">13</span></Link>
                            <Link to="/" className="flex gap-3 items-center text-base"><div className=" w-10 h-10 rounded-full overflow-hidden"><img src={whiteProfile} className="bg-gray-800 w-full h-full object-fit p-1"/></div>Haze347</Link>
                            <button onClick={() => setMenu(true)}><img src={menuIcon}/></button>
                        </div>
                    }
                </div>
            </div>
            <div className="flex gap-4 mt-4 justify-between" >
                <form className="flex items-center shadow-md bg-white p-3 rounded border-[0.5px] border-[#002f34] w-full" onSubmit={searchArticle}>
                    <img src={searchIcon} className="pr-5"/>
                    <input type="text" placeholder="Pretraga" className=" outline-none w-full" onChange={(e) => setInputValue(e.target.value)}/>
                </form>
                <button className="bg-[#002f34] text-white flex items-center justify-center px-14 py-3 rounded gap-1">
                    <img src={objaviIcon} width={17}/>
                    <span className="min-w-[100%]">Objavi oglas</span>
                </button>
            </div>
            {user && menu && <div className="fixed shadow-xl bg-white top-0 right-0 bottom-0 z-[9999] p-5 w-full md:max-w-[350px] transition-width duration-500 animate-width">
                     <div className="flex items-center justify-between mb-5">
                        <p className=" text-xl font-bold">Moj OLX</p>
                        <button onClick={() => setMenu(false)}><img src={closeBtn} width={15}/></button>
                    </div>
                    <p>LINK</p>
                    
            </div>}
        </nav>
     );
}
 
export default Navbar;