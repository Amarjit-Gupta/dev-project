import { useState } from "react";
import FileUpload from "./FileUpload";
const FormStep4 = () => {

    const [formData, setFormData] = useState({
        sectionPdf: null,
    });

    console.log(formData);


    return (
        <>
            <div className="border-2 border-red-500 w-full m-auto flex flex-col gap-5">
                <div className="border">
                    <h1 className="text-24 font-medium text-primary">Define Report Sections (form setp4)</h1>
                    <p className="text-16 font-regular text-primary">Enable modular selling</p>
                </div>

                {/* field1 */}
                <div className="border">
                    <label className="text-15 font-medium text-primary" htmlFor="reportType">
                        Section Name <sup>*</sup>
                    </label>
                    <select className="w-full mt-1 border h-10 text-20" id="reportType">
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                        <option value="option4">option4</option>
                        <option value="option5">option5</option>
                    </select>
                </div>

                {/* field2 */}
                <div className="border">
                    <label className="text-15 font-medium text-primary" htmlFor="reportType">
                        Section Group <sup>*</sup>
                    </label>
                    <select className="w-full mt-1 border h-10 text-20" id="reportType">
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                        <option value="option4">option4</option>
                        <option value="option5">option5</option>
                    </select>
                </div>

                {/* field3 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="reportTitle">Short Description <sup>*</sup>
                    </label>
                    <input type="text" id="reportTitle" className="w-full border h-10 px-0.5 text-20" placeholder="Enter short description" />
                </div>

                {/* field3 */}
                <div className="border p-2">
                    <label className="text-16 font-medium text-primary block mb-1">
                        Preview Available? <sup>*</sup>
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


                {/* field4 */}
                <div className="border flex justify-between gap-5">
                    {/* childfield1 */}
                    <div className="border w-1/2">
                        <label className="text-16 font-medium text-primary" htmlFor="reportTitle">Short Description <sup>*</sup>
                        </label><br />
                        <input type="text" id="reportTitle" className="w-full border h-10 px-0.5 text-20" placeholder="Enter short description" />
                    </div>

                    {/* childfield2 */}
                    <div className="border p-2 w-1/2">
                        <label className="text-16 font-medium text-primary block mb-1">
                            Included in full report
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
                </div>

                {/* field4 */}
                <div className="border">
                    <FileUpload
                        label="Upload Section PDF"
                        file={formData.sectionPdf}
                        onChange={(file) =>
                            setFormData({ ...formData, sectionPdf: file })
                        }
                    />
                </div>


                <div>
                    <button className="border p-1 font-medium text-primary text-20">+ Add Section</button>
                </div>

            </div>
        </>
    )
}
export default FormStep4;