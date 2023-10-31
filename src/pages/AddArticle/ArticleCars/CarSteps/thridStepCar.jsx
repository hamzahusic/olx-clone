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
                                <button className="py-2 px-6 bg-gray-100 rounded text-gray-600 font-thin w-full">2/3</button>
                                <button className="py-2 px-6  bg-gray-100 rounded text-gray-600 font-thin w-full">4/5</button>
                            </div>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>KUBIKAŽA*</p>
                            <select  className='bg-gray-100 outline-none p-3 rounded-md'>
                                <option value="">Izaberi kubikažu</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                </div>
                <div className="flex items-start justify-between gap-6" >
                        <div className="w-full flex flex-col">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>GODIŠTE*</p>
                            <select  className='bg-gray-100 outline-none p-3 rounded-md'>
                                <option value="">Izaberi godište</option>
                                <option value="1">2001</option>
                                <option value="2">2002</option>
                                <option value="3">2003</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>KILOVATA (KW)*</p>
                            <input type="text" id="" placeholder="Unesite KW" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base w-full'/>
                        </div>
                        
                </div>
                <div className="flex items-start justify-between gap-6" >
                <div className="w-full">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>GORIVO*</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <button className="py-2 px-6 bg-gray-100 rounded text-gray-600 font-thin w-full">Dizel</button>
                                <button className="py-2 px-6  bg-gray-100 rounded text-gray-600 font-thin w-full">Benzin</button>
                                <button className="py-2 px-6  bg-gray-100 rounded text-gray-600 font-thin w-full">Plin</button>
                                <button className="py-2 px-6  bg-gray-100 rounded text-gray-600 font-thin w-full">Hibrid</button>
                                <button className="py-2 px-6  bg-gray-100 rounded text-gray-600 font-thin w-full">Električni</button>
                            </div>
                        </div>
                </div>
                <h2 className="text-2xl block text-center py-4">Obavezne informacije</h2>
            </div>
        </div>
     );
}
 
export default ThirdStepCar;