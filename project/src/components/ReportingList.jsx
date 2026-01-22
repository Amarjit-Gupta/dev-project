import FilterCategory from "./FilterCategory";
import AZ from '../assets/sorting-a-z-02.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiLayoutGrid2 } from "react-icons/tfi";

import GridView from "./GridView";
import ListView from "./ListView";
import { useState } from "react";
import RelevantReports from "./RelevantReports";

const ReportingList = () => {

    const [view, setView] = useState('grid');



    return (
        <>
            {/* main content */}
            <div className=" h-120 flex items-center w-full bg-gray-300 reportlisting-bg-img">
                <div className=" w-80 sm:w-140 xl:w-285 m-auto flex gap-5 justify-center">
                    <div className="w-80 sm:w-140 flex flex-col gap-8">
                        <div className="border flex gap-2 text-primary text-16 font-regular">
                            <span>Home</span>
                            <span>&gt;</span>
                            <span>Reports</span>
                            <span>&gt;</span>
                            <span>Industry Name</span>
                            <span>&gt;</span>
                            <span>Report Name</span>
                        </div>
                        <div className="border">
                            <h1 className="text-primary text-32 font-semibold">Health & Wellness</h1>
                            <p className="text-primary text-16 font-regular mt-2">Comprehensive market trends, consumer analysis, and competitive landscape reports.</p>
                        </div>
                        <div className="border flex flex-col gap-4">
                            <div className="border flex gap-14">

                                <div className="border w-42 flex gap-2">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12ZM22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12Z" fill="#001413" />
                                        <path d="M15.6406 7.3418C16.004 7.14341 16.4595 7.27735 16.6582 7.64062C16.8566 8.00397 16.7226 8.45954 16.3594 8.6582C14.931 9.43951 13.6153 11.0545 12.6279 12.5664C12.1436 13.3081 11.7554 13.9983 11.4883 14.5029C11.3549 14.7548 11.2523 14.96 11.1836 15.1006C11.1492 15.1709 11.1224 15.2248 11.1055 15.2607C11.097 15.2787 11.0909 15.2922 11.0869 15.3008C11.0851 15.3047 11.0839 15.3077 11.083 15.3096L11.082 15.3115C11.082 15.3115 11.083 15.312 11.082 15.3115C10.9662 15.5648 10.7195 15.7337 10.4414 15.749C10.1632 15.7644 9.89986 15.6238 9.75684 15.3848C9.4238 14.828 8.90274 14.3321 8.43457 13.9619C8.20542 13.7807 7.99927 13.6378 7.85156 13.541C7.77797 13.4928 7.71948 13.4562 7.68066 13.4326C7.66128 13.4208 7.64658 13.4125 7.6377 13.4072C7.63325 13.4046 7.6305 13.4023 7.62891 13.4014C7.6283 13.4024 7.62892 13.4014 7.62891 13.4014C7.26929 13.1962 7.14369 12.7386 7.34863 12.3789C7.55378 12.0192 8.01133 11.8937 8.37109 12.0986L8.38086 12.1035C8.38535 12.1061 8.39109 12.1099 8.39844 12.1143C8.41338 12.1231 8.43404 12.1356 8.45996 12.1514C8.51177 12.1829 8.58501 12.228 8.67383 12.2861C8.85107 12.4022 9.09461 12.5712 9.36523 12.7852C9.64294 13.0047 9.95961 13.2823 10.2666 13.6074C10.5427 13.0963 10.9166 12.4436 11.3721 11.7461C12.3846 10.1957 13.8692 8.31057 15.6406 7.3418Z" fill="#001413" />
                                    </svg></span>
                                    <span className="text-primary text-16 font-regular">First Bullet Here</span>
                                </div>

                                <div className="border w-42 flex gap-2">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12ZM22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12Z" fill="#001413" />
                                        <path d="M15.6406 7.3418C16.004 7.14341 16.4595 7.27735 16.6582 7.64062C16.8566 8.00397 16.7226 8.45954 16.3594 8.6582C14.931 9.43951 13.6153 11.0545 12.6279 12.5664C12.1436 13.3081 11.7554 13.9983 11.4883 14.5029C11.3549 14.7548 11.2523 14.96 11.1836 15.1006C11.1492 15.1709 11.1224 15.2248 11.1055 15.2607C11.097 15.2787 11.0909 15.2922 11.0869 15.3008C11.0851 15.3047 11.0839 15.3077 11.083 15.3096L11.082 15.3115C11.082 15.3115 11.083 15.312 11.082 15.3115C10.9662 15.5648 10.7195 15.7337 10.4414 15.749C10.1632 15.7644 9.89986 15.6238 9.75684 15.3848C9.4238 14.828 8.90274 14.3321 8.43457 13.9619C8.20542 13.7807 7.99927 13.6378 7.85156 13.541C7.77797 13.4928 7.71948 13.4562 7.68066 13.4326C7.66128 13.4208 7.64658 13.4125 7.6377 13.4072C7.63325 13.4046 7.6305 13.4023 7.62891 13.4014C7.6283 13.4024 7.62892 13.4014 7.62891 13.4014C7.26929 13.1962 7.14369 12.7386 7.34863 12.3789C7.55378 12.0192 8.01133 11.8937 8.37109 12.0986L8.38086 12.1035C8.38535 12.1061 8.39109 12.1099 8.39844 12.1143C8.41338 12.1231 8.43404 12.1356 8.45996 12.1514C8.51177 12.1829 8.58501 12.228 8.67383 12.2861C8.85107 12.4022 9.09461 12.5712 9.36523 12.7852C9.64294 13.0047 9.95961 13.2823 10.2666 13.6074C10.5427 13.0963 10.9166 12.4436 11.3721 11.7461C12.3846 10.1957 13.8692 8.31057 15.6406 7.3418Z" fill="#001413" />
                                    </svg></span>
                                    <span className="text-primary text-16 font-regular">Second Bullet Here</span>
                                </div>
                            </div>

                            <div className="border flex gap-14">

                                <div className="border w-42 flex gap-2">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12ZM22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12Z" fill="#001413" />
                                        <path d="M15.6406 7.3418C16.004 7.14341 16.4595 7.27735 16.6582 7.64062C16.8566 8.00397 16.7226 8.45954 16.3594 8.6582C14.931 9.43951 13.6153 11.0545 12.6279 12.5664C12.1436 13.3081 11.7554 13.9983 11.4883 14.5029C11.3549 14.7548 11.2523 14.96 11.1836 15.1006C11.1492 15.1709 11.1224 15.2248 11.1055 15.2607C11.097 15.2787 11.0909 15.2922 11.0869 15.3008C11.0851 15.3047 11.0839 15.3077 11.083 15.3096L11.082 15.3115C11.082 15.3115 11.083 15.312 11.082 15.3115C10.9662 15.5648 10.7195 15.7337 10.4414 15.749C10.1632 15.7644 9.89986 15.6238 9.75684 15.3848C9.4238 14.828 8.90274 14.3321 8.43457 13.9619C8.20542 13.7807 7.99927 13.6378 7.85156 13.541C7.77797 13.4928 7.71948 13.4562 7.68066 13.4326C7.66128 13.4208 7.64658 13.4125 7.6377 13.4072C7.63325 13.4046 7.6305 13.4023 7.62891 13.4014C7.6283 13.4024 7.62892 13.4014 7.62891 13.4014C7.26929 13.1962 7.14369 12.7386 7.34863 12.3789C7.55378 12.0192 8.01133 11.8937 8.37109 12.0986L8.38086 12.1035C8.38535 12.1061 8.39109 12.1099 8.39844 12.1143C8.41338 12.1231 8.43404 12.1356 8.45996 12.1514C8.51177 12.1829 8.58501 12.228 8.67383 12.2861C8.85107 12.4022 9.09461 12.5712 9.36523 12.7852C9.64294 13.0047 9.95961 13.2823 10.2666 13.6074C10.5427 13.0963 10.9166 12.4436 11.3721 11.7461C12.3846 10.1957 13.8692 8.31057 15.6406 7.3418Z" fill="#001413" />
                                    </svg></span>
                                    <span className="text-primary text-16 font-regular">Third Bullet Here</span>
                                </div>
                                <div className="border w-42 flex gap-2">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12ZM22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12Z" fill="#001413" />
                                        <path d="M15.6406 7.3418C16.004 7.14341 16.4595 7.27735 16.6582 7.64062C16.8566 8.00397 16.7226 8.45954 16.3594 8.6582C14.931 9.43951 13.6153 11.0545 12.6279 12.5664C12.1436 13.3081 11.7554 13.9983 11.4883 14.5029C11.3549 14.7548 11.2523 14.96 11.1836 15.1006C11.1492 15.1709 11.1224 15.2248 11.1055 15.2607C11.097 15.2787 11.0909 15.2922 11.0869 15.3008C11.0851 15.3047 11.0839 15.3077 11.083 15.3096L11.082 15.3115C11.082 15.3115 11.083 15.312 11.082 15.3115C10.9662 15.5648 10.7195 15.7337 10.4414 15.749C10.1632 15.7644 9.89986 15.6238 9.75684 15.3848C9.4238 14.828 8.90274 14.3321 8.43457 13.9619C8.20542 13.7807 7.99927 13.6378 7.85156 13.541C7.77797 13.4928 7.71948 13.4562 7.68066 13.4326C7.66128 13.4208 7.64658 13.4125 7.6377 13.4072C7.63325 13.4046 7.6305 13.4023 7.62891 13.4014C7.6283 13.4024 7.62892 13.4014 7.62891 13.4014C7.26929 13.1962 7.14369 12.7386 7.34863 12.3789C7.55378 12.0192 8.01133 11.8937 8.37109 12.0986L8.38086 12.1035C8.38535 12.1061 8.39109 12.1099 8.39844 12.1143C8.41338 12.1231 8.43404 12.1356 8.45996 12.1514C8.51177 12.1829 8.58501 12.228 8.67383 12.2861C8.85107 12.4022 9.09461 12.5712 9.36523 12.7852C9.64294 13.0047 9.95961 13.2823 10.2666 13.6074C10.5427 13.0963 10.9166 12.4436 11.3721 11.7461C12.3846 10.1957 13.8692 8.31057 15.6406 7.3418Z" fill="#001413" />
                                    </svg></span>
                                    <span className="text-primary text-16 font-regular">Forth Bullet Here</span>
                                </div>
                            </div>
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


            {/* card view */}

            <div className="border w-80 sm:w-144 xl:w-285 m-auto mb-11.5 mt-18">


                <div className="border w-80 sm:w-144 xl:w-285 m-auto grid grid-cols-1 xl:grid-cols-[22%_auto] gap-7.5">


                    <div className="border flex flex-col gap-3 xl:gap-8">
                        <FilterCategory />
                    </div>

                    <div className="border">

                        <div className="border flex justify-around sm:justify-between items-center">
                            <div className="border">
                                {/* <h1 className="text-primary text-20 font-medium">234 reports available</h1> */}
                                <h1 className="text-primary text-[13px] sm:text-[20px] font-medium">
                                    234 reports available
                                </h1>
                            </div>
                            <div className="border flex gap-8">
                                <div className="hidden xl:block">
                                    <button className={`border-text-secondary p-2 cursor-pointer ${view == "grid" ? "bg-brand" : ""}`} onClick={() => setView("grid")}><TfiLayoutGrid2 className="h-6 w-6" /></button>
                                    <button className={`border-text-secondary p-2 cursor-pointer ${view == "list" ? "bg-brand" : ""}`} onClick={() => setView("list")}><RxHamburgerMenu className="h-6 w-6" /></button>
                                </div>
                                <div className="border w-45 sm:w-56 h-10.5 px-3 sm:px-6 py-2 flex gap-2">
                                    <img src={AZ} alt="" />
                                    <select name="" id="" className="text-primary text-15 font-medium outline-0">
                                        <option value="">Sort By Alphabet</option>
                                        <option value="">Sort By A-Z</option>
                                        <option value="">Sort By Z-A</option>
                                    </select>
                                </div>
                            </div>
                        </div>



                        {/* grid view w-219 grid-cols-3*/}
                        {view === "grid" && <div className="border w-80 sm:w-144 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-auto xl:w-auto gap-6 mt-7">
                            <GridView />
                        </div>}


                        {/* list view */}
                        {view === "list" && <div className="border mt-7 flex flex-col gap-6">
                            <ListView />
                        </div>}


                        <div className="border w-66 h-6 mx-auto my-12 text-center">Pagination</div>



                    </div>


                </div>


                {/* Relevant Reports */}
                <RelevantReports />

            </div>
        </>
    );
};
export default ReportingList;