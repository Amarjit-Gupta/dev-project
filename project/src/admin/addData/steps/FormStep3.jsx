import { useState } from "react";
import FileUpload from "./FileUpload";

const FormStep3 = () => {

    const [formData, setFormData] = useState({
        reportPdf: null,
        samplePdf: null,
        coverImage: null,
        chart: null,
    });

    console.log(formData);

    return (
        <>
            <div className="border-2 border-red-500 w-full m-auto flex flex-col gap-5">
                <div className="border">
                    <h1 className="text-24 font-medium text-primary">Upload Report Files (form step3)</h1>
                    <p className="text-16 font-regular text-primary">Attach actual content</p>
                </div>

                <div className="border">
                    <h1 className="text-20 font-medium text-primary">Upload Report Files</h1>
                    <div className="border">
                        <label className="text-15 font-medium text-primary" htmlFor="reportType">
                            Select from available reports <sup>*</sup>
                        </label>
                        <select className="w-full mt-1 border h-10 text-20" id="reportType">
                            <option value="option1">option1</option>
                            <option value="option2">option2</option>
                            <option value="option3">option3</option>
                            <option value="option4">option4</option>
                            <option value="option5">option5</option>
                        </select>
                    </div>
                    <FileUpload
                        label=""
                        file={formData.reportPdf}
                        onChange={(file) =>
                            setFormData({ ...formData, reportPdf: file })
                        }
                    />
                </div>

                <div className="border">
                    <FileUpload
                        label="Upload Sample PDF*"
                        file={formData.samplePdf}
                        onChange={(file) =>
                            setFormData({ ...formData, samplePdf: file })
                        }
                    />
                </div>

                <div className="border">
                    <FileUpload
                        label="Upload Image*"
                        file={formData.coverImage}
                        onChange={(file) =>
                            setFormData({ ...formData, coverImage: file })
                        }
                    />
                </div>

                <div className="border">
                    <FileUpload
                        label="Upload charts"
                        file={formData.chart}
                        onChange={(file) =>
                            setFormData({ ...formData, chart: file })
                        }
                    />
                </div>
            </div>
        </>
    )
}
export default FormStep3;