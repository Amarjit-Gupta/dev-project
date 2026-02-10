import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { base_url } from "../URL";

const SingleReport = () => {

    const [singleData, setSingleData] = useState(null);
    const [loading, setLoading] = useState(true);

    let param = useParams();
    let index = param.id;

    const getSingleReportData = async () => {
        try {
            setLoading(true);
            let result = await fetch(`${base_url}/reports/${index}/preview`, {
                method: "GET",
                credentials: "include"
            });
            let data = await result.json();
            console.log("s: ", data);
            if (data) {
                setSingleData(data?.preview_data);
            }
            // if (Array.isArray(data.reports)) {
            //     setReportsData(data.reports);
            // }
        }
        catch (err) {
            console.log("something went wrong...");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getSingleReportData();
    }, []);

    console.log(singleData);

    return (
        <div className="bg-gray-100 py-4">
            
        
        <div className="w-230 m-auto bg-surface">
            <div className=" w-230 m-auto p-4 h-150 overflow-auto">
                <h1 className="text-center text-20 font-medium text-primary pb-4 underline">Single Report Data</h1>
                {loading ?
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                    :
                    <>
                        {/* step1 */}
                        <div className="">
                            <p className=" py-1"><b>Title:</b> {singleData?.step1?.title} </p>
                            <p className=" py-1"><b>Subtitle:</b> {singleData?.step1?.subtitle}</p>
                            <p className=" py-1"><b>Industry Name:</b> {singleData?.step1?.industry_name} </p>
                            <p className=" py-1"><b>Subindustry Name:</b> {singleData?.step1?.sub_industry_name} </p>
                            <p className=" py-1"><b>Region:</b> {singleData?.step1?.region_names?.join(", ")}</p>
                            <p className=" py-1"><b>Country:</b> {singleData?.step1?.country_names?.join(", ")}</p>
                            <p className=" py-1"><b>Report Type:</b> {singleData?.step1?.report_type_name}</p>
                            <p className=" py-1"><b>Publish Date:</b> {singleData?.step1?.publish_date}</p>
                            <p className=" py-1"><b>Coverage From:</b> {singleData?.step1?.coverage_start_year}</p>
                            <p className=" py-1"><b>Coverage To:</b> {singleData?.step1?.coverage_end_year}</p>
                        </div>

                        {/* step2 */}
                        <div className="">
                            <p className=" py-1"><b>Report Covers:</b> {singleData?.step2?.covers?.join(", ")}</p>
                            <p className=" py-1"><b>Report Supports:</b>  {singleData?.step2?.supports_decisions?.join(", ")}</p>
                        </div>

                        {/* step3 */}
                        <div className="">
                            {/* 1 */}
                            {singleData?.step3?.full_report_url && (
                                <p className=" py-1">
                                    <b>Full Report:</b>{" "}
                                    <a
                                        className="text-blue-500"
                                        href={singleData.step3.full_report_url}
                                        // target="_blank"
                                        rel="noreferrer"
                                    >
                                        Full Report
                                    </a>
                                </p>
                            )}
                            {/* 2 */}
                            {singleData?.step3?.sample_report_url && (
                                <p className=" py-1">
                                    <b>Sample Report:</b>{" "}
                                    <a
                                        className="text-blue-500"
                                        href={singleData.step3.sample_report_url}
                                        // target="_blank"
                                        rel="noreferrer"
                                    >
                                        Sample Report
                                    </a>
                                </p>
                            )}
                            {/* 3 */}
                            {singleData?.step3?.image_url && (
                                <p className=" py-1">
                                    <b>Image:</b>{" "}
                                    <a
                                        className="text-blue-500"
                                        href={singleData.step3.image_url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        WebP Image
                                    </a>
                                </p>
                            )}
                            {/* 4 */}
                            {singleData?.step3?.charts_report_url && (
                                <p className=" py-1">
                                    <b>Charts Report:</b>{" "}
                                    <a
                                        className="text-blue-500"
                                        href={singleData.step3.charts_report_url}
                                        // target="_blank"
                                        rel="noreferrer"
                                    >
                                        Charts Report
                                    </a>
                                </p>
                            )}
                        </div>

                        {/* step4 */}
                        <div className="">
                            <p className=" py-1"><b>Full Report Price:</b> {singleData?.step4?.amount_cents}</p>
                        </div>

                        {/* step5 */}
                        <div className="">
                            <p className=" py-1"><b>Status:</b> {singleData?.step5?.status}</p>
                            <p className=" py-1"><b>Feature Homepage: </b> {singleData?.step5?.feature_homepage === true ? "True" : "False"}</p>
                            <p className=" py-1"><b>SEO Slug: </b> {singleData?.step5?.seo_slug}</p>
                            <p className=" py-1"><b>SEO Title: </b> {singleData?.step5?.seo_title}</p>
                            <p className=" py-1"><b>SEO Keywords: </b> {singleData?.step5?.seo_keywords}</p>
                            <p className=" py-1"><b>SEO Description: </b> {singleData?.step5?.seo_description}</p>
                        </div>
                    </>
                }
            </div>
            <button className="mx-4 mb-4 mt-2 bg-brand font-medium py-2 px-4 cursor-pointer"><Link to={"/all"}>Go Back</Link></button>
        </div>
        </div>
    );
};
export default SingleReport;
