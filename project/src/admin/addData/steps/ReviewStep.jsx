// const ReviewStep = ({ draftId,
//     reportTitle,
//     subTitle,
//     industry,
//     subIndustry,
//     regions,
//     country,
//     reportType,
//     publishDate,
//     coveragePeriodFrom,
//     coveragePeriodTo,
//     reportCovers,
//     reportSupports,
//     availableReports,
//     sectionName,
//     sectionGroup,
//     shortDescription,
//     previewAvailable,
//     sDescription,
//     fullReport,
//     sectionPDF,
//     reportPrice,
//     status,
//     fHomepage,
//     seoSlug,
//     seoTitle,
//     seoKeywords,
//     seoDescription,
//     uploadedFile,
//     samplePDF,
//     image,
//     charts }) => {


//     return (
//         <>
//             <h1>ReviewStep</h1>

//             {/* step1 */}
//             <div className="border border-red-500">
//                 <h1 className="text-20 font-medium text-center">Step1</h1>
//             </div>
//             <div className="border border-red-500">
//                 <div className="border">
//                     <p className="border py-1"><span className="font-medium">Title: </span>{reportTitle || ""}</p>
//                     <p className="border py-1"><span className="font-medium">Subtitle: </span>{subTitle || ""}</p>
//                     <p className="border py-1"><span className="font-medium">Industry Name: </span>{industry || ""}</p>
//                     <p className="border py-1"><span className="font-medium">Subindustry Name: </span>{subIndustry || ""}</p>
//                     <p className="border py-1"><span className="font-medium">Region: </span>{regions?.map((v, i) => <span key={i}> {v}, </span>)}</p>
//                     <p className="border py-1"><span className="font-medium">Country: </span>{country?.map((v, i) => <span key={i}> {v}, </span>)}</p>
//                     <p className="border py-1"><span className="font-medium">Report Type: </span>{reportType || ""}</p>
//                     <p className="border py-1"><span className="font-medium">publish_date: </span>{publishDate || ""}</p>
//                     <p className="border py-1"><span className="font-medium">Coverage Period (From):  </span>{coveragePeriodFrom || ""}</p>
//                     <p className="border py-1"><span className="font-medium">Coverage Period (To):  </span>{coveragePeriodTo || ""}</p>
//                 </div>
//             </div>


//             {/* step2 */}
//             <div className="border border-red-500">
//                 <h1 className="text-20 font-medium text-center">Step2</h1>
//             </div>
//             <div className="border border-red-500">
//                 <div className="border">
//                     <p className="border py-1"><span className="font-medium">Report Covers: </span>{reportCovers?.map((v, i) => <span key={i}> {v}, </span>)}</p>
//                     <p className="border py-1"><span className="font-medium">Report Supports: </span>{reportSupports?.map((v, i) => <span key={i}> {v}, </span>)}</p>
//                 </div>
//             </div>

//             {/* step3 */}
//             <div className="border border-red-500">
//                 <h1 className="text-20 font-medium text-center">Step3</h1>
//             </div>
//             <div className="border border-red-500">
//                 <div className="border">
//                     <p className="border py-1">
//                         <span className="font-medium">Report Files: </span>
//                         {availableReports ? availableReports : uploadedFile ? uploadedFile.name : ""}
//                     </p>

//                     <p className="border py-1"><span className="font-medium">Sample PDF: </span>{samplePDF?.name}</p>
//                     <p className="border py-1"><span className="font-medium">Image: </span>{image?.name}</p>
//                     <p className="border py-1"><span className="font-medium">charts: </span>{charts?.name}</p>
//                 </div>
//             </div>

//             {/* step4 */}
//             <div className="border border-red-500">
//                 <h1 className="text-20 font-medium text-center">Step4</h1>
//             </div>
//             <div className="border border-red-500">
//                 <div className="border">
//                     <p className="border py-1"><span className="font-medium">Null</span></p>
//                 </div>
//             </div>

//             {/* step5 */}
//             <div className="border border-red-500">
//                 <h1 className="text-20 font-medium text-center">Step5</h1>
//             </div>
//             <div className="border border-red-500">
//                 <div className="border">
//                     <p className="border py-1"><span className="font-medium">Full Report Price: </span>{reportPrice || ""}</p>
//                 </div>
//             </div>


//             {/* step6 */}
//             <div className="border border-red-500">
//                 <h1 className="text-20 font-medium text-center">Step6</h1>
//             </div>
//             <div className="border border-red-500">
//                 <div className="border">
//                     <p className="border py-1"><span className="font-medium">Status: </span>{status || ""}</p>
//                     <p className="border py-1"><span className="font-medium">Feature on Homepage: </span>{fHomepage === true ? "True" : "False"}</p>
//                     <p className="border py-1"><span className="font-medium">SEO Slug: </span>{seoSlug || ""}</p>
//                     <p className="border py-1"><span className="font-medium">SEO Title: </span>{seoTitle || ""}</p>
//                     <p className="border py-1"><span className="font-medium">SEO Keywords: </span>{seoKeywords || ""}</p>
//                     <p className="border py-1"><span className="font-medium">SEO Description: </span>{seoDescription || ""}</p>
//                 </div>
//             </div>

