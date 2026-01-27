import { IoArrowForwardSharp } from "react-icons/io5";
import MultiSelectDropdown from "./MultiSelectDropDown";
import { useState } from "react";
import FileUpload from "./FileUpload";
const FormStep6 = () => {

    const [formData, setFormData] = useState({
        sectionPdf: null,
    });

    console.log(formData);


    return (
        <>
            <div className="border-2 border-red-500 w-full m-auto flex flex-col gap-5">
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
                            <input type="radio" name="previewAvailable" value="true" className="accent-blue-600" />
                            <span>Draft</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="previewAvailable" value="false" className="accent-blue-600" />
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
                            <input type="radio" name="previewAvailable" value="true" className="accent-blue-600" />
                            <span>True</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="previewAvailable" value="false" className="accent-blue-600" />
                            <span>False</span>
                        </label>
                    </div>
                </div>

                {/* field3 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="reportTitle">SEO Slug* <sup>*</sup>
                    </label>
                    <input type="text" id="reportTitle" className="w-full border h-10 px-0.5 text-20" placeholder="Enter SEO Slug" />
                </div>

                {/* field4 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="reportTitle">SEO Title <sup>*</sup>
                    </label>
                    <input type="text" id="reportTitle" className="w-full border h-10 px-0.5 text-20" placeholder="Enter SEO Title" />
                </div>


                {/* field5 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="reportTitle">SEO Keywords <sup>*</sup>
                    </label>
                    <input type="text" id="reportTitle" className="w-full border h-10 px-0.5 text-20" placeholder="Enter SEO Keywords" />
                </div>

                {/* field6 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="reportTitle">SEO Description <sup>*</sup>
                    </label>
                    <input type="text" id="reportTitle" className="w-full border h-10 px-0.5 text-20" placeholder="Enter SEO Description" />
                </div>

            </div>
        </>
    )
}
export default FormStep6;