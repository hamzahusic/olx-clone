import { useState } from "react";
import CreateArticleLayout from "../../../components/Layouts/CreateLayout";

const ArticleElectronics = () => {

    const [step,setStep] = useState(1);
    const [progress,setProgress] = useState(33);

    const prevStep = () => {
        if(step <=1) { 
            setStep(1);
            setProgress(33)
        } 
        else{ 
            setStep(step-1);
            setProgress(progress-33)
        } 
    }
    const nextStep = () => {
        if(step >=3) { 
            setStep(3);
            setProgress(100)
        }
        else{ 
            setStep(step+1);
            setProgress(progress+33)
        }
    }


    return ( 
        <CreateArticleLayout previousStep={prevStep} nextStep={nextStep} progress={progress}>
            {step === 1 && <div>FIRST</div>}
            {step === 2 && <div>SECOND</div>}
            {step === 3 && <div>THIRD</div>}
        </CreateArticleLayout>
     );
}
 
export default ArticleElectronics;