import { useState } from "react";

const FormStep6 = ({
    setStatus,
    fHomepage,
    setFHomepage,
    seoSlug,
    setSeoSlug,
    seoTitle,
    setSeoTitle,
    seoKeywords,
    setSeoKeywords,
    seoDescription,
    setSeoDescription,
    error
}) => {

    return (
        <>
            <div className="border w-full m-auto flex flex-col gap-5">
                <div className="border">
                    <h1 className="text-24 font-medium text-primary">Publish Setting (form setp6)</h1>
                    <p className="text-16 font-regular text-primary">ow you want to publish this report</p>
                </div>

                {/* field1 */}
                <div className="border p-2">
                    <label className="text-16 font-medium text-primary block mb-1">
                        Status
                    </label>

                    <div className="flex gap-6 border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="status"
                                value="Draft"
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <span>Draft</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            {/* <input type="radio" name="previewAvailable" value="false" className="accent-blue-600" /> */}
                            <input
                                type="radio"
                                name="status"
                                value="Published"
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <span>Published</span>
                        </label>
                    </div>
                </div>

                {/* field2 */}
                <div className="border p-2">
                    <label className="text-16 font-medium text-primary block mb-1">
                        Feature on Homepage*
                    </label>

                    <div className="flex gap-6 border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            {/* <input type="radio" name="previewAvailable" value="true" className="accent-blue-600" /> */}
                            <input
                                type="radio"
                                name="fHomepage"
                                value="true"
                                checked={fHomepage === true}
                                onChange={() => setFHomepage(true)}
                            />
                            <span>True</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            {/* <input type="radio" name="previewAvailable" value="false" className="accent-blue-600" />
                            <span>False</span> */}
                            <input
                                type="radio"
                                name="fHomepage"
                                value="false"
                                checked={fHomepage === false}
                                onChange={() => setFHomepage(false)}
                            />
                            <span>False</span>
                        </label>

                        {error && fHomepage === null && (
                            <p className="text-red-500 ml-1">Please select Homepage option</p>
                        )}
                    </div>
                </div>

                {/* field3 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="reportTitle">SEO Slug* <sup>*</sup>
                    </label>
                    <input type="text" id="reportTitle" className="w-full border h-10 px-0.5 text-20" placeholder="Enter SEO Slug" value={seoSlug} onChange={(e) => setSeoSlug(e.target.value)} />
                    {error && !seoSlug && <p className="text-red-500 ml-1">Please Enter SEO Slug...</p>}
                </div>

                {/* field4 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="reportTitle">SEO Title <sup>*</sup>
                    </label>
                    <input type="text" id="reportTitle" className="w-full border h-10 px-0.5 text-20" placeholder="Enter SEO Title" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} />
                    {error && !seoTitle && <p className="text-red-500 ml-1">Please Enter SEO Title...</p>}
                </div>


                {/* field5 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="reportTitle">SEO Keywords <sup>*</sup>
                    </label>
                    <input type="text" id="reportTitle" className="w-full border h-10 px-0.5 text-20" placeholder="Enter SEO Keywords" value={seoKeywords} onChange={(e) => setSeoKeywords(e.target.value)} />
                    {error && !seoKeywords && <p className="text-red-500 ml-1">Please Enter SEO Keywords...</p>}
                </div>

                {/* field6 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="reportTitle">SEO Description <sup>*</sup>
                    </label>
                    <input type="text" id="reportTitle" className="w-full border h-10 px-0.5 text-20" placeholder="Enter SEO Description" value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} />
                    {error && !seoDescription && <p className="text-red-500 ml-1">Please Enter SEO Description...</p>}
                </div>

            </div>
        </>
    )
}
export default FormStep6;