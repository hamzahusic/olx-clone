import { Link } from "react-router-dom";

const Article = ({image,title,tags,time,price,available,id}) => {
    return ( 
        <Link to={`/article/${id}`} className="shadow-md inline-block rounded-t-md overflow-hidden max-w-[280px] bg-white">
            <div className="relative">
                <img src={image} className=" w-full max-w-[280px]"/>
                {available && <div className="absolute right-0 bottom-0 text-white text-[12px] bg-[#002f34] p-1 rounded-t-sm ">DOSTUPNO ODMAH</div>}
            </div>
            <div className="px-3 py-2 min-h-[110px] flex flex-col justify-between">
                <div>
                    <p>{title}</p>
                    {tags && <div className="flex items-center gap-1 pt-1">
                        {tags.map((tag => (
                            <p className="text-[10px] border-[1px] border-[#e0e0e0] inline-block px-1 rounded-sm">{tag}</p>
                        )))}
                    </div>}
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-[12px] text-[#2c343f] font-[200]">{time}</p>
                    <p className="font-bold">{price}</p>
                </div>
            </div>
        </Link>
     );
}
 
export default Article;