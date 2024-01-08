import { useState } from "react";
import CreateArticleLayout from "../../../components/Layouts/CreateLayout";
import FirstStepCars from "./CarSteps/firstStepCar";
import SecondStepCar from "./CarSteps/secondStepCar";
import ThirdStepCar from "./CarSteps/thridStepCar";
import FourtStepCar from "./CarSteps/fourthStepCar";
import PopUp from "../../../components/PopUp";
import checkIcon from "../../../assets/check-mark.png"
import wrongIcon from '../../../assets/cross.png'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CarArticle = () => {

    const [step,setStep] = useState(1);
    const [progress,setProgress] = useState(25);
    //ALL DATA FOR PUBLISHING CAR
    //FIRST PAGE
    const [manufacturer,setManufacturer] = useState('');
    const [model,setModel] = useState('');
    //SECOND PAGE
    const [location,setLocation] = useState('');
    const [available,setAvailable] = useState(false);
    const [condition,setCondition] = useState('Novo');
    const [price,setPrice] = useState(0);
    //THIRD PAGE
    const [naslov,setNaslov] = useState('');
    const [kilometraza,setKilometraza] = useState('');
    const [brojVrata,setBrojVrata] = useState('');
    const [kubikaza,setKubikaza] = useState(0);
    const [godiste,setGodiste] = useState('');
    const [kilovata,setKilovata] = useState(0);
    const [gorivo,setGorivo] = useState('');
    const [konja,setKonja] = useState(0);
    const [transmisija,setTransmisija] = useState('');
    const [tip,setTip] = useState('');
    const [registrovanDo,setRegistrovanDo] = useState(new Date().toLocaleDateString());
    const [velicinaFelgi,setVelicinaFelgi] = useState(0);
    const [euro,setEuro] = useState(0);
    const [pogon,setPogon] = useState('');
    const [mjesta,setMjesta] = useState(0);
    const [opis,setOpis] = useState('');
    const [checkBoxValue,setCheckBoxValue] = useState([]);
    //FOURTH PAGE
    const [slike,setSlike] = useState([])
    //POPUP
    const [objavaPopUp,setObjavaPopUp] = useState(false);
    const [errorPopUp,setErrorPopUp] = useState(false);
    const [createdArticleId,setCreatedArticleId] = useState('');
    const navigate = useNavigate()

    const user = useSelector((state) => state.isLogged)
    
    const prevStep = () => {
        if(step <=1) { 
            setStep(1); 
            setProgress(25)
        } 
        else{ 
            setStep(step-1)
            setProgress(progress-25)
        } 
    }

    const handleObjava = async () => {

        try {
            
            const response = await fetch('http://localhost:8080/api/create/automobili',{
                method: "POST",
                    headers: {
                        "Content-Type": "application/json", 
                    },
                    body: JSON.stringify({
                        proizvodjac:manufacturer,
                        model:model,
                        kilometraza:kilometraza,
                        broj_vrata:brojVrata,
                        godiste:godiste,
                        kubikaza:kubikaza,
                        kilovata:kilovata,
                        gorivo:gorivo,
                        konjskih_snaga:konja,
                        tip:tip,
                        transmisija:transmisija,
                        registrovan_do:registrovanDo,
                        velicina_felgi:velicinaFelgi,
                        euro:euro,
                        pogon:pogon,
                        mjesta:mjesta,
                        naslov:naslov,
                        datum_promjene: new Date(),
                        lokacija:location,
                        dostupno:available,
                        stanje:condition,
                        cijena:price,
                        opis:opis,
                        slika:slike,
                        detalji_checkbox:checkBoxValue,
                        idK:user.idK,
                        proces:"Aktivan"
                    })
            })
            if(!response.ok)
                throw Error("Error publishing article!")

            const data = await response.json()

            setCreatedArticleId(data.id)
            setObjavaPopUp(true)
        } catch (error) {
            console.log(error)
            setErrorPopUp(true);
        }

        
    }

    const nextStep = () => {
        if(step >= 4) {
            setProgress(100)

            if(!manufacturer || !model || !location || price<0 || !naslov || kilometraza<0 || !brojVrata || kubikaza<=0 || !godiste || !kilovata || !gorivo || !slike || !user){
                setErrorPopUp(true)
            }
            else{    
                handleObjava();
            }
            
        }
        else{ 
            setStep(step+1);
            setProgress(progress+25)
        }
    }


    return ( 
        <CreateArticleLayout previousStep={prevStep} nextStep={nextStep} progress={progress}>
            {step == 1 && <FirstStepCars 
                            setManufacturer={setManufacturer}
                            manufacture={manufacturer}
                            setModel={setModel}
                            model={model}
                            />}
            {step == 2 && <SecondStepCar 
                            setAvailable={setAvailable}
                            setCondition={setCondition}
                            setLocation={setLocation}
                            setPrice={setPrice}
                            location={location}
                            available={available}
                            price={price}
                            condition={condition}/>}
            {step == 3 && <ThirdStepCar
                            setNaslov={setNaslov}
                            naslov={naslov}
                            setKilometraza={setKilometraza}
                            kilometraza={kilometraza}
                            setBrojVrata={setBrojVrata}
                            brojVrata={brojVrata}
                            setKubikaza={setKubikaza}
                            kubikaza={kubikaza}
                            setGodiste={setGodiste}
                            godiste={godiste}
                            setKilovata={setKilovata}
                            kilovata={kilovata}
                            setGorivo={setGorivo}
                            gorivo={gorivo}
                            setKonja={setKonja}
                            konja={konja}
                            setTransmisija={setTransmisija}
                            transmisija={transmisija}
                            setTip={setTip}
                            tip={tip}
                            setRegistrovanDo={setRegistrovanDo}
                            registrovanDo={registrovanDo}
                            setVelicinaFelgi={setVelicinaFelgi}
                            velicinaFelgi={velicinaFelgi}
                            setEuro={setEuro}
                            euro={euro}
                            setPogon={setPogon}
                            pogon={pogon}
                            setMjesta={setMjesta}
                            mjesta={mjesta}
                            setOpis={setOpis}
                            opis={opis}
                            setCheckBoxValue={setCheckBoxValue}
                            checkBoxValue={checkBoxValue}
                            />}
            {step == 4 && <FourtStepCar
                            slike={slike}
                            setSlike={setSlike}
            />}
            {objavaPopUp && 
                <PopUp title={"Uspješno objavljen oglas!"} isOpen={objavaPopUp} >
                    <div className="p-5">
                        <img src={checkIcon} alt="" className="max-w-[150px] mx-auto my-5"/>
                        <p className="text-center text-xl">Vaš oglas je objavljen!</p>
                        <div className="flex gap-2 mt-10">
                            <button className="flex-1 border-[1px] border-[var(--pcolor)] py-2 rounded font-semibold" onClick={() => navigate(`/article/${createdArticleId}`)}>Pogledaj oglas</button>
                            <button className="flex-1 border-[1px] border-[var(--pcolor)] py-2 rounded font-semibold text-white bg-[var(--pcolor)]" onClick={() => navigate('/')}>Vrati se na početnu</button>
                        </div>
                    </div>
                </PopUp>
            }
            {errorPopUp && 
                <PopUp title={"Oglas nije objavljen!"} isOpen={errorPopUp} onClose={() => setErrorPopUp(!errorPopUp)}>
                    <div className="p-5">
                        <img src={wrongIcon} alt="" className="max-w-[150px] mx-auto my-5"/>
                        <p className="text-center text-xl">Unesite sve informacije!</p>
                        <p className="text-center">Obavezna polja su označena sa *</p>
                    </div>
                </PopUp>
            }
            
        </CreateArticleLayout>
     );
}
 
export default CarArticle;