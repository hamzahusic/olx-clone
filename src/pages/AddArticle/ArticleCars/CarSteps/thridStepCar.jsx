const ThirdStepCar = () => {
    return ( 
        <div>
            <h1 className="text-2xl block text-center">Obavezne informacije</h1>
            <div className="flex flex-col py-4 gap-3">
                <div className="flex items-start justify-between gap-6">
                            <div className="w-full">
                                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>NASLOV OGLASA</p>
                                <div >
                                <input type="text" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base w-full' placeholder="Unesite naslov oglasa"/>
                                </div>
                            </div>
                            <div className="w-full">
                                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>KILOMETRAŽA</p>
                                <div >
                                 <input type="number" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base w-full' placeholder="Unesite kilometražu"/>
                                </div>
                            </div>
                </div>
                <div className="flex items-start justify-between gap-6" >
                        <div className="w-full">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>BROJ VRATA*</p>
                            <div className="flex justify-between items-center gap-4 text-sm">
                                <button className="py-4 px-6 bg-gray-100 rounded text-gray-600 font-thin ">Dostupno odmah</button>
                                <button className="py-4 px-6  bg-gray-100 rounded text-gray-600 font-thin ">Nije dostupno odmah</button>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>KUBIKAŽA*</p>
                            <div className="flex justify-between items-center gap-4 text-sm">
                                <button className="py-2 px-7 bg-gray-100 rounded text-gray-600 font-thin w-full">Novo</button>
                                <button className="py-2 px-7  bg-gray-100 rounded text-gray-600 font-thin  w-full">Korišteno</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default ThirdStepCar;