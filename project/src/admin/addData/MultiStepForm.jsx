import { useEffect, useState } from "react";
import FormStep1 from "./steps/FormStep1";
import FormStep2 from "./steps/FormStep2";
import FormStep3 from "./steps/FormStep3";
import FormStep4 from "./steps/FormStep4";
import FormStep5 from "./steps/FormStep5";
import ReviewStep from "./steps/ReviewStep";
import StepIndicator from "./steps/StepIndicator";
import FormStep6 from "./steps/FormStep6";
import { nURL } from "../../URL";

const totalSteps = 7;

const MultiStepForm = () => {

    const [formStep, setFormStep] = useState(1);


    const [error, setError] = useState(false);

    // use form data in step 3 and 4

    // formstep1 state
    // const [insertNew, setInsertNew] = useState("");  // change it  radio
    const [reportTitle, setReportTitle] = useState("");  // text
    const [subTitle, setSubTitle] = useState("");  // text
    const [industry, setIndustry] = useState("");  // dropdown
    const [subIndustry, setSubIndustry] = useState("");  // dropdown
    const [regions, setRegions] = useState([]);  // multiselect
    const [country, setCountry] = useState([]);  // multiselect
    const [reportType, setReportType] = useState("");  // dropdown
    const [publishDate, setPublishDate] = useState("");  // text
    const [coveragePeriodFrom, setCoveragePeriodFrom] = useState("");  // text
    const [coveragePeriodTo, setCoveragePeriodTo] = useState("");  // text

    // formstep2 state
    const [reportCovers, setReportCovers] = useState([]);  // multiselect
    const [reportSupports, setReportSupports] = useState([]);  // multiselect


    // formstep3 state
    const [availableReports, setAvailableReports] = useState("");
    const [uploadedFile, setUploadedFile] = useState(null);

    const [samplePDF, setSamplePDF] = useState(null);  // SamplePDF file
    const [image, setImage] = useState(null);  // image file
    const [charts, setCharts] = useState(null);  // charts file

    // formstep4 state
    const [sectionName, setSectionName] = useState("");  // dropdown
    const [sectionGroup, setSectionGroup] = useState("");  // dropdown
    const [shortDescription, setShortDescription] = useState("");  // text
    const [previewAvailable, setPreviewAvailable] = useState(null);  // boolean
    const [sDescription, setSDescription] = useState("");  // text
    const [fullReport, setFullReport] = useState(null);  // boolean
    const [sectionPDF, setSectionPDF] = useState(null);  // image file

    // formstep5 state
    const [reportPrice, setReportPrice] = useState("");  // text

    // formstep6 state
    const [status, setStatus] = useState("");  // radio btn
    const [fHomepage, setFHomepage] = useState(null);  // boolean
    const [seoSlug, setSeoSlug] = useState("");  // text
    const [seoTitle, setSeoTitle] = useState("");  // text
    const [seoKeywords, setSeoKeywords] = useState("");  // text
    const [seoDescription, setSeoDescription] = useState("");  // text

    // step1 data (complete)
    // console.log("1", reportTitle);
    // console.log("2", subTitle);
    // console.log("3", industry);
    // console.log("4", subIndustry);
    // console.log("5", regions);
    // console.log("6", country);
    // console.log("7", reportType);
    // console.log("8", publishDate);
    // console.log("9", coveragePeriodFrom);
    // console.log("10", coveragePeriodTo);


    // step2 data (complete)
    // console.log("1", reportCovers);
    // console.log("2", reportSupports);


    // step3 data (complete) FormData
    // console.log("1", samplePDF);
    // console.log("2", image);
    // console.log("3", charts);


    // step4 data (complete) FormData
    // console.log("1", sectionName);
    // console.log("2", sectionGroup);
    // console.log("3", shortDescription);
    // console.log("4", previewAvailable);
    // console.log("5", sDescription);
    // console.log("6", fullReport);
    // console.log("7", sectionPDF);

    // step5 data (complete)
    // console.log("1", reportPrice);


    // step6 data (complete)
    // console.log("1", status);
    // console.log("2", fHomepage);
    // console.log("3", seoSlug);
    // console.log("4", seoTitle);
    // console.log("5", seoKeywords);
    // console.log("6", seoDescription);

    // const handleClick = () => {
    //     console.log("2", availableReports);
    //     console.log("1", uploadedFile);
    //     console.log("3", samplePDF);
    //     console.log("4", image);
    //     console.log("5", charts);
    // }


    // const handleNext = () => {
    //     if (formStep < totalSteps) {
    //         setFormStep(formStep + 1);
    //     }
    // };


    const handleNext = async () => {
        try {

            // step1  // see regions and country
            if (formStep === 1) {
                if (!reportTitle || !subTitle || !industry || !subIndustry || regions.length === 0 || country.length === 0 || !reportType || !publishDate || !coveragePeriodFrom || !coveragePeriodTo) {
                    setError(true);
                    return;
                }

                // for test only
                // try{
                //     let result = await fetch("https://andy-joint-playlist-commerce.trycloudflare.com/reports/step1/save-draft",{
                //         method:"POST",
                //         body:JSON.stringify({reportTitle, subTitle, industry, subIndustry, regions, country, reportType, publishDate, coveragePeriodFrom, coveragePeriodTo}),
                //         headers:{"Content-Type":"application/json"},
                //         credentials:"include"
                //     });
                //     let data = await result.json();
                //     console.log(data);
                // }
                // catch(err){
                //     console.log("Something went wrong");
                // }
                
                setError(false);
                console.log(reportTitle, subTitle, industry, subIndustry, regions, country, reportType, publishDate, coveragePeriodFrom, coveragePeriodTo);
            }

            // step2
            if (formStep === 2) {
                if (reportCovers.length === 0 || reportSupports.length === 0) {
                    setError(true); // generic error message
                    return;
                }
                setError(false);
                console.log(reportCovers, reportSupports);
            }

            // step3
            // if (formStep === 3) {
            //     if (!availableReports || !uploadedFile || !samplePDF) {
            //         setError(true);
            //         //setErrorMessage("Please fill all required fields in Step 3");
            //         return;
            //     }
            //     console.log(reportTitle, subTitle, industry, subIndustry, regions, country, reportType, publishDate, coveragePeriodFrom, coveragePeriodTo);
            // }

            // if (formStep === 3) {
            //     if (!availableReports && !uploadedFile) {
            //         setError(true);
            //         //setErrorMessage("Please select a report or upload a file");
            //         return;
            //     }

            //     if (uploadedFile) {
            //         // File type check
            //         if (uploadedFile.type !== "application/pdf") {
            //             setError(true);
            //             setErrorMessage("Uploaded file must be a PDF");
            //             return;
            //         }
            //     }

            //     // Agar validation pass
            //     setError(false);
            //     setErrorMessage("");
            // }

            if (formStep === 3) {
                // Check ki user ya to dropdown select kare ya file upload kare
                if (!availableReports && !uploadedFile) {
                    setError(true);
                    // setErrorMessage("Please select a report or upload a file");
                    return;
                }

                // uploadedFile validation (PDF)
                if (uploadedFile) {
                    if (uploadedFile.type !== "application/pdf") {
                        setError(true);
                        //setErrorMessage("Uploaded file must be a PDF");
                        return;
                    }
                }

                // samplePDF validation (PDF)
                if (!samplePDF) {
                    setError(true);
                    setErrorMessage("Please upload the Sample PDF");
                    return;
                } else if (samplePDF.type !== "application/pdf") {
                    setError(true);
                    setErrorMessage("Sample PDF must be a PDF file");
                    return;
                }

                // image validation (WEBP)
                if (image) {
                    if (image.type !== "image/webp") {
                        setError(true);
                        setErrorMessage("Image must be a WEBP file");
                        return;
                    }
                }

                // File validation for sectionPDF (if file uploaded)
                if (charts) {
                    // Allowed types: pdf only
                    if (charts.type !== "application/pdf") {
                        setError(true);
                        //setErrorMessage("Section PDF must be a PDF file");
                        return;
                    }
                }

                setError(false);

                // Agar sab pass ho gaya
                // setError(false);
                // setErrorMessage("");
                console.log(availableReports, uploadedFile, samplePDF, image, charts);
            }





            // step4
            // if (formStep === 4) {
            //     if (!reportTitle || !subTitle || !industry || !subIndustry || !regions || !country || !reportType || !publishDate || !coveragePeriodFrom || !coveragePeriodTo) {
            //         setError(true);
            //         return;
            //     }
            //     console.log(reportTitle, subTitle, industry, subIndustry, regions, country, reportType, publishDate, coveragePeriodFrom, coveragePeriodTo);
            // }

            if (formStep === 4) {
                // Required fields check
                if (!sectionName || !sectionGroup || !shortDescription || !sDescription) {
                    setError(true);
                    //setErrorMessage("Please fill all required fields in Step 4");
                    return;
                }

                // Boolean fields validation (optional)
                if (previewAvailable === null) {
                    setError(true);
                    //setErrorMessage("Please select preview availability and full report option");
                    return;
                }

                // File validation for sectionPDF (if file uploaded)
                if (sectionPDF) {
                    // Allowed types: pdf only
                    if (sectionPDF.type !== "application/pdf") {
                        setError(true);
                        //setErrorMessage("Section PDF must be a PDF file");
                        return;
                    }
                }
                setError(false);
                // setError(false);
                // setErrorMessage("");
                console.log(sectionName, sectionGroup, shortDescription, previewAvailable, sDescription, fullReport, sectionPDF);
            }


            // step5
            if (formStep === 5) {
                // if (!reportPrice) {
                //     setError(true);
                //     return;
                // }
                console.log(reportPrice);
            }

            // step6
            // if (formStep === 6) {
            //     if (!reportTitle || !subTitle || !industry || !subIndustry || !regions || !country || !reportType || !publishDate || !coveragePeriodFrom || !coveragePeriodTo) {
            //         setError(true);
            //         return;
            //     }
            //     console.log(reportTitle, subTitle, industry, subIndustry, regions, country, reportType, publishDate, coveragePeriodFrom, coveragePeriodTo);
            // }


            if (formStep === 6) {
                if (!seoSlug || !seoTitle || !seoKeywords || !seoDescription) {
                    setError(true);
                    //setErrorMessage("Please fill all required fields in Step 6");
                    return;
                }

                // Optional boolean field check
                if (fHomepage === null) {
                    setError(true);
                    //setErrorMessage("Please select whether to feature on homepage");
                    return;
                }

                setError(false);
                // setError(false);
                // setErrorMessage("");
                console.log(status, seoSlug, seoTitle, seoKeywords, seoDescription, fHomepage);
            }


            if (formStep < totalSteps) setFormStep(formStep + 1);
        }
        catch (err) {
            console.log("something went wrong");
        }
    };

    const handlePrev = () => {
        if (formStep > 1) {
            setFormStep(formStep - 1);
        }
    };





    // for test 
    const authMe = async() => {
            try {
                const result = await fetch(`${nURL}/auth/me`, {
                    method: "GET",
                    // headers: { "Content-Type": "application/json" },
                    credentials: "include"
                });
    
                const data = await result.json();
    
                console.log("auth: ",data);
    
                // if (data.message) {
                //     alert(data.message);
                //     navigate("/login");
                // }
    
            } catch (err) {
                console.error("Something went wrong:", err.message);
            }
        }
    
        useEffect(() => {
            authMe();
        }, []);

    return (
        <>
            {/*  steps */}
            <div className="border hidden lg:block"><StepIndicator step={formStep} setStep={setFormStep} /></div>


            <div className="border w-80 sm:w-160 md:w-190 lg:w-230 m-auto p-2">
                {formStep === 1 && <FormStep1
                    reportTitle={reportTitle} setReportTitle={setReportTitle}
                    subTitle={subTitle} setSubTitle={setSubTitle}
                    industry={industry} setIndustry={setIndustry}
                    subIndustry={subIndustry} setSubIndustry={setSubIndustry}
                    regions={regions} setRegions={setRegions}
                    country={country} setCountry={setCountry}
                    reportType={reportType} setReportType={setReportType}
                    publishDate={publishDate} setPublishDate={setPublishDate}
                    coveragePeriodFrom={coveragePeriodFrom} setCoveragePeriodFrom={setCoveragePeriodFrom}
                    coveragePeriodTo={coveragePeriodTo} setCoveragePeriodTo={setCoveragePeriodTo}
                    error={error}
                />}
                {formStep === 2 && <FormStep2
                    reportCovers={reportCovers} setReportCovers={setReportCovers}
                    reportSupports={reportSupports} setReportSupports={setReportSupports}
                    error={error}
                />}
                {formStep === 3 && <FormStep3
                    availableReports={availableReports}
                    setAvailableReports={setAvailableReports}
                    uploadedFile={uploadedFile}
                    setUploadedFile={setUploadedFile}
                    samplePDF={samplePDF}
                    setSamplePDF={setSamplePDF}
                    image={image}
                    setImage={setImage}
                    charts={charts}
                    setCharts={setCharts}
                    error={error}
                />}
                {formStep === 4 && <FormStep4
                    sectionName={sectionName}
                    setSectionName={setSectionName}
                    sectionGroup={sectionGroup}
                    setSectionGroup={setSectionGroup}
                    shortDescription={shortDescription}
                    setShortDescription={setShortDescription}
                    previewAvailable={previewAvailable}
                    setPreviewAvailable={setPreviewAvailable}
                    sDescription={sDescription}
                    setSDescription={setSDescription}
                    fullReport={fullReport}
                    setFullReport={setFullReport}
                    sectionPDF={sectionPDF}
                    setSectionPDF={setSectionPDF}
                    error={error}
                />}
                {formStep === 5 && <FormStep5
                    reportPrice={reportPrice}
                    setReportPrice={setReportPrice}
                    error={error}
                />}
                {formStep === 6 && <FormStep6
                    setStatus={setStatus}
                    fHomepage={fHomepage} setFHomepage={setFHomepage}
                    seoSlug={seoSlug} setSeoSlug={setSeoSlug}
                    seoTitle={seoTitle} setSeoTitle={setSeoTitle}
                    seoKeywords={seoKeywords} setSeoKeywords={setSeoKeywords}
                    seoDescription={seoDescription} setSeoDescription={setSeoDescription}
                    error={error}
                />}
                {formStep === 7 && <ReviewStep />}
            </div>


            <div className="border w-80 sm:w-160 md:w-190 lg:w-230 h-9 m-auto relative my-6">

                {formStep > 1 && (
                    <button className="border absolute left-2 h-full px-4 font-medium text-primary border-text-primary cursor-pointer" onClick={handlePrev}>
                        Back
                    </button>
                )}

                <div className="absolute right-2 flex gap-2 h-full">
                    <button className="border h-full px-4 font-medium text-primary border-text-primary cursor-pointer">
                        Save Draft
                    </button>

                    {formStep < totalSteps ? (
                        <button className="border h-full px-4 font-medium text-primary border-text-primary cursor-pointer" onClick={handleNext}>
                            Next
                        </button>
                    ) : (
                        <button className="border h-full px-4 font-medium text-primary border-text-primary cursor-pointer text-xs sm:text-16">
                            Publish Report
                        </button>
                    )}
                </div>

            </div>
        </>
    );
};

export default MultiStepForm;