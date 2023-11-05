const FirstStepJobs = () => {
    return ( 
        <div>
            <h1 className="text-2xl block text-center mb-4">Objavite posao</h1>
            <div className="flex flex-col gap-1">
               <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>NASLOV</p>
                <input type="text" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite naslov oglasa"/>
            </div>
            <div className="flex flex-col gap-1">
                    <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>KATEGORIJA POSLA</p>
                    <select  className='bg-gray-100 outline-none p-3 rounded-md'>
                        <option value="">Odaberite kategoriju</option>
                        <option value="">Pekar</option>
                        <option value="">Građevina</option>
                        <option value="">Trgovac</option>
                        <option value="">IT</option>
                    </select>
            </div>
        </div>
     );
}
 
export default FirstStepJobs;