const SecondStepElectronics = () => {

    const checkboxValues = [
        "Wifi","Bluetooth","SSD","Kamera","HDMI","VGA","CD-ROM","Mikrofon","Tastatura[naša slova]","Hdd","Mini DVI","LAN port","USB C"
    ]

    return ( 
        <div>
            <h1 className="text-2xl block text-center">Osnovni podaci</h1>
            <div className="flex flex-col gap-1">
                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>IME UREĐAJA</p>
                <input type="text" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite ime uređaja"/>
            </div>
            <div className="flex justify-between gap-5">
                <div className="flex flex-col gap-1 w-full">
                    <p className='text-[12px] font-semibold tracking-wide mt-5 mb-2'>RAM</p>
                    <select  className='bg-gray-100 outline-none p-3 rounded-md'>
                        <option value="">Odaberite ram</option>
                        <option value="1">1GB</option>
                        <option value="2">2GB</option>
                        <option value="3">3GB</option>
                        <option value="4">4GB</option>
                        <option value="6">6GB</option>
                        <option value="8">8GB</option>
                        <option value="12">12GB</option>
                        <option value="16">16GB</option>
                        <option value="32">32GB</option>
                        <option value="64">64GB</option>
                        <option value="128">128GB</option>
                        <option value="128+">128+</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>INTERNA MEMORIJA</p>
                    <input type="number" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite internu memoriju"/>
                </div>
            </div>
            <div className="flex justify-between gap-5">
                <div className="flex flex-col gap-1 w-full">
                    <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>PROCESOR</p>
                    <input type="text" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite procesor"/>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>GRAFIČKA KARTICA</p>
                    <input type="text" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite grafičku karticu"/>
                </div>
            </div>
            <h2 className="text-2xl block text-center mt-10">Dodatne informacije</h2>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <div className="flex flex-col gap-1 w-full">
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>REZOLUCIJA</p>
                        <input type="text" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite rezoluciju npr.(1920x1080)"/>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>VELICINA EKRANA</p>
                        <input type="text" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite velicinu ekrana npr.(15.6in)"/>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>USB PORTOVI</p>
                        <input type="number" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite broj usb portova"/>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                    <p className='text-[12px] font-semibold tracking-wide mt-5 mb-2'>VRSTA GRAFIČKE</p>
                    <select  className='bg-gray-100 outline-none p-3 rounded-md'>
                        <option value="">Integrisana</option>
                        <option value="1">Zasebna</option>
                    </select>
                    <div className="flex flex-col gap-1 w-full">
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>OPERATIVNI SISTEM</p>
                        <input type="text" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite operativni sistem npr.(Win 10)"/>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>PROIZVOĐAČ</p>
                        <input type="text" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite ime proizvođača"/>
                    </div>
                    <p className='text-[12px] font-semibold tracking-wide mt-5 mb-2'>BATERIJA[TRAJANJE]</p>
                    <select  className='bg-gray-100 outline-none p-3 rounded-md'>
                        <option value="">Izaberite trajanje baterije</option>
                        <option value="1">do 1h</option>
                        <option value="2">do 2h</option>
                        <option value="3">do 3h</option>
                        <option value="4">do 4h</option>
                        <option value="5">do 5h</option>
                        <option value="6">do 6h</option>
                        <option value="7">do 7h</option>
                        <option value="8">do 8h</option>
                        <option value="9">do 9h</option>
                        <option value="10">do 10h</option>
                        <option value="10+">10h+</option>
                    </select>
                    <div className="flex flex-col gap-1 w-full">
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>GARANCIJA</p>
                        <input type="number" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite garanciju (10) mjeseci"/>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>BROJ FIZIČKIH JEZGRI</p>
                        <input type="number" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite broj fizičkih jezgri"/>
                    </div>
                </div>
                </div>
                <div className="pt-6 flex flex-col gap-4">
                        {checkboxValues.map((value) => (
                            <div class="text-base" key={value}>
                                <label for={value} className="flex items-center w-full justify-between cursor-pointer">
                                    {value}
                                    <input id={value} type="checkbox"/>
                                </label>
                            </div>
                        ))
                        }
                </div>
            </div>
            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>OPIS</p>
            <textarea
                className="p-3 placeholder:text-gray-600 outline-none border-[1px] rounded border-[var(--pcolor)] w-full"
                placeholder="Unesite opis...."
                cols="30"
                rows="10"
            ></textarea>
        </div>
     );
}
 
export default SecondStepElectronics;