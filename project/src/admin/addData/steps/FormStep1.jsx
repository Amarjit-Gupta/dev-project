import { IoArrowForwardSharp } from "react-icons/io5";
import MultiSelectDropdown from "./MultiSelectDropDown";
import { useState } from "react";
const FormStep1 = () => {



    // for select for test only
    const [formData, setFormData] = useState({
        regions: [],
        country: []
    });

    return (
        <>
            <div className="border-2 border-red-500 w-full m-auto flex flex-col gap-5">
                <div className="border">
                    <h1 className="text-24 font-medium text-primary">Basic Report Information (form setp1)</h1>
                    <p className="text-16 font-regular text-primary">Identify the report correctly (SEO + discovery)</p>
                </div>

                {/* field1 */}
                <div className="border flex justify-between items-center gap-4">
                    <div className="flex gap-4 items-center">
                        <span className="flex items-center gap-1">
                            <input type="radio" id="insert" name="dataOption" />
                            <label className="text-15 font-medium text-primary" htmlFor="insert">
                                Insert New
                            </label>
                        </span>
                        <span className="flex items-center gap-1">
                            <input type="radio" id="select" name="dataOption" />
                            <label className="text-15 font-medium text-primary" htmlFor="select">
                                Select from generated data
                            </label>
                        </span>
                    </div>

                    <div>
                        <IoArrowForwardSharp className="text-20 text-primary" />
                    </div>

                    <div className="border w-110">
                        <label className="text-15 font-medium text-primary" htmlFor="options">
                            Report Directory
                        </label>
                        <select className="w-full mt-1 border p-1" id="options">
                            <option value="option1">option1</option>
                            <option value="option2">option2</option>
                            <option value="option3">option3</option>
                            <option value="option4">option4</option>
                            <option value="option5">option5</option>
                        </select>
                    </div>
                </div>

                {/* field2 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="reportTitle">Report Title <sup>*</sup>
                    </label>
                    <input type="text" id="reportTitle" className="w-full border h-10 px-0.5 text-20" placeholder="Enter Report Title" />
                </div>

                {/* field3 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="marketDescription">Subtitle / Market description <sup>*</sup> </label>
                    <input type="text" id="marketDescription" className="w-full border h-10 px-0.5 text-20" placeholder="Enter subtitle / market description" />
                </div>

                {/* field4 */}
                <div className="border">
                    <label className="text-15 font-medium text-primary" htmlFor="options">
                        Industry <sup>*</sup>
                    </label>
                    <select className="w-full mt-1 border h-10 text-20" id="options">
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                        <option value="option4">option4</option>
                        <option value="option5">option5</option>
                    </select>
                </div>


                {/* field5 */}
                <div className="border">
                    <label className="text-15 font-medium text-primary" htmlFor="options">
                        Sub-Industry <sup>*</sup>
                    </label>
                    <select className="w-full mt-1 border h-10 text-20" id="options">
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                        <option value="option4">option4</option>
                        <option value="option5">option5</option>
                    </select>
                </div>

                {/* field6 */}
                <div className="border">
                    <MultiSelectDropdown
                        label="Regions* (Multi select)"
                        options={["Asia", "Europe", "Africa", "North America", "South America", "Middle East", "Southeast Asia", "South Asia", "East Asia", "Oceania (Australia & Pacific region)"]}
                        value={formData.regions}
                        onChange={(val) =>
                            setFormData({ ...formData, regions: val })
                        }
                    />
                </div>

                {/* field7 */}
                <div className="border">
                    <MultiSelectDropdown
                        label="Country* (Multi select)"
                        options={["India", "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Japan", "China", "Brazil"]}
                        value={formData.country}
                        onChange={(val) =>
                            setFormData({ ...formData, country: val })
                        }
                    />
                </div>

                {/* field8 */}
                <div className="border">
                    <label className="text-15 font-medium text-primary" htmlFor="reportType">
                        Report Type <sup>*</sup>
                    </label>
                    <select className="w-full mt-1 border h-10 text-20" id="reportType">
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                        <option value="option4">option4</option>
                        <option value="option5">option5</option>
                    </select>
                </div>

                {/* field9 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="publishDate">Publish Date<sup>*</sup>
                    </label>
                    <input type="text" id="publishDate" className="w-full border h-10 px-0.5 text-20" />
                </div>

                {/* field10 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="coveragePeriodFrom">Coverage Period (From)<sup>*</sup>
                    </label>
                    <input type="text" id="coveragePeriodFrom" className="w-full border h-10 px-0.5 text-20" />
                </div>

                {/* field11 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="coveragePeriodTo">Coverage Period (To)<sup>*</sup>
                    </label>
                    <input type="text" id="coveragePeriodTo" className="w-full border h-10 px-0.5 text-20" />
                </div>
            </div>
        </>
    )
}
export default FormStep1;