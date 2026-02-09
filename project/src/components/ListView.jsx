import { IoIosArrowForward } from "react-icons/io";
const ListView = ({ listData }) => {

    return (
        <>
            {/* card1 */}
            {listData?.map((data, i) => {
                return (
                    <div className="border grid grid-cols-[31%_auto] h-46" key={data.report_id}>
                        <div className=" h-46"><img src={data?.image_path} alt="image" className="h-full w-full" /></div>
                        <div className=" p-4 flex flex-col justify-between">
                            <div className=" flex flex-col gap-2">
                                <div className="border">
                                    {/* <h1 className="text-primary text-20 font-medium"></h1> */}
                                    <h1 className="text-primary text-20 font-medium wrap-break-word">{(data?.title).length>45?(data?.title).slice(0,45)+" ...":data?.title}</h1>
                                    </div>

                                <div className="border">
                                    <p className="text-primary text-16 font-regular wrap-break-word">{(data?.subtitle).length>60?(data?.subtitle).slice(0,57)+" ...":data?.subtitle}</p>
                                      {/* <p className="text-primary text-16 font-regular"></p> */}
                                </div>

                                <div className="border flex gap-2">
                                    <div className="border px-2 py-0.5 text-primary text-13 font-regular">Market Analysis</div>
                                    <div className="border px-2 py-0.5 text-primary text-13 font-regular">Distributors</div>
                                    <div className="border px-2 py-0.5 text-primary text-13 font-regular">Pricing</div>
                                </div>
                            </div>

                            <div className="border">
                                <div className="border flex justify-end gap-8">
                                    <div className="border content-center text-16 text-primary font-regular">${data?.full_price}</div>
                                    <div className="border">
                                        <button className="flex items-center cursor-pointer gap-2 px-6 py-2 border bg-brand">
                                            <span className="text-15 text-primary font-medium">Download Report</span>
                                            <span><IoIosArrowForward /></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};
export default ListView;
