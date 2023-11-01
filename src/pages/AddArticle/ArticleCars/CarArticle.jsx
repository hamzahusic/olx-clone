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
   
    const prevStep = () => {
        if(step <=1) { setStep(1); setProgress(25)} 
        else{ setStep(step-1);setProgress(progress-25)} 
    }
    const nextStep = () => {
        if(step >=4) { setStep(4);setProgress(100)}
        else{ setStep(step+1);setProgress(progress+25)}
    }


    const CarsSteps = () => {
        switch(step){
            case 1 : 
                return <FirstStepCars 
                            setManufacturer={setManufacturer}
                            manufacture={manufacturer}
                            setModel={setModel}
                            model={model}
                            />
            break;   
            case 2 : 
                return <SecondStepCar 
                            setAvailable={setAvailable}
                            setCondition={setCondition}
                            setLocation={setLocation}
                            setPrice={setPrice}
                            location={location}
                            available={available}
                            price={price}
                            condition={condition}/>
            break;
            case 3 : 
                return <ThirdStepCar/>
            break;
            case 4 :
                return <FourtStepCar/>
            break;
            default:
        }
    }

    return ( 
        <CreateArticleLayout previousStep={prevStep} nextStep={nextStep} progress={progress}>
            <CarsSteps/>
        </CreateArticleLayout>
     );
}
 
export default CarArticle;