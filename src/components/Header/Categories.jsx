import { useState } from "react";
import { Link } from "react-router-dom";

import menu from '../../assets/categoriesImg/categories.svg'
import backSchool from '../../assets/categoriesImg/back2school.png'
import carIcon from '../../assets/categoriesImg/cars.webp'
import keyIcon from '../../assets/categoriesImg/real-estate.webp'
import servicesIcon from '../../assets/categoriesImg/services.webp'
import jobsIcon from '../../assets/categoriesImg/jobs.webp'
import phonesIcon from '../../assets/categoriesImg/mobile-phones.webp'
import computersIcon from '../../assets/categoriesImg/convos.webp'
import technicIcon from '../../assets/categoriesImg/clock.webp'
import businessIcon from '../../assets/categoriesImg/business.webp'
import clothesIcon from '../../assets/categoriesImg/clothes.webp'
import animalsIcon from '../../assets/categoriesImg/pets.webp'
import booksIcon from '../../assets/categoriesImg/books.webp'
import cameraIcon from '../../assets/categoriesImg/camera.webp'

const Categories = () => {

    const categ = [
        {
            name : "Vozila",
            img : carIcon,
            color : "#3276c0"
        },
        {
            name : "Nekretnine",
            img : keyIcon,
            color : "#6a9f42"
        },
        {
            name : "Servisi i usluge",
            img : servicesIcon,
            color : "#b36878"
        },
        {
            name : "Poslovi",
            img : jobsIcon,
            color : "#ffcd32"
        },
        {
            name : "Mobilni uređaji",
            img : phonesIcon,
            color : "#ffcd32"
        },
        {
            name : "Kompjuteri",
            img : computersIcon,
            color : "#e35757"
        },
        {
            name : "Tehnika",
            img : technicIcon,
            color : "#58beef"
        },
        {
            name : "Biznis i ind.",
            img : businessIcon,
            color : "#88e3fb"
        },
        {
            name : "Odjeća i obuća",
            img : clothesIcon,
            color : "#c936ba"
        },
        {
            name : "Životinje",
            img : animalsIcon,
            color : "#8080ff"
        },
        {
            name : "Literatura",
            img : booksIcon,
            color : "#f70"
        },
        {
            name : "Umjetnost",
            img : cameraIcon,
            color : "#23bc07"
        },
    ]
    const [categories,setCategories] = useState(categ);

    return ( 
        <div className="px-4 pb-4 bg-white flex justify-evenly items-center gap-5 flex-wrap shadow-sm">
            <Link to="/" className="flex flex-col justify-between items-center">
                <div className={`bg-[#f1f4f5] rounded-full mb-3`}>
                    <img src={menu} className="px-4 py-5" alt="" width={60} />
                </div>
                <p className="text-sm font-[600]">Kategorije</p>
            </Link>
            {
                categories.map((categorie,index) => (
                    <Link to="/" key={index} className="flex flex-col justify-center items-center max-w-[100px] max-h-[100px]">
                        <div className={`rounded-full mb-3`} style={{backgroundColor:categorie.color}}>
                            <img src={categorie.img} className="p-1 hover:scale-110 transition" width={65}/>
                        </div>
                        <p className="text-sm font-[600]">{categorie.name}</p>
                    </Link>
                ))
            }
        </div>
     );
}
 
export default Categories;