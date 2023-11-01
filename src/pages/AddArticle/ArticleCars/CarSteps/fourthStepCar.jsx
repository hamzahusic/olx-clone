import photoIcon from '../../../../assets/olx-articles-no.svg'
import checkedIcon from '../../../../assets/checked-new.svg'
const FourtStepCar = () => {
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
        </div>
    );
}
 
export default FourtStepCar;