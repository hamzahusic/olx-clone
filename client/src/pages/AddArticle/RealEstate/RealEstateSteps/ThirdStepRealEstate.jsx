const ThirdStepRealEstate = () => {
    
    const checkboxValues = [
        "Alarm","Balkon","Blindirana vrata","Garaža","Internet","Kablovksa TV",
        "Kanalizacija","Klima","Lift","Ostava/špajz","Parking","Plin","Podrum/Tavan","Struja",
        "Telefonski priključak","Uključen trošak režija","Uknjiženo / ZK","Video nadzor","Voda","Za studente",
        "Kućni ljubimci"
    ]

    return ( 
        <div>
            <h1 className="text-2xl block text-center mb-4">Obavezne informacije</h1>
            <div className="grid grid-cols-2 gap-5">
                        <div>
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>STANJE*</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full">Novogradnja</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Renoviran</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Dobro stanje</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Parcijalno renoviran</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Za renoviranje</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">U izgradnji</button>
                            </div>
                        </div>
                        <div>
                                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>KVADRATA*</p>
                                <div >
                                    <input type="number" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base w-full'/>
                                </div>
                        </div>
                        <div>
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>VRSTA OGLASA*</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full">Prodaja</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Iznajmljivanje</button>
                            </div>
                        </div>
                        <div>
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>OPREMLJENOST*</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full">Namješten</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Nenamješten</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Polunamješten</button>
                            </div>
                        </div>
                        <div>
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>BROJ SOBA*</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full">Garsonjera</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Jednosoban</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Dvosoban</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Trosoban</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Četverosoban</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Petosoban i više</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>SPRAT*</p>
                            <select  className='bg-gray-100 outline-none p-3 rounded-md'>
                                <option value="">Izaberite sprat</option>
                                <option value="-3">-3</option>
                                <option value="-2">-2</option>
                                <option value="-1">-1</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="10+">10+</option>
                                
                            </select>
                        </div>
                        
                        <div>
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>VRSTA GRIJANJA*</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full">Struja</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Plin</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Drva</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Centralno[gradsko]</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Centralno[Kotlovnica]</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Centralno[Plin]</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Ostalo</button>
                            </div>
                        </div>
            </div>
            <h2 className="text-2xl block text-center mb-4">Dodatne informacije</h2>
            <div className="flex gap-5">
                <div className="w-full">
                    <div>
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>KVADRATURA BALKONA*</p>
                        <div className="w-full">
                            <input type="number" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base w-full'/>
                        </div>
                    </div>
                    <div>
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>IME I BROJ LICENCE AGENTA*</p>
                        <div className="w-full">
                            <input type="text" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base w-full'/>
                        </div>
                    </div>
                    <div>
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>BROJ POSREDNIČKOG UGOVORA*</p>
                        <div className="w-full">
                            <input type="text" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base w-full'/>
                        </div>
                    </div>

                    <div>
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>GODINA IZGRADNJE</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full">2020+</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">2015+</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">2010+</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">2000-2009</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">1990-1999</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">1980-1989</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">1970-1979</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">1960-1969</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">195-1959</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Prije 1950</button>
                        </div>
                    </div>
                    <div>
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>PRIMARNA ORJENTACIJA</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full">Sjever</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Sjeveroistok</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Istok</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Jugoistok</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Jug</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Jugozapad</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Zapad</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Sjeverozapad</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Ostalo</button>
                        </div>
                    </div>
                    <div>
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>VRSTA PODA</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full">Parket</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Laminat</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Brodski</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Beton</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Ostalo</button>
                        </div>
                    </div>
                    <div>
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>BROJ KUPATILA</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full">1</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">2</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">3</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">4</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">5</button>
                            <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full">Više od 5</button>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="pt-6 flex flex-col gap-6">
                            {checkboxValues.map((value) => (
                                <div className="text-base" key={value}>
                                    <label htmlFor={value} className="flex items-center w-full justify-between cursor-pointer">
                                        {value}
                                        <input  id={value} type="checkbox"/>
                                    </label>
                                </div>
                            ))

                            }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ThirdStepRealEstate;