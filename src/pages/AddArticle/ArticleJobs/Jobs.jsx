import { useState } from "react";
import CreateArticleLayout from "../../../components/Layouts/CreateLayout";
import FirstStepJobs from "./JobsSteps/FirstStepJob";
import SecondStepJobs from "./JobsSteps/SecondStepJobs";
import ThridStepJobs from "./JobsSteps/ThirdStepJobs";

const ArticleJobs = () => {

    const [step,setStep] = useState(1);
    const [progress,setProgress] = useState(33);

    const prevStep = () => {
        if(step <=1) { setStep(1); setProgress(33)} 
        else{ setStep(step-1);setProgress(progress-33)} 
    }
    const nextStep = () => {
        if(step >=3) { setStep(3);setProgress(100)}
        else{ setStep(step+1);setProgress(progress+33)}
    }

    const JobsSteps = () => {
        switch(step){
            case 1 : 
                return <FirstStepJobs/>
            break;   
            case 2 : 
                return <SecondStepJobs/>
            break;
            case 3 : 
                return <ThridStepJobs/>
            break;
            default:
        }
    }

    return ( 
        <CreateArticleLayout previousStep={prevStep} nextStep={nextStep} progress={progress}>
            <JobsSteps/>
        </CreateArticleLayout>
     );
}
 
export default ArticleJobs;