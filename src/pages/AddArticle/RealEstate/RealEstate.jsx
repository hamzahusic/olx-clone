import { useState } from "react";
import CreateArticleLayout from "../../../components/Layouts/CreateLayout";
import FirstStepRealEstate from "./RealEstateSteps/FirstStepRealEstate";
import SecondStepRealEstate from "./RealEstateSteps/SecondStepRealEstate";
import ThirdStepRealEstate from "./RealEstateSteps/ThirdStepRealEstate";
import FourtStepRealEstate from "./RealEstateSteps/FourthStepRealEstate";
import FifthStepRealEstate from "./RealEstateSteps/FifthStepRealEstate";

const RealState = () => {

    const [step,setStep] = useState(1);
    const [progress,setProgress] = useState(20);

    const prevStep = () => {
        if(step <=1) { setStep(1); setProgress(20)} 
        else{ setStep(step-1);setProgress(progress-20)} 
    }
    const nextStep = () => {
        if(step >=5) { setStep(5);setProgress(100)}
        else{ setStep(step+1);setProgress(progress+20)}
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
                return <ThirdStepRealEstate/>
            break;
            case 4 :
                return <FourtStepRealEstate/>
            break;
            case 5 :
                return <FifthStepRealEstate/>
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