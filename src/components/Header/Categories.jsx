import { useState } from "react";
import backSchool from '../../assets/categoriesImg/back2school.png'
import menu from '../../assets/categoriesImg/categories.svg'
import { Link } from "react-router-dom";
const Categories = () => {

    const categ = [
        {
            name : "Back2School",
            img : backSchool,
            color : "#ffcd32"
        },
        {
            name : "Vozila",
            img : backSchool,
            color : "#3276c0"
        },
        {
            name : "Nekretnine",
            img : backSchool,
            color : "#6a9f42"
        },
        {
            name : "Servisi i usluge",
            img : backSchool,
            color : "#b36878"
        },
        {
            name : "Poslovi",
            img : backSchool,
            color : "#ffcd32"
        },
        {
            name : "Mobilni uređaji",
            img : backSchool,
            color : "#ffcd32"
        },
        {
            name : "Kompjuteri",
            img : backSchool,
            color : "#e35757"
        },
        {
            name : "Tehnika",
            img : backSchool,
            color : "#58beef"
        },
        {
            name : "Biznis i ind.",
            img : backSchool,
            color : "#88e3fb"
        },
        {
            name : "Odjeća i obuća",
            img : backSchool,
            color : "#c936ba"
        },
        {
            name : "Životinje",
            img : backSchool,
            color : "#8080ff"
        },
        {
            name : "Literatura",
            img : backSchool,
            color : "#f70"
        },
        {
            name : "Umjetnost",
            img : backSchool,
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
                        <div className={`bg-[#3276c0] rounded-full mb-3`}>
                            <img src={categorie.img} className="p-2 hover:scale-110" width={65}/>
                        </div>
                        <p className="text-sm font-[600]">{categorie.name}</p>
                    </Link>
                ))
            }
        </div>
     );
}
 
export default Categories;