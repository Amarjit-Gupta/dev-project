import { IoEyeOutline } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nURL } from "../URL";

const AllReports = () => {

    const [reportsData, setReportsData] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const getAllReportData = async () => {
        try {
            setLoading(true);
            let result = await fetch(`${nURL}/reports/list`, {
                method: "GET",
                credentials: "include"
            });
            let data = await result.json();
            // console.log(data);
            if (Array.isArray(data.reports)) {
                setReportsData(data.reports);
            }
        }
        catch (err) {
            console.log("something went wrong...");
        } finally {
            setLoading(false); // loading off
        }
    }

    useEffect(() => {
        getAllReportData();
    }, []);

    console.log(reportsData);


    const handleReportDataDelete = async (index) => {
        console.log("id: ", index);
        var confirmation = confirm("Are you sure...");
        if (confirmation) {
            try {
                let data = await fetch(`${nURL}/reports/${index}`, {
                    method: "DELETE",
                    credentials: "include"
                });
                let result = await data.json();
                console.log("delete-response: ", result);
                if (result.success) {
                    alert("Report delete Successfully");
                    getAllReportData();
                }
            }
            catch (err) {
                console.log("something went wrong...");
            }
        }
        else {
            alert("Data not delete...");
        }
    }

    return (
        <div className="border bg-gray-100">
            <div className="border w-285 m-auto my-5">
                <h1 className="text-primary text-24 font-semibold">All Reports</h1>
                <div className="border h-9 mt-3">
                    <input type="search" className="border h-full w-full px-2 bg-surface" placeholder="Search..." />
                </div>
                <h2 className="text-primary text-16 font-semibold mt-8">Filters</h2>
                <div className="border h-9 mt-3 flex gap-3">
                    <div className="border w-50">
                        <select name="" id="" className="w-full h-full bg-surface">
                            <option value="option1">--- Select status ---</option>
                            <option value="option2">option2</option>
                            <option value="option3">option3</option>
                        </select>
                    </div>
                    <div className="border w-50">
                        <select name="" id="" className="w-full h-full bg-surface">
                            <option value="option1">--- Select Industry ---</option>
                            <option value="option2">option2</option>
                            <option value="option3">option3</option>
                        </select>
                    </div>
                    <div className="border w-50">
                        <select name="" id="" className="w-full h-full bg-surface">
                            <option value="option1">--- Select Country ---</option>
                            <option value="option2">option2</option>
                            <option value="option3">option3</option>
                        </select>
                    </div>
                    <div className="border w-50">
                        <select name="" id="" className="w-full h-full bg-surface">
                            <option value="option1">--- Select Type ---</option>
                            <option value="option2">option2</option>
                            <option value="option3">option3</option>
                        </select>
                    </div>
                    <div className="border w-50">
                        <select name="" id="" className="w-full h-full bg-surface">
                            <option value="option1">--- Sort ---</option>
                            <option value="option2">option2</option>
                            <option value="option3">option3</option>
                        </select>
                    </div>
                </div>

                {/* table */}

                <div className="mt-10 mx-auto w-[1140px] border flex font-medium">
                    <div className="border px-2 py-2 w-[320px]">Title</div>
                    <div className="border px-2 py-2 w-[220px]">Industry</div>
                    <div className="border px-2 py-2 w-[140px]">Country</div>
                    <div className="border px-2 py-2 w-[120px]">Status</div>
                    <div className="border px-2 py-2 w-[90px]">Version</div>
                    <div className="border px-2 py-2 w-[120px]">Full Price</div>
                    <div className="border px-2 py-2 w-[120px]">Updated</div>
                    <div className="border px-2 py-2 w-[120px]">Active</div>
                </div>

                {/* data1 */}
                {loading ? <div className="flex justify-center items-center h-40">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div> :
                    <>
                        {reportsData?.map((itm, i) => {
                            return (
                                <div className="mx-auto w-[1140px] border flex items-stretch text-16 table-bg" key={itm.report_id}>
                                    <div className="border px-2 py-2 w-[320px] break-words whitespace-normal">
                                        {itm?.title}
                                    </div>

                                    <div className="border px-2 py-2 w-[220px] break-words whitespace-normal">
                                        {itm?.industry}
                                    </div>

                                    <div className="border px-2 py-2 w-[140px] break-words whitespace-normal">
                                        {itm?.country}
                                    </div>

                                    <div className="border px-2 py-2 w-[120px] break-words">
                                        {itm?.status}
                                    </div>

                                    <div className="border px-2 py-2 w-[90px]">
                                        {itm?.version}
                                    </div>

                                    <div className="border px-2 py-2 w-[120px] break-words">
                                        {itm?.full_price}
                                    </div>

                                    <div className="border px-2 py-2 w-[120px]">
                                        {
                                            itm?.updated_at &&
                                            new Date(itm.updated_at).toLocaleDateString("en-GB", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric"
                                            })
                                        }
                                    </div>

                                    <div className="border px-2 py-2 w-[120px] flex justify-center items-center gap-3">
                                        <button className="border cursor-pointer" onClick={() => navigate(`/single-report/${itm.report_id}`)}><IoEyeOutline className="text-20" /></button>
                                        <button className="border cursor-pointer" onClick={() => navigate(`/add/${itm.report_id}`)}><BiEditAlt className="text-20" /></button>
                                        <button className="border cursor-pointer" onClick={() => handleReportDataDelete(itm.report_id)}><RiDeleteBin6Line className="text-20" /></button>
                                    </div>
                                </div>
                            )
                        })}
                    </>}


            </div>
        </div>
    );
};
export default AllReports;