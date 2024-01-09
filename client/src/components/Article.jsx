import { Link } from "react-router-dom";
import deleteIcon from '../assets/articleImg/delete.png'
import editIcon from '../assets/articleImg/edit.png'

const Article = ({image,title,tags,time,price,available,id,separate,remove,edit, removeArticle,editArticle}) => {
    return ( 
        <Link to={`/article/${id}`} className="shadow-md inline-block rounded-t-md min-h-fit overflow-hidden max-w-[280px] bg-white">
            <div className="relative max-h-[164px]">
                <img src={image} className=" w-full max-w-[280px] h-[164px] object-cover"/>
                {available && <div className="absolute right-0 bottom-0 text-white text-[12px] bg-[#002f34] p-1 rounded-ss-md ">DOSTUPNO ODMAH</div>}
                {separate && <div className="absolute left-0 bottom-0 text-white text-[12px] bg-[#edac44] p-1 rounded-se-md  z-50">IZDVOJENO</div>}
                {remove && <button className="absolute top-2 left-[52px] bg-red-600 py-3 px-[14px] rounded-full" onClick={() => removeArticle(id)}><img src={deleteIcon} alt="" className="max-w-[16px]"/></button>}
                {edit && <button className="absolute top-2 left-1 bg-yellow-600 py-[13px] px-[14px] rounded-full" onClick={() => editArticle(id)}><img src={editIcon} alt="" className="max-w-[16px]"/></button>}
            </div>
            <div className="px-3 py-2 min-h-[110px] flex flex-col justify-between">
                <div>
                    <p className=" h-12 multiline-elipsis">{title}</p>
                    {tags && 
                    <div className="flex items-center gap-1 pt-1">
                        {tags.map((tag => (
                            <p key={tag} className="text-[10px] border-[1px] border-[#e0e0e0] inline-block px-1 rounded-sm">{tag}</p>
                        )))}
                    </div>}
                </div>
                <div className="flex justify-between items-center pt-2">
                    <p className="text-[12px] text-[#2c343f] font-[200]">{time}</p>
                    <p className="font-bold">{price == 0 ? "Na upit" : Number(price).toLocaleString("de-DE") +"KM"}</p>
                </div>
            </div>
        </Link>
     );
}
 
export default Article;