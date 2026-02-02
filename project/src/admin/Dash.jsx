import { IoIosWarning } from "react-icons/io";
const Dash = () => {
    return (
        <div className="border w-293 m-auto">
            {/* 5 cards */}
            <div className="border grid grid-cols-5 gap-5.5 mt-13">
                <div className="border py-4.5 text-center text-primary text-20 font-regular bg-card">
                    <p>Published Reports</p>
                    <p>324</p>
                </div>
                <div className="border py-4.5 text-center text-primary text-20 font-regular bg-card">
                    <p>Draft Reports</p>
                    <p>343</p>
                </div>
                <div className="border py-4.5 text-center text-primary text-20 font-regular bg-card">
                    <p>Purchases (1y)</p>
                    <p>443</p>
                </div>
                <div className="border py-4.5 text-center text-primary text-20 font-regular bg-card">
                    <p>Revenue (1y)</p>
                    <p>$34356</p>
                </div>
                <div className="border py-4.5 text-center text-primary text-20 font-regular bg-card">
                    <p>Impressions</p>
                    <p>23893547</p>
                </div>
            </div>


            {/* button */}
            <div className="border w-174 m-auto grid grid-cols-3 gap-8.5 mt-13">
                <div className="border w-52 h-13 text-center"><button className="border w-full h-full cursor-pointer text-primary text-16 font-medium">Add New Report</button></div>
                <div className="border w-52 h-13 text-center"><button className="border w-full h-full cursor-pointer text-primary text-16 font-medium">View All Reports</button></div>
                <div className="border w-52 h-13 text-center"><button className="border w-full h-full cursor-pointer text-primary text-16 font-medium">View Orders</button></div>
            </div>


            {/* draft card */}
            <div className="border w-293 m-auto grid grid-cols-3 gap-8.5 mt-17">
                <div className="border w-91 h-24 flex p-5 items-center justify-between">
                    <div className="border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 8.27206L8.27206 3H15.7279L21 8.27206V15.7279L15.7279 21H8.27206L3 15.7279V8.27206Z" fill="#F9A925" />
                        <path d="M12.0088 14.25C12.423 14.25 12.7588 14.5858 12.7588 15C12.7588 15.4142 12.423 15.75 12.0088 15.75H12C11.5858 15.75 11.25 15.4142 11.25 15C11.25 14.5858 11.5858 14.25 12 14.25H12.0088Z" fill="white" />
                        <path d="M12.7578 8L12.7578 12C12.7578 12.4142 12.422 12.75 12.0078 12.75C11.5936 12.75 11.2578 12.4142 11.2578 12L11.2578 8C11.2578 7.58579 11.5936 7.25 12.0078 7.25C12.422 7.25 12.7578 7.58579 12.7578 8Z" fill="white" />
                    </svg></div>
                    <div className="border">
                        <p className="text-20 text-primary font-regular">Report Title</p>
                        <p className="text-15 text-primary font-medium">Edited on: yesterday</p>
                    </div>
                    <div className="border w-29.5 h-13"><button className="border h-full w-full cursor-pointer text-primary text-16 font-medium bg-brand">Edit Now</button></div>
                </div>
                <div className="border w-91 h-24 flex p-5 items-center justify-between">
                    <div className="border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 8.27206L8.27206 3H15.7279L21 8.27206V15.7279L15.7279 21H8.27206L3 15.7279V8.27206Z" fill="#F9A925" />
                        <path d="M12.0088 14.25C12.423 14.25 12.7588 14.5858 12.7588 15C12.7588 15.4142 12.423 15.75 12.0088 15.75H12C11.5858 15.75 11.25 15.4142 11.25 15C11.25 14.5858 11.5858 14.25 12 14.25H12.0088Z" fill="white" />
                        <path d="M12.7578 8L12.7578 12C12.7578 12.4142 12.422 12.75 12.0078 12.75C11.5936 12.75 11.2578 12.4142 11.2578 12L11.2578 8C11.2578 7.58579 11.5936 7.25 12.0078 7.25C12.422 7.25 12.7578 7.58579 12.7578 8Z" fill="white" />
                    </svg></div>
                    <div className="border">
                        <p className="text-20 text-primary font-regular">Report Title</p>
                        <p className="text-15 text-primary font-medium">Edited on: yesterday</p>
                    </div>
                    <div className="border w-29.5 h-13"><button className="border h-full w-full cursor-pointer text-primary text-16 font-medium bg-brand">Edit Now</button></div>
                </div>
                <div className="border w-91 h-24 flex p-5 items-center justify-between">
                    <div className="border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 8.27206L8.27206 3H15.7279L21 8.27206V15.7279L15.7279 21H8.27206L3 15.7279V8.27206Z" fill="#F9A925" />
                        <path d="M12.0088 14.25C12.423 14.25 12.7588 14.5858 12.7588 15C12.7588 15.4142 12.423 15.75 12.0088 15.75H12C11.5858 15.75 11.25 15.4142 11.25 15C11.25 14.5858 11.5858 14.25 12 14.25H12.0088Z" fill="white" />
                        <path d="M12.7578 8L12.7578 12C12.7578 12.4142 12.422 12.75 12.0078 12.75C11.5936 12.75 11.2578 12.4142 11.2578 12L11.2578 8C11.2578 7.58579 11.5936 7.25 12.0078 7.25C12.422 7.25 12.7578 7.58579 12.7578 8Z" fill="white" />
                    </svg></div>
                    <div className="border">
                        <p className="text-20 text-primary font-regular">Report Title</p>
                        <p className="text-15 text-primary font-medium">Edited on: yesterday</p>
                    </div>
                    <div className="border w-29.5 h-13"><button className="border h-full w-full cursor-pointer text-primary text-16 font-medium bg-brand">Edit Now</button></div>
                </div>
            </div>


            {/* message */}
            <div className="border w-293 m-auto grid grid-cols-2 gap-15 mt-25.5">
                <div className="border p-6 bg-card">
                    <h1 className="text-24 text-primary font-semibold mb-3">Recent Activity</h1>
                    <p className="text-16 text-primary font-regular">- Report published: "India Nutra Market" (Today)</p>
                    <p className="text-16 text-primary font-regular">- Price updated: "Vitamin C Market" (Yesterday)</p>
                    <p className="text-16 text-primary font-regular">- Draft saved: "Germany Pharma" (2 days ago)</p>
                    <p className="text-16 text-primary font-regular">- Report published: "India Nutra Market" (Today)</p>
                    <p className="text-16 text-primary font-regular">- Price updated: "Vitamin C Market" (Yesterday)</p>
                    <p className="text-16 text-primary font-regular">- Draft saved: "Germany Pharma" (2 days ago)</p>
                </div>
                <div className="border p-6 bg-card">
                    <h1 className="text-24 text-primary font-semibold mb-3">Alerts/Warning</h1>
                    <p className="text-16 text-primary font-regular flex items-center gap-2"><IoIosWarning className="text-yellow-500" /> Drafts older than 14 days: 6</p>
                    <p className="text-16 text-primary font-regular flex items-center gap-2"><IoIosWarning className="text-yellow-500" />Missing section PDF files: 2 reports</p>
                    <p className="text-16 text-primary font-regular flex items-center gap-2"><IoIosWarning className="text-yellow-500" />Published reports without preview: 5</p>
                    <p className="text-16 text-primary font-regular flex items-center gap-2"><IoIosWarning className="text-yellow-500" />Drafts older than 14 days: 6</p>
                    <p className="text-16 text-primary font-regular flex items-center gap-2"><IoIosWarning className="text-yellow-500" />Missing section PDF files: 2 reports</p>
                    <p className="text-16 text-primary font-regular flex items-center gap-2"><IoIosWarning className="text-yellow-500" />Published reports without preview: 5</p>
                </div>
                
            </div>
        </div>
    );
};
export default Dash;