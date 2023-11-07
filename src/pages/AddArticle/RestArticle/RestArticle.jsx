import { useState } from "react";
import CreateArticleLayout from "../../../components/Layouts/CreateLayout";
import FirstStepRest from "./RestSteps/firstStepRest";
import SecondStepRest from "./RestSteps/secondStepRest";

const RestArticle = () => {
    const [step,setStep] = useState(1);
    const [progress,setProgress] = useState(50);

    const prevStep = () => {
        if(step <=1) { 
            setStep(1);
            setProgress(50)
        } 
        else{ 
            setStep(step-1);
            setProgress(progress-50)
        } 
    }
    const nextStep = () => {
        if(step >=2) { 
            setStep(2);
            setProgress(100)
        }
        else{ 
            setStep(step+1);
            setProgress(progress+50)
        }
    }

    return (
        <CreateArticleLayout previousStep={prevStep} nextStep={nextStep} progress={progress}>
            {step == 1 && <FirstStepRest/>}
            {step == 2 && <SecondStepRest/>}
        </CreateArticleLayout>
     );
}
 
export default RestArticle;