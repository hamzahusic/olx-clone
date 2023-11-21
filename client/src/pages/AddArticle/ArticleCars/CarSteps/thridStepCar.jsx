const ThirdStepCar = (props) => {
    
    const checkboxValues = [
        "Abs","Udaran","Senzori","Kamera","Airbag","Alarm","Centralna brava","DPF/FAP filter",
        "Daljinsko otključavanje","Digitalna klima","El. podizači stakala","El. pomjeranje sjedišta","Električni retrovizori",
        "Grijanje sjedišta","Klima","Komande na volanu","Navigacija","Ocarinjen","Panorama krov","Park assist",
        "Servo volan","Turbo","Tempomat","Registrovan","Udaren","Start-Stop sistem","Šiber"
    ]

    const savedCh = [];
    
    return ( 
        <div>
            <h1 className="text-2xl block text-center">Obavezne informacije</h1>
            <div className="flex flex-col py-4 gap-3">
                <div className="flex items-start justify-between gap-6">
                            <div className="w-full">
                                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>NASLOV OGLASA</p>
                                <div >
                                    <input type="text" value={props.naslov} onChange={(e) => props.setNaslov(e.target.value)} className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base w-full' placeholder="Unesite naslov oglasa"/>
                                </div>
                            </div>
                            <div className="w-full">
                                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>KILOMETRAŽA</p>
                                <div >
                                 <input type="number" value={props.kilometraza} onChange={(e) => props.setKilometraza(e.target.value)} className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base w-full' placeholder="Unesite kilometražu"/>
                                </div>
                            </div>
                </div>
                <div className="flex items-start justify-between gap-6" >
                        <div className="w-full">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>BROJ VRATA*</p>
                            <div className="flex justify-between items-center gap-4 text-sm">
                                <button className="py-2 px-6 bg-gray-100 rounded text-gray-600 font-thin w-full" style={{border:props.brojVrata=="2/3" && "2px solid var(--pcolor)"}} onClick={() => props.setBrojVrata("2/3")}>2/3</button>
                                <button className="py-2 px-6  bg-gray-100 rounded text-gray-600 font-thin w-full" style={{border:props.brojVrata=="4/5" && "2px solid var(--pcolor)"}} onClick={() => props.setBrojVrata("4/5")}>4/5</button>
                            </div>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>KUBIKAŽA*</p>
                            <select  className='bg-gray-100 outline-none p-3 rounded-md' value={props.kubikaza} onChange={(e) => props.setKubikaza(e.target.value)}>
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
                            <select  className='bg-gray-100 outline-none p-3 rounded-md' value={props.godiste} onChange={(e) => props.setGodiste(e.target.value)}>
                                <option value="">Izaberi godište</option>
                                <option value="1">2001</option>
                                <option value="2">2002</option>
                                <option value="3">2003</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>KILOVATA (KW)*</p>
                            <input type="text" id="" value={props.kilovata} onChange={(e) => props.setKilovata(e.target.value)} placeholder="Unesite KW" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base w-full'/>
                        </div>
                        
                </div>
                <div className="flex items-start justify-between gap-6" >
                        <div className="w-full">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>GORIVO*</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.gorivo=="Dizel" && "2px solid var(--pcolor)"}} onClick={() => props.setGorivo("Dizel")}>Dizel</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.gorivo=="Benzin" && "2px solid var(--pcolor)"}} onClick={() => props.setGorivo("Benzin")}>Benzin</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.gorivo=="Plin" && "2px solid var(--pcolor)"}} onClick={() => props.setGorivo("Plin")}>Plin</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.gorivo=="Hibrid" && "2px solid var(--pcolor)"}} onClick={() => props.setGorivo("Hibrid")}>Hibrid</button>
                                <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.gorivo=="Električni" && "2px solid var(--pcolor)"}} onClick={() => props.setGorivo("Električni")}>Električni</button>
                            </div>
                        </div>
                </div>
                <h2 className="text-2xl block text-center py-4">Dodatne informacije</h2>
                <div className="grid grid-cols-2 place-content-between items-start gap-5">
                    <div>
                        <div className="w-full">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>KONJSKIH SNAGA</p>
                            <div>
                                <input type="number" value={props.konja} onChange={(e) => props.setKonja(e.target.value)} className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base w-full'/>
                            </div>
                        </div>
                        <div className="w-full">
                                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>TRANSMISIJA</p>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.transmisija=="Automatik" && "2px solid var(--pcolor)"}} onClick={() => props.setTransmisija("Automatik")}>Automatik</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.transmisija=="Polu-automatik" && "2px solid var(--pcolor)"}} onClick={() => props.setTransmisija("Polu-automatik")}>Polu-automatik</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.transmisija=="Manuelni" && "2px solid var(--pcolor)"}} onClick={() => props.setTransmisija("Manuelni")}>Manuelni</button>
                                </div>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>TIP</p>
                            <select  className='bg-gray-100 outline-none p-3 rounded-md' value={props.tip} onChange={(e) => props.setTip(e.target.value)}>
                                <option value="">Izaberi tip</option>
                                <option value="1">kabriolet</option>
                                <option value="2">karavan</option>
                                <option value="3">limuzina</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>REGISTROVAN DO</p>
                            <select  className='bg-gray-100 outline-none p-3 rounded-md' value={props.registrovanDo} onChange={(e) => props.setRegistrovanDo(e.target.value)}>
                                <option value="">Izaberi registorovan do</option>
                                <option value="1">11</option>
                                <option value="2">12</option>
                                <option value="3">1</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>VELICINA FELGI</p>
                            <select  className='bg-gray-100 outline-none p-3 rounded-md' value={props.velicinaFelgi} onChange={(e) => props.setVelicinaFelgi(e.target.value)}>
                                <option value="">Izaberi velicinu felgi</option>
                                <option value="1">14</option>
                                <option value="2">15</option>
                                <option value="3">16</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>Euro [0-6]</p>
                            <select  className='bg-gray-100 outline-none p-3 rounded-md' value={props.euro} onChange={(e) => props.setEuro(e.target.value)}>
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
                                    <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.pogon=="Prednji" && "2px solid var(--pcolor)"}} onClick={() => props.setPogon("Prednji")}>Prednji</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.pogon=="Zadnji" && "2px solid var(--pcolor)"}} onClick={() => props.setPogon("Zadnji")}>Zadnji</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.pogon=="Sva četri" && "2px solid var(--pcolor)"}} onClick={() => props.setPogon("Sva četri")}>Sva četri</button>
                                </div>
                        </div>
                        <div className="w-full">
                                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>SJEDEĆIH MJESTA</p>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <button className="py-2 px-6 bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.mjesta==1 && "2px solid var(--pcolor)"}} onClick={() => props.setMjesta(1)}>1</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.mjesta==2 && "2px solid var(--pcolor)"}} onClick={() => props.setMjesta(2)}>2</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.mjesta==3 && "2px solid var(--pcolor)"}} onClick={() => props.setMjesta(3)}>3</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.mjesta==4 && "2px solid var(--pcolor)"}} onClick={() => props.setMjesta(4)}>4</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.mjesta==5 && "2px solid var(--pcolor)"}} onClick={() => props.setMjesta(5)}>5</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.mjesta==6 && "2px solid var(--pcolor)"}} onClick={() => props.setMjesta(6)}>6</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.mjesta==7 && "2px solid var(--pcolor)"}} onClick={() => props.setMjesta(7)}>7</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.mjesta==8 && "2px solid var(--pcolor)"}} onClick={() => props.setMjesta(8)}>8</button>
                                    <button className="py-2 px-6  bg-gray-300 rounded text-gray-600 font-thin w-full" style={{border:props.mjesta==0 && "2px solid var(--pcolor)"}} onClick={() => props.setMjesta(0)}>Ostalo</button>
                                </div>
                        </div>
                    </div>

                    <div className="pt-6 flex flex-col gap-3">
                        {checkboxValues.map((value) => (
                            <div className="text-base" key={value}>
                                <label htmlFor={value} className="flex items-center w-full justify-between cursor-pointer">
                                    {value}
                                    <input id={value} type="checkbox" onClick={() => {props.setCheckBoxValue(...props.checkBoxValue,value)}}/>
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
                    value={props.opis}
                    onChange={(e) => props.setOpis(e.target.value)}
                ></textarea>
            </div>
        </div>
     );
}
 
export default ThirdStepCar;