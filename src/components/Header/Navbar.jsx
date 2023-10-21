import logo from "../../assets/logoOLX.svg"
import oglasiIcon from '../../assets/listOglasi.svg'
import searchIcon from '../../assets/search.svg'
import objaviIcon from '../../assets/objavi.svg'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    const [inputValue,setInputValue] = useState(null); 
    const [user,setUser] = useState(false);


    const searchArticle = (e) => {
        e.preventDefault();

        navigate(`/search/${inputValue}`,{replace:true})
        console.log("POKRENUTO")
    }

    return ( 
        <nav className="p-5 bg-white ">
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
                        <div>
                            <Link to="/"><img src={oglasiIcon}/> Moji oglasi</Link>
                            <Link to="/">Registracija</Link>
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
        </nav>
     );
}
 
export default Navbar;