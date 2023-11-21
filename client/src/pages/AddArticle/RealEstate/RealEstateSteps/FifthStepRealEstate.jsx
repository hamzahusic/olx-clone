import photoIcon from '../../../../assets/olx-articles-no.svg'
import checkedIcon from '../../../../assets/checked-new.svg'
import addFileIcon from '../../../../assets/addFile.svg'

const FifthStepRealEstate = () => {
    return ( 
        <div>
            <h1 className="text-2xl block text-center">Fotografije</h1>
            <div className='flex gap-4 rounded bg-[#eef6ff] p-4 my-3'>
                <img src={photoIcon} width={50}/>
                <p className='text-sm'>Možete dodati do 25 fotografija ukupno - 7 fotografija besplatno. Svaka iduća fotografija se naplaćuje 1 OLX kredit.</p>
            </div>
            <div className='flex gap-4 rounded bg-[#eef6ff] p-4 my-3'>
                <img src={checkedIcon} width={30}/>
                <p className='text-sm'>Odaberite naslovnu fotografiju Vašeg oglasa klikom na bijeli kvadratić/checkbox na fotografiji.</p>
            </div>
            <div className='border-2 border-gray-200 rounded-lg border-dashed p-3 md:h-[400px] mb-7'>
                <p className='font-bold'>Prebaci fotografije ovdje...</p>
                <div className='grid place-content-center min-h-full'>
                    <img src={photoIcon} className=' opacity-20 '/>
                </div>
            </div>
            <label className='bg-gray-50 p-3 font-thin inline-flex gap-2 cursor-pointer rounded' >
                <input type="file" hidden accept="image/png,image/gif,image/jpeg,image/webp"/>
                <img src={addFileIcon} width={20}/>
                Izaberite fotografije ili ih prenesite mišem iznad
            </label>
        </div>
     );
}
 
export default FifthStepRealEstate;