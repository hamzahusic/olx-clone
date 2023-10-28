const SecondStepCar = ({setLocation,location,setAvailable,available,condition,setCondition,price,setPrice}) => {
    return ( 
        <div>
            <h1 className="text-2xl block text-center">Osnovni podaci</h1>
            <div className="flex flex-col py-4 gap-3">
                <div className="flex flex-col gap-1">
                    <label htmlFor="manufacture" className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>LOKACIJA</label> 
                    <input type="text" name="model" onChange={(e) => setLocation(e.target.value)}  className='bg-gray-50 border-[1px] border-gray-200 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite lokaciju"/>         
                </div>
                <div className="flex items-start justify-between gap-6" >
                        <div className="w-full">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>DOSTUPNOST OGLASA</p>
                            <div className="flex justify-between items-center gap-4 text-sm">
                                <button className="py-4 px-6 bg-gray-100 rounded text-gray-600 font-thin " onClick={() => setAvailable(true)}>Dostupno odmah</button>
                                <button className="py-4 px-6  bg-gray-100 rounded text-gray-600 font-thin " onClick={() => setAvailable(false)}>Nije dostupno odmah</button>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>STANJE OGLASA</p>
                            <div className="flex justify-between items-center gap-4 text-sm">
                                <button className="py-2 px-7 bg-gray-100 rounded text-gray-600 font-thin w-full" onClick={() => setCondition(true)}>Novo</button>
                                <button className="py-2 px-7  bg-gray-100 rounded text-gray-600 font-thin  w-full" onClick={() => setCondition(false)}>Korišteno</button>
                            </div>
                        </div>
                </div>
                <div className="flex justify-between items-end gap-5">
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="manufacture" className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>CIJENA</label> 
                        <input type="number" onChange={(e) => setPrice(e.target.value)} name="model"  className='bg-gray-50 border-[1px] border-gray-200 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite cijenu u KM"/>         
                    </div>
                    <p className="py-3 px-5 rounded-full bg-gray-100">ili</p>
                    <button className="py-3 bg-gray-100 rounded text-gray-600 font-thin text-sm w-full">Cijena na upit</button>
                </div>
            </div>
        </div>
     );
}
 
export default SecondStepCar;