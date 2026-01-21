const ReportingList = () => {
    return (
        <>
            {/* main content w-140 */}
            <div className=" h-120 flex items-center w-full bg-gray-300 reportlisting-bg-img">
                <div className=" w-80 sm:w-140 xl:w-285 m-auto flex gap-5 justify-center">
                    <div className=" w-80 sm:w-140">
                        <div className="">
                            <h1 className="text-32 text-primary font-semibold">Decision-orianted, not feature-orianted</h1>
                            <p className="text-16 text-primary font-regular mt-2 ">Comprehensive market trends, comsumer analysis and competitive landscape <br /> reports</p>
                        </div>

                        <div className=" mt-8 flex gap-7">
                            <button className="py-2 px-8 bg-surface text-primary text-15 font-medium">Browse Reports</button>
                            <button className="py-2 px-8 border-text-primary text-primary text-15 font-medium">Search Market Data</button>
                        </div>
                    </div>

                    <div className=" w-140 hidden xl:block">
                        {/* <div className="border">
                            <h1 className="text-32 text-primary font-semibold">Decision-orianted, not feature-orianted</h1>
                            <p className="text-16 text-primary font-regular mt-2 border">Comprehensive market trends, comsumer analysis and competitive landscape <br /> reports</p>
                        </div>

                        <div className="border mt-8 flex gap-7">
                            <button className="py-2 px-8 bg-surface text-primary text-15 font-medium">Browse Reports</button>
                            <button className="py-2 px-8 border-text-primary text-primary text-15 font-medium">Search Market Data</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};
export default ReportingList;