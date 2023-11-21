import { useState } from "react";
import CreateArticleLayout from "../../../components/Layouts/CreateLayout";
import FirstStepCars from "./CarSteps/firstStepCar";
import SecondStepCar from "./CarSteps/secondStepCar";
import ThirdStepCar from "./CarSteps/thridStepCar";
import FourtStepCar from "./CarSteps/fourthStepCar";

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
    const [condition,setCondition] = useState('');
    const [price,setPrice] = useState('');
    //THIRD PAGE
    const [naslov,setNaslov] = useState('');
    const [kilometraza,setKilometraza] = useState('');
    const [brojVrata,setBrojVrata] = useState('');
    const [kubikaza,setKubikaza] = useState(0);
    const [godiste,setGodiste] = useState(0);
    const [kilovata,setKilovata] = useState(0);
    const [gorivo,setGorivo] = useState('');
    const [konja,setKonja] = useState(0);
    const [transmisija,setTransmisija] = useState('');
    const [tip,setTip] = useState('');
    const [registrovanDo,setRegistrovanDo] = useState(0);
    const [velicinaFelgi,setVelicinaFelgi] = useState(0);
    const [euro,setEuro] = useState(0);
    const [pogon,setPogon] = useState('');
    const [mjesta,setMjesta] = useState(0);
    const [opis,setOpis] = useState('');
    const [checkBoxValue,setCheckBoxValue] = useState([]);
    

    
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
    const nextStep = () => {
        if(step >=4) {
             setStep(4);
             setProgress(100)
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
            {step == 4 && <FourtStepCar/>}
        </CreateArticleLayout>
     );
}
 
export default CarArticle;