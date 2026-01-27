import { IoArrowForwardSharp } from "react-icons/io5";
import MultiSelectDropdown from "./MultiSelectDropDown";
import { useState } from "react";
import FileUpload from "./FileUpload";
const FormStep5 = () => {


    return (
        <>
            <div className="border-2 border-red-500 w-full m-auto flex flex-col gap-5">
                <div className="border">
                    <h1 className="text-24 font-medium text-primary">Pricing & Access (form setp5)</h1>
                    <p className="text-16 font-regular text-primary">Set competitive price for report</p>
                </div>

                {/* field3 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="reportTitle">Full Report Price (Fetch)
                    </label>
                    <input type="text" id="reportTitle" className="w-full border h-10 px-0.5 text-20" placeholder="Full report price" />
                </div>

            </div>
        </>
    )
}
export default FormStep5;