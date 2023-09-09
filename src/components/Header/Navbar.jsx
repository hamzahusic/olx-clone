import logo from "../../assets/logoOLX.svg"
import oglasiIcon from '../../assets/listOglasi.svg'
import searchIcon from '../../assets/search.svg'
import objaviIcon from '../../assets/objavi.svg'
import { useState } from "react";
const Navbar = () => {

    const [user,setUser] = useState(false)
    return ( 
        <nav className="p-5 bg-white ">
            <div className="flex justify-between items-center">
                <div className="flex gap-5 text-sm items-center font-semibold">
                    <img src={logo} alt="" width={71}/>
                    <a href="/">Početna</a>
                    <a href="/">Kategorije</a>
                    <a href="/">Shopovi</a>
                    <a href="/">Marketing</a>
                    <a href="/">Blog</a>
                    <a href="/">Objavi oglas</a>
                </div>
                <div>
                    {!user && 
                        <div className=" font-[600] flex">
                            <a href="/" className="border-r-[1px] border-[#929a9b] pr-2">Prijavi se</a>
                            <a href="/" className="pl-2">Registracija</a>
                        </div>
                    }
                    {user && 
                        <div>
                            <a href="/"><img src={oglasiIcon}/> Moji oglasi</a>
                            <a href="/">Registracija</a>
                        </div>
                    }
                </div>
            </div>
            <div>
                <form className="flex gap-4 mt-4 justify-between ">
                    <div className="flex items-center shadow-md bg-white p-3 rounded border-[0.5px] border-[#002f34] w-full">
                        <img src={searchIcon} className="pr-5"/>
                        <input type="text" placeholder="Pretraga" className=" outline-none w-full"/>
                    </div>
                    <button className="bg-[#002f34] text-white flex items-center justify-center px-14 py-3 rounded gap-1">
                        <img src={objaviIcon} width={17}/>
                        <span className="min-w-[100%]">Objavi oglas</span>
                    </button>
                </form>
            </div>
        </nav>
     );
}
 
export default Navbar;