import stanIcon from '../../../../assets/RealEstate/stanovi.png'
import kuceIcon from '../../../../assets/RealEstate/kuce.png'
import prostoriIcon from '../../../../assets/RealEstate/poslovni.png'
import vikendiceIcon from '../../../../assets/RealEstate/vikendice.png'
import apartmaniIcon from '../../../../assets/RealEstate/apartmani.png'
import sobeIcon from '../../../../assets/RealEstate/sobe.png'
import zemljistaIcon from '../../../../assets/RealEstate/zemljista.png'
import garazeIcon from '../../../../assets/RealEstate/garaze.png'
import ostaloIcon from '../../../../assets/RealEstate/ostalo.png'
import montazaIcon from '../../../../assets/RealEstate/motaze.png'

const FirstStepRealEstate = () => {

    const realEstate = [
        {
            name :"Stanovi",
            icon:stanIcon
        },
        {
            name :"Kuce",
            icon:kuceIcon
        },
        {
            name :"Poslovni prostori",
            icon:prostoriIcon
        },
        {
            name :"Vikendice",
            icon:vikendiceIcon
        },
        {
            name :"Apartmani",
            icon:apartmaniIcon
        },
        {
            name :"Sobe",
            icon:sobeIcon
        },
        {
            name :"Zemljista",
            icon:zemljistaIcon
        },
        {
            name :"Garaze",
            icon:garazeIcon
        },
        {
            name :"Ostalo",
            icon:ostaloIcon
        },
        {
            name :"Montažni objekat",
            icon:montazaIcon
        },
    ]


    return ( 
        <div>
            <h1 className="text-2xl block text-center mb-4">Izaberite kategoriju nekretnine</h1>
            <div className="grid grid-cols-2 gap-5 max-w-fit mx-auto">
                {
                    realEstate.map((property,index) => (
                        <div key={index} className='flex gap-4 p-3 rounded text-sm items-center border-[1px] border-gray-100 max-w-[200px] cursor-pointer hover:shadow-sm transition-shadow'>
                            <img src={property.icon} width={25}/>
                            <p>{property.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default FirstStepRealEstate;