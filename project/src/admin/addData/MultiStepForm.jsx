import { useState } from "react";
import FormStep1 from "./steps/FormStep1";
import FormStep2 from "./steps/FormStep2";
import FormStep3 from "./steps/FormStep3";
import FormStep4 from "./steps/FormStep4";
import FormStep5 from "./steps/FormStep5";
import ReviewStep from "./steps/ReviewStep";
import StepIndicator from "./steps/StepIndicator";
import FormStep6 from "./steps/FormStep6";

const totalSteps = 7;

const MultiStepForm = () => {

    const [formStep, setFormStep] = useState(1);

    const handleNext = () => {
        if (formStep < totalSteps) {
            setFormStep(formStep + 1);
        }
    };

    const handlePrev = () => {
        if (formStep > 1) {
            setFormStep(formStep - 1);
        }
    };

    return (
        <>
            <h1>MultiStepForm</h1>
            {/*  steps */}
            {/* <StepIndicator step={formStep} /> */}
        <div className="border"><StepIndicator step={formStep} setStep={setFormStep} /></div>
            

            <div className="border w-230 m-auto p-4">
                {formStep === 1 && <FormStep1 />}
                {formStep === 2 && <FormStep2 />}
                {formStep === 3 && <FormStep3 />}
                {formStep === 4 && <FormStep4 />}
                {formStep === 5 && <FormStep5 />}
                {formStep === 6 && <FormStep6 />}
                {formStep === 7 && <ReviewStep />}
            </div>

            <div className="border w-230 h-9 m-auto relative">

                {formStep > 1 && (
                    <button className="border absolute left-4 h-full px-4 font-medium text-primary border-text-primary cursor-pointer" onClick={handlePrev}>
                        Back
                    </button>
                )}

                <div className="absolute right-4 flex gap-2 h-full">
                    <button className="border h-full px-4 font-medium text-primary border-text-primary cursor-pointer">
                        Save Draft
                    </button>

                    {formStep < totalSteps ? (
                        <button className="border h-full px-4 font-medium text-primary border-text-primary cursor-pointer" onClick={handleNext}>
                            Next
                        </button>
                    ) : (
                        <button className="border h-full px-4 font-medium text-primary border-text-primary cursor-pointer">
                            Publish Report
                        </button>
                    )}
                </div>

            </div>
        </>
    );
};

export default MultiStepForm;
