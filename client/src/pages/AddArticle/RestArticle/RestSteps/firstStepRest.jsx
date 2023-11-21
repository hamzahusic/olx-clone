const FirstStepRest = () => {
    return ( 
        <div>
            <h1 className="text-2xl block text-center">Naslov, kategorija i opis</h1>
            <div className="flex flex-col gap-1">
                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>NASLOV</p>
                <input type="text" className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite naslov"/>
            </div>
            <div className="flex flex-col gap-1">
                <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>KATEGORIJA</p>
                <select  className='bg-gray-100 outline-none p-3 rounded-md'>
                    <option value="">Odaberite kategoriju</option>
                    <option value="">Mobilni uređaji</option>
                    <option value="">Kompjuteri</option>
                    <option value="">Tehnika</option> 
                </select>
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
 
export default FirstStepRest;