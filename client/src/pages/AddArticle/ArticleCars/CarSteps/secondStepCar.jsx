import { useEffect, useState } from "react";

const SecondStepCar = ({setLocation,location,setAvailable,available,condition,setCondition,price,setPrice}) => {

    const [showPrice,setShowPrice] = useState(true);

    useEffect(() => {
        if(price == 0)
            setShowPrice(false)
        else
            setShowPrice(true)
    },[])

    return ( 
        <div>
            <h1 className="text-2xl block text-center">Osnovni podaci</h1>
            <div className="flex flex-col py-4 gap-3">
                <div className="flex flex-col gap-1">
                    <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>LOKACIJA</p> 
                    <input type="text" name="model" value={location} onChange={(e) => setLocation(e.target.value)}  className='bg-gray-50 border-[1px] border-gray-200 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite lokaciju"/>         
                </div>
                <div className="flex items-start justify-between gap-6" >
                        <div className="w-full">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>DOSTUPNOST OGLASA</p>
                            <div className="flex justify-between items-center gap-4 text-sm">
                                <button className="py-4 px-6 bg-gray-100 rounded text-gray-600 font-thin " style={{border:available && '2px solid var(--pcolor)',color:available && 'var(--pcolor)'}} onClick={() => setAvailable(true)}>Dostupno odmah</button>
                                <button className="py-4 px-6  bg-gray-100 rounded text-gray-600 font-thin " style={{border:!available && '2px solid var(--pcolor)',color:!available && 'var(--pcolor)'}} onClick={() => setAvailable(false)}>Nije dostupno odmah</button>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>STANJE OGLASA</p>
                            <div className="flex justify-between items-center gap-4 text-sm">
                                <button className="py-2 px-7 bg-gray-100 rounded text-gray-600 font-thin w-full" onClick={() => setCondition("Novo")} style={{backgroundColor:condition == "Novo" && '#23e5db'}}>Novo</button>
                                <button className="py-2 px-7  bg-gray-100 rounded text-gray-600 font-thin  w-full" onClick={() => setCondition("Korišteno")} style={{backgroundColor:condition == "Korišteno" && '#23e5db'}}>Korišteno</button>
                            </div>
                        </div>
                </div>
                <div className="flex justify-between items-end gap-5">
                    <div className="flex flex-col gap-1 w-full">
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>CIJENA (Kliknite na dugme pored ukoliko želite postaviti cijenu)</p> 
                        <input type="number" name="model"  
                            className={` border-[1px] border-gray-200 outline-none p-3 rounded-md text-base
                            ${showPrice ? ' bg-gray-50' : 'bg-gray-50/20 cursor-not-allowed line-through text-gray-300'}`} 
                            placeholder="Unesite cijenu u KM"
                            disabled={!showPrice && 'disabled'}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            title="Kliknite na dugme pored da unesete cijenu"
                            />        
                    </div>
                    <p className="py-3 px-5 rounded-full bg-gray-100">ili</p>
                    <button 
                        className={`py-3 bg-gray-100 rounded  text-sm w-full border-2 ${showPrice ? 'font-thin text-gray-600' : 'border-[var(--pcolor)] font-semibold text-color'}`}
                        onClick={() => {setShowPrice(!showPrice);setPrice(0)}}>Cijena na upit</button>
                </div>
            </div>
        </div>
     );
}
 
export default SecondStepCar;