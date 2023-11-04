import { useState } from "react";

const FourtStepRealEstate = () => {

    const [showPrice,setShowPrice] = useState(true);

    return ( 
        <div>
            <h1 className="text-2xl block text-center mb-4">Cijena i detaljni opis</h1>

            <div className="flex flex-col gap-1">
                    <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>NASLOV OGLASA</p> 
                    <input type="text" name="model" className='bg-gray-50 border-[1px] border-gray-200 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite naslov"/>         
            </div>

            <div className="flex justify-between items-end gap-5">
                    <div className="flex flex-col gap-1 w-full">
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>CIJENA</p> 
                        <input type="number"  name="model"  
                            className={` border-[1px] border-gray-200 outline-none p-3 rounded-md text-base
                            ${showPrice ? ' bg-gray-50' : 'bg-gray-50/20 cursor-not-allowed line-through text-gray-300'}`} 
                            placeholder="Unesite cijenu u KM"
                            disabled={!showPrice && 'disabled'}
                            
                            />        
                    </div>
                    <p className="py-3 px-5 rounded-full bg-gray-100">ili</p>
                    <button 
                        className={`py-3 bg-gray-100 rounded  text-sm w-full border-2 ${showPrice ? 'font-thin text-gray-600' : 'border-[var(--pcolor)] font-semibold text-color'}`}
                        onClick={() => setShowPrice(!showPrice)}>Cijena na upit</button>
            </div>
            <div>
                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>OPIS</p>
                <textarea
                    className="p-3 placeholder:text-gray-600 outline-none border-[1px] rounded border-[var(--pcolor)] w-full"
                    placeholder="Unesite opis...."
                    cols="30"
                    rows="10"
                ></textarea>
            </div>
        </div>
     );
}
 
export default FourtStepRealEstate;