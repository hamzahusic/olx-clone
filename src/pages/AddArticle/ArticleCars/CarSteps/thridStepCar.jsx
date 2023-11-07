const ThirdStepCar = () => {
    
    const checkboxValues = [
        "Abs","Turbo","Udaran","Senzori","Kamera","Airbag","Alarm","Centralna brava","DPF/FAP filter",
        "Daljinsko otključavanje","Digitalna klima","El. podizači stakala","El. pomjeranje sjedišta","Električni retrovizori",
        "Grijanje sjedišta","Klima","Komande na volanu","Navigacija","Ocarinjen","Panorama krov","Park assist",
        "Servo volan","Turbo","Tempomat","Registrovan","Udaren","Start-Stop sistem","Šiber","Registrovan"
    ]
    
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
                                <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full">Dizel</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Benzin</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Plin</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Hibrid</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Električni</button>
                            </div>
                        </div>
                </div>
                <h2 className="text-2xl block text-center py-4">Dodatne informacije</h2>
                <div className="grid grid-cols-2 place-content-between items-start gap-5">
                    <div>
                        <div className="w-full">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>KONJSKIH SNAGA</p>
                            <div>
                                <input type="number" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base w-full'/>
                            </div>
                        </div>
                        <div className="w-full">
                                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>TRANSMISIJA</p>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full">Automatik</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Polu-automatik</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Manuelni</button>
                                </div>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>TIP</p>
                            <select  className='bg-gray-100 outline-none p-3 rounded-md'>
                                <option value="">Izaberi tip</option>
                                <option value="1">kabriolet</option>
                                <option value="2">karavan</option>
                                <option value="3">limuzina</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>REGISTROVAN DO</p>
                            <select  className='bg-gray-100 outline-none p-3 rounded-md'>
                                <option value="">Izaberi registorovan do</option>
                                <option value="1">11</option>
                                <option value="2">12</option>
                                <option value="3">1</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>VELICINA FELGI</p>
                            <select  className='bg-gray-100 outline-none p-3 rounded-md'>
                                <option value="">Izaberi velicinu felgi</option>
                                <option value="1">14</option>
                                <option value="2">15</option>
                                <option value="3">16</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>Euro [0-6]</p>
                            <select  className='bg-gray-100 outline-none p-3 rounded-md'>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div className="w-full">
                                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>POGON</p>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full">Prednji</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Zadnji</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Sva četri</button>
                                </div>
                        </div>
                        <div className="w-full">
                                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>SJEDEĆIH MJESTA</p>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full">1</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">2</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">3</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">4</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">5</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">6</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">7</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">8</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Ostalo</button>
                                </div>
                        </div>
                    </div>

                    <div className="pt-6 flex flex-col gap-3">
                        {checkboxValues.map((value) => (
                            <div class="text-base" key={value}>
                                <label for={value} className="flex items-center w-full justify-between cursor-pointer">
                                    {value}
                                    <input  id={value} type="checkbox"/>
                                </label>
                            </div>
                        ))
                        }
                    </div>

                </div>
                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>OPIS</p>
                <textarea
                    className="p-3 placeholder:text-gray-600 outline-none border-[1px] rounded border-[var(--pcolor)]"
                    placeholder="Unesite opis...."
                    cols="30"
                    rows="10"
                ></textarea>
            </div>
        </div>
     );
}
 
export default ThirdStepCar;