import UserLayout from "../../components/Layouts/UserLayout";
import whiteProfile from "../../assets/white-olx.svg"
import locationIcon from '../../assets/location.svg'
import editIcon from '../../assets/edit.svg'
import publishIcon from '../../assets/objavi.svg'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NoResult from "../../components/NoResult";
import { useSelector } from "react-redux";

const UserProfile = ({children}) => {

    const user = useSelector(state => state.isLogged)
    const navigate = useNavigate()
    const zadnja_prijava = new Date(user.zadnja_prijava);

    useEffect(() => {
        if(!user)
            navigate('/')
    },[user])

    return ( 
        <UserLayout>
            <div className="p-5 flex">
                <div className="flex flex-col gap-5 w-full max-w-[350px] border-r-[1px] pr-4 min-h-[70vh]">
                    <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img src={user.slika_link ? user.slika_link : whiteProfile} className="bg-gray-800 w-full h-full object-cover scale-[1.3] p-1"/>
                        </div>
                        <div className="flex flex-col items-stretch">
                            <p className=" text-lg">{user.ime + " " + user.prezime}</p>
                            <div className="flex gap-2">
                                <img src={locationIcon} alt="" width={10}/>
                                <p>{user.adresa}</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 bg-blue-100 text-sm">
                        <p className="mb-3">Da li ste probali nove OLX avatare? Budi prepoznatljiv, generiši svoj</p>
                        <Link to={'/'} className="border-b-[1px] border-[#002f34] font-semibold py-2">Promijeni avatar</Link>
                    </div>
                    
                    <div className="flex bg-white gap-2">
                            <Link to={"/"} className="bg-white border-2 border-[#002f34] flex gap-2 items-center justify-center py-3 px-6 rounded w-[50%]">
                                <img src={editIcon} alt="" className="max-w-[20px]"/>
                                Postavke
                            </Link>
                            <Link to={"/"} className="bg-[#002f34] text-white border-2 border-[#002f34] flex gap-2 items-center justify-center py-3 px-6 rounded w-[50%]">
                                <img src={publishIcon} alt="" className="max-w-[17px]"/>
                                Objavi
                            </Link>
                    </div>
                    <div>
                        <p className="pb-5">Informacije</p>
                        <div className="flex justify-between text-sm py-2">
                            <p>OLX ID</p>
                            <p>{user.idK}</p>
                        </div>
                        <div className="flex justify-between text-sm">
                            <p>Online</p>
                            <p>{zadnja_prijava.getDay() + '/' + Number(zadnja_prijava.getMonth()+1) + '/' + zadnja_prijava.getFullYear() + " " + zadnja_prijava.getHours() + ':' + zadnja_prijava.getMinutes()}</p>
                        </div>
                    </div>
                </div>
                <div className="px-8 w-full">
                    {children}
                </div>
            </div>
        </UserLayout>
     );
}
 
export default UserProfile;