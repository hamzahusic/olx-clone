import { useState } from "react";
import CreateArticleLayout from "../../../components/Layouts/CreateLayout";
import FirstStepRealEstate from "./RealEstateSteps/FirstStepRealEstate";
import SecondStepRealEstate from "./RealEstateSteps/SecondStepRealEstate";

const RealState = () => {

    const [step,setStep] = useState(1);
    const [progress,setProgress] = useState(25);

    const prevStep = () => {
        if(step <=1) { setStep(1); setProgress(25)} 
        else{ setStep(step-1);setProgress(progress-25)} 
    }
    const nextStep = () => {
        if(step >=4) { setStep(4);setProgress(100)}
        else{ setStep(step+1);setProgress(progress+25)}
    }

    const RealEstateSteps = () => {
        switch(step){
            case 1 : 
                return <FirstStepRealEstate/>
            break;   
            case 2 : 
                return <SecondStepRealEstate/>
            break;
            case 3 : 
                return <div>TRECA</div>
            break;
            case 4 :
                return <div>CETVRTA</div>
            break;
            default:
        }
    }

    return ( 
        <CreateArticleLayout previousStep={prevStep} nextStep={nextStep} progress={progress}>
            <RealEstateSteps/>
        </CreateArticleLayout>
     );
}
 
export default RealState;