import { Link } from "react-router-dom";

const Article = ({image,title,tags,time,price,available,id,separate}) => {
    return ( 
        <Link to={`/article/${id}`} className="shadow-md inline-block rounded-t-md min-h-fit w-full overflow-hidden max-w-[280px] bg-white">
            <div className="relative max-h-[164px]">
                {image && <img src={image} className=" w-full max-w-[280px] h-[164px] object-cover"/>}
                {!image && <div className="w-[280px] h-[164px] object-cover bg-[#002f34]"/>}
                {available && <div className="absolute right-0 bottom-0 text-white text-[12px] bg-[#002f34] p-1 rounded-ss-md ">DOSTUPNO ODMAH</div>}
                {separate && <div className="absolute left-0 bottom-0 text-white text-[12px] bg-[#edac44] p-1 rounded-se-md  z-50">IZDVOJENO</div>}
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