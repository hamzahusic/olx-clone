const SecondStepJobs = () => {
    return ( 
        <div>
            <h1 className="text-2xl block text-center mb-4">Objavite posao</h1>
            <div className="flex flex-col gap-1">
                    <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>SPOL</p>
                    <select  className='bg-gray-100 outline-none p-3 rounded-md'>
                        <option value="">Odaberite spol</option>
                        <option value="">M</option>
                        <option value="">Ž</option>
                        <option value="">M/Ž</option>
                    </select>
            </div>
            <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-3'>OPIS</p>
            <textarea
                className="p-3 w-full placeholder:text-gray-600 outline-none border-[1px] rounded border-[var(--pcolor)]"
                placeholder="Unesite opis...."
                cols="30"
                rows="10"
            ></textarea>
        </div>
     );
}
 
export default SecondStepJobs;