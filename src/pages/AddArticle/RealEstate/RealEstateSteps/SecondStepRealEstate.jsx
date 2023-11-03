const SecondStepRealEstate = ({setLocation,location}) => {

    return ( 
        <div>
            <h1 className="text-2xl block text-center">Lokacija</h1>
            <div className="flex flex-col py-4 gap-3">
                <div className="flex flex-col gap-1">
                    <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>LOKACIJA</p> 
                    <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)}  className='bg-gray-50 border-[1px] border-gray-200 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite lokaciju"/>         
                </div>
                <div className="flex flex-col gap-1">
                    <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>PRETRAŽITE ADRESU</p> 
                    <input type="text" name="searchLocation" className='bg-gray-50 border-[1px] border-gray-200 outline-none p-3 rounded-md placeholder:text-gray-600 text-base'/>         
                </div>
                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>OZNAČITE TAČNU LOKACIJU NA MAPI</p>
                
            </div>
        </div>
     );
}
 
export default SecondStepRealEstate;