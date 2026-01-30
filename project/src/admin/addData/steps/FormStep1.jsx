import { IoArrowForwardSharp } from "react-icons/io5";
import MultiSelectDropdown from "./MultiSelectDropdown";


const FormStep1 = (
    { reportTitle,
        setReportTitle,
        subTitle,
        setSubTitle,
        industry,
        setIndustry,
        subIndustry,
        setSubIndustry,
        regions,
        setRegions,
        country,
        setCountry,
        reportType,
        setReportType,
        publishDate,
        setPublishDate,
        coveragePeriodFrom,
        setCoveragePeriodFrom,
        coveragePeriodTo,
        setCoveragePeriodTo,
        error,
        getIndustry,
        getSubindustry,
        getRegions,
        getCountries,
        getReportTypes }
) => {



    // for select for test only
    // const [formData, setFormData] = useState({
    //     regions: [],
    //     country: []
    // });
    // console.log("formData",formData);


    //     const [regions, setRegions] = useState([]);
    // const [country, setCountry] = useState([]);


    return (
        <>
            <div className="border w-full m-auto flex flex-col gap-5">
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
                    <input type="text" id="reportTitle" className="w-full border h-10 px-0.5 text-20" placeholder="Enter Report Title" value={reportTitle} onChange={(e) => setReportTitle(e.target.value)} />
                    {error && !reportTitle && <p className="text-red-500 ml-1">Please Enter ReportTitle...</p>}

                </div>

                {/* field3 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="marketDescription">Subtitle / Market description <sup>*</sup> </label>
                    <input type="text" id="marketDescription" className="w-full border h-10 px-0.5 text-20" placeholder="Enter subtitle / market description" value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />
                    {error && !subTitle && <p className="text-red-500 ml-1">Please Enter subTitle...</p>}
                </div>

                {/* field4 */}
                {/* <div className="border">
                    <label className="text-15 font-medium text-primary" htmlFor="options">
                        Industry <sup>*</sup>
                    </label>
                    <select className="w-full mt-1 border h-10 text-20" id="options" value={industry} onChange={(e) => setIndustry(e.target.value)}>
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                        <option value="option4">option4</option>
                        <option value="option5">option5</option>
                    </select>
                    {error && !industry && <p className="text-red-500 ml-1">Please select industry...</p>}
                </div> */}
                <div className="border">
                    <label className="text-15 font-medium text-primary">
                        Industry <sup>*</sup>
                    </label>

                    <select
                        className="w-full mt-1 border h-10 text-20"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                    >
                        <option value="">-- Select Industry --</option>

                        {getIndustry?.map((item,i) => (
                            <option key={i} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>

                    {error && !industry && (
                        <p className="text-red-500 ml-1">Please select industry...</p>
                    )}
                </div>




                {/* field5 */}
                {/* <div className="border">
                    <label className="text-15 font-medium text-primary" htmlFor="options">
                        Sub-Industry <sup>*</sup>
                    </label>
                    <select className="w-full mt-1 border h-10 text-20" id="options" value={subIndustry} onChange={(e) => setSubIndustry(e.target.value)}>
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                        <option value="option4">option4</option>
                        <option value="option5">option5</option>
                    </select>
                    {error && !subIndustry && <p className="text-red-500 ml-1">Please select subIndustry...</p>}
                </div> */}
                <div className="border">
                    <label className="text-15 font-medium text-primary">
                        Sub-Industry <sup>*</sup>
                    </label>

                    <select
                        className="w-full mt-1 border h-10 text-20"
                        value={subIndustry}
                        onChange={(e) => setSubIndustry(e.target.value)}
                    >
                        <option value="">-- Select Sub-Industry --</option>

                        {getSubindustry?.map((item,i) => (
                            <option key={i} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>

                    {error && !subIndustry && (
                        <p className="text-red-500 ml-1">
                            Please select subIndustry...
                        </p>
                    )}
                </div>


                {/* field6 */}
                <div className="border">
                    <MultiSelectDropdown
                        label="Regions* (Multi select)"
                        options={getRegions?.map((item) => item.name)}
                        value={regions}
                        onChange={(val) => setRegions(val)}
                    />
                    {error && !regions.length && <p className="text-red-500 ml-1">Please select Regions...</p>}
                </div>

                {/* field7 */}
                <div className="border">
                    <MultiSelectDropdown
                        label="Country* (Multi select)"
                        options={getCountries?.map((item) => item.name)}
                        value={country}
                        onChange={(val) => setCountry(val)}
                    />
                    {error && !country.length && <p className="text-red-500 ml-1">Please select country...</p>}
                </div>

                {/* field8 */}
                {/* <div className="border">
                    <label className="text-15 font-medium text-primary" htmlFor="reportType">
                        Report Type <sup>*</sup>
                    </label>
                    <select className="w-full mt-1 border h-10 text-20" id="reportType" value={reportType} onChange={(e) => setReportType(e.target.value)}>
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                        <option value="option4">option4</option>
                        <option value="option5">option5</option>
                    </select>
                    {error && !reportType && <p className="text-red-500 ml-1">Please select ReportType...</p>}
                </div> */}
                <div className="border">
                    <label className="text-15 font-medium text-primary" htmlFor="reportType">
                        Report Type <sup>*</sup>
                    </label>

                    <select
                        className="w-full mt-1 border h-10 text-20"
                        id="reportType"
                        value={reportType}
                        onChange={(e) => setReportType(e.target.value)}
                    >
                        <option value="">-- Select Report Type --</option>

                        {getReportTypes?.map((item,i) => (
                            <option key={i} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>

                    {error && !reportType && (
                        <p className="text-red-500 ml-1">
                            Please select Report Type...
                        </p>
                    )}
                </div>


                {/* field9 */}
                <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="publishDate">Publish Date<sup>*</sup>
                    </label>
                    {/* {publishDate && */}
                    <input type="date" id="publishDate" className="w-full border h-10 px-0.5 text-20" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} />
                    {error && !publishDate && <p className="text-red-500 ml-1">Please select publishDate...</p>}
                </div>

                {/* field10 */}
                {/* <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="coveragePeriodFrom">Coverage Period (From)<sup>*</sup>
                    </label>
                    <input type="text" id="coveragePeriodFrom" className="w-full border h-10 px-0.5 text-20" value={coveragePeriodFrom} onChange={(e) => setCoveragePeriodFrom(e.target.value)} />
                    {error && !coveragePeriodFrom && <p className="text-red-500 ml-1">Please Enter coveragePeriodFrom...</p>}
                </div> */}
                <div className="border">
                    <label
                        className="text-16 font-medium text-primary"
                        htmlFor="coveragePeriodFrom"
                    >
                        Coverage Period (From) <sup>*</sup>
                    </label>

                    <input
                        type="number"
                        id="coveragePeriodFrom"
                        className="w-full border h-10 px-0.5 text-20"
                        placeholder="Enter year"
                        min="1900"
                        max="2100"
                        value={coveragePeriodFrom}
                        onChange={(e) => setCoveragePeriodFrom(e.target.value)}
                    />

                    {error && !coveragePeriodFrom && (
                        <p className="text-red-500 ml-1">
                            Please select coverage period year...
                        </p>
                    )}
                </div>


                {/* field11 */}
                {/* <div className="border">
                    <label className="text-16 font-medium text-primary" htmlFor="coveragePeriodTo">Coverage Period (To)<sup>*</sup>
                    </label>
                    <input type="text" id="coveragePeriodTo" className="w-full border h-10 px-0.5 text-20" value={coveragePeriodTo} onChange={(e) => setCoveragePeriodTo(e.target.value)} />
                    {error && !coveragePeriodTo && <p className="text-red-500 ml-1">Please Enter coveragePeriodTo...</p>}
                </div> */}
                <div className="border">
                    <label
                        className="text-16 font-medium text-primary"
                        htmlFor="coveragePeriodTo"
                    >
                        Coverage Period (To) <sup>*</sup>
                    </label>

                    <input
                        type="number"
                        id="coveragePeriodTo"
                        className="w-full border h-10 px-0.5 text-20"
                        placeholder="Enter year"
                        min="1900"
                        max="2100"
                        value={coveragePeriodTo}
                        onChange={(e) => setCoveragePeriodTo(e.target.value)}
                    />

                    {error && !coveragePeriodTo && (
                        <p className="text-red-500 ml-1">
                            Please select coverage period year...
                        </p>
                    )}
                </div>



            </div>
        </>
    )
}
export default FormStep1;