//         </>
//     );
// };
// export default ReviewStep;









import { useState } from "react";

const ReviewStep = ({
  reportTitle,
  subTitle,
  industry,
  subIndustry,
  regions,
  country,
  reportType,
  publishDate,
  coveragePeriodFrom,
  coveragePeriodTo,
  reportCovers,
  reportSupports,
  availableReports,
  reportPrice,
  status,
  fHomepage,
  seoSlug,
  seoTitle,
  seoKeywords,
  seoDescription,
  uploadedFile,
  samplePDF,
  image,
  charts
}) => {

  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (step) => {
    setOpenStep(openStep === step ? null : step);
  };

  return (
    <>
      <h1 className="text-24 font-bold mb-4">ReviewStep</h1>

      {/* STEP 1 */}
      <div className="border mb-3">
        <button
          onClick={() => toggleStep(1)}
          className="w-full flex justify-between px-3 py-2 font-medium bg-gray-100"
        >
          <span>Step1</span>
          <span>{openStep === 1 ? "−" : "+"}</span>
        </button>

        <div className={`transition-all duration-300 overflow-hidden ${openStep === 1 ? "h-auto p-3" : "h-0 px-3"}`}>
          <p><b>Title:</b> {reportTitle}</p>
          <p><b>Subtitle:</b> {subTitle}</p>
          <p><b>Industry Name:</b> {industry}</p>
          <p><b>Subindustry Name:</b> {subIndustry}</p>
          <p><b>Region:</b> {regions?.join(", ")}</p>
          <p><b>Country:</b> {country?.join(", ")}</p>
          <p><b>Report Type:</b> {reportType}</p>
          <p><b>Publish Date:</b> {publishDate}</p>
          <p><b>Coverage From:</b> {coveragePeriodFrom}</p>
          <p><b>Coverage To:</b> {coveragePeriodTo}</p>
        </div>
      </div>

      {/* STEP 2 */}
      <div className="border mb-3">
        <button
          onClick={() => toggleStep(2)}
          className="w-full flex justify-between px-3 py-2 font-medium bg-gray-100"
        >
          <span>Step2</span>
          <span>{openStep === 2 ? "−" : "+"}</span>
        </button>

        <div className={`transition-all duration-300 overflow-hidden ${openStep === 2 ? "h-auto p-3" : "h-0 px-3"}`}>
          <p><b>Report Covers:</b> {reportCovers?.join(", ")}</p>
          <p><b>Report Supports:</b> {reportSupports?.join(", ")}</p>
        </div>
      </div>

      {/* STEP 3 */}
      <div className="border mb-3">
        <button
          onClick={() => toggleStep(3)}
          className="w-full flex justify-between px-3 py-2 font-medium bg-gray-100"
        >
          <span>Step3</span>
          <span>{openStep === 3 ? "−" : "+"}</span>
        </button>

        <div className={`transition-all duration-300 overflow-hidden ${openStep === 3 ? "h-auto p-3" : "h-0 px-3"}`}>
          <p><b>Report Files:</b> {availableReports || uploadedFile?.name}</p>
          <p><b>Sample PDF:</b> {samplePDF?.name}</p>
          <p><b>Image:</b> {image?.name}</p>
          <p><b>Charts:</b> {charts?.name}</p>
        </div>
      </div>

      {/* STEP 5 */}
      <div className="border mb-3">
        <button
          onClick={() => toggleStep(5)}
          className="w-full flex justify-between px-3 py-2 font-medium bg-gray-100"
        >
          <span>Step5</span>
          <span>{openStep === 5 ? "−" : "+"}</span>
        </button>

        <div className={`transition-all duration-300 overflow-hidden ${openStep === 5 ? "h-auto p-3" : "h-0 px-3"}`}>
          <p><b>Full Report Price:</b> {reportPrice}</p>
        </div>
      </div>

      {/* STEP 6 */}
      <div className="border mb-3">
        <button
          onClick={() => toggleStep(6)}
          className="w-full flex justify-between px-3 py-2 font-medium bg-gray-100"
        >
          <span>Step6</span>
          <span>{openStep === 6 ? "−" : "+"}</span>
        </button>

        <div className={`transition-all duration-300 overflow-hidden ${openStep === 6 ? "h-auto p-3" : "h-0 px-3"}`}>
          <p><b>Status:</b> {status}</p>
          <p><b>Feature Homepage:</b> {fHomepage ? "True" : "False"}</p>
          <p><b>SEO Slug:</b> {seoSlug}</p>
          <p><b>SEO Title:</b> {seoTitle}</p>
          <p><b>SEO Keywords:</b> {seoKeywords}</p>
          <p><b>SEO Description:</b> {seoDescription}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewStep;
