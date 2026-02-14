import selective from '../assets/selective.svg';
import Group from '../assets/Group.svg';
import download from '../assets/download.svg';
import frame1 from '../assets/frame1.jpeg';
import circleArrow from '../assets/circle-arrow.svg';
import c1 from '../assets/c1.svg';
import c2 from '../assets/c2.svg';
import c3 from '../assets/c3.svg';
import c4 from '../assets/c4.svg';
import { useNavigate } from 'react-router-dom';
import { base_url } from '../URL';
import Breadcrumbs from './BreadCrumbs';
import { curatedData, howThisHelpsYou, textContainerData } from './Data';
import WhyChooseUs from './WhyChooseUs';
import HomePageCards from './HomePageCards';

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <>
            {/* main content */}
            {/* <div className="border border-red-500">
                <Breadcrumbs/>
            </div> */}
            <div className=" h-120 flex items-center w-full hero-bg-img">
                <div className=" w-80 sm:w-140 xl:w-285 m-auto flex gap-5 justify-center">
                    <div className=" w-80 sm:w-140">
                        <div>
                            <h1 className="text-32 text-primary font-semibold">Decision-orianted, not feature-orianted</h1>
                            <p className="text-16 text-primary font-regular mt-2 ">Comprehensive market trends, comsumer analysis and competitive landscape <br /> reports</p>
                        </div>

                        <div className=" mt-8 flex gap-7">
                            <button className="py-2 px-8 bg-surface text-primary text-15 font-medium cursor-pointer hover:bg-gray-100" onClick={()=>navigate("/report")}>Browse Reports</button>
                            <button className="py-2 px-8 border-text-primary text-primary text-15 font-medium cursor-pointer">Search Market Data</button>
                        </div>
                    </div>

                    <div className=" w-140 hidden xl:block">
                    </div>
                </div>
            </div>

            {/* 3 cards*/}
            <div className=" w-80 md:w-188 xl:w-285 m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-18">

                {/* card 1 */}
                <HomePageCards
                    txt1={"Consumer Goods"}
                    txt2={"Designed to support product launches, portfolio expansion, and market sizing desicions."}
                    label1={"market study"}
                    label2={"importers"}
                    label3={"pricing"}
                />

                {/* card 2 */}
                <HomePageCards
                    txt1={"Health & Wellness"}
                    txt2={"Data-driven insights covering nutraceuticals, supplements, wellness ingredients, and preventive health markets"}
                    label1={"market study"}
                    label2={"importers"}
                    label3={"pricing"}
                />

                {/* card 3 */}
                <HomePageCards
                    txt1={"Ingredients & Materials"}
                    txt2={"In-depth analysis of functional ingredients, raw materials, excipients, and specialty chemicals."}
                    label1={"market study"}
                    label2={"importers"}
                    label3={"pricing"}
                />
            </div>

            {/* why choose us*/}
            <div className=" bg-section">
                <div className=" py-18">
                    <h1 className="text-24 text-primary font-semibold text-center">Why Choose Us</h1>
                    <div className=" w-63.5 grid grid-cols-1 sm:w-138 sm:grid-cols-2 xl:w-287 xl:grid-cols-4 gap-11 pt-12  m-auto">
                        {/* card 1 */}
                        <WhyChooseUs
                            imgPath={c1}
                            title={"Generic Credible"}
                            subtitle={"Our reports are built using verified public data sources, trade statistics, company disclosures and structured research ensuring reliability without unnecessary assumptions."}
                        />

                        {/* card 2 */}
                        <WhyChooseUs
                            imgPath={c2}
                            title={"Updated Frequently"}
                            subtitle={"Markets change fast. We regularly update key data points, pricing signals, and competitive landscapes so decisions are based on current information, not outdated reports"}
                        />

                        {/* card 3 */}
                        <WhyChooseUs
                            imgPath={c3}
                            title={"Methodology Transparency"}
                            subtitle={"Each report clearly explains data sources, assumptions, estimation logic, and limitations; so you know exactly how insights are derived and can trust the outcomes"}
                        />

                        {/* card 4 */}

                        <WhyChooseUs
                            imgPath={c4}
                            title={"In-Detail Study"}
                            subtitle={"Beyond surface-level summaries, our reports dive into market structure, value chains, competitor positioning, pricing layers, and future outlooks enabling confident decision-making"}
                        />
                    </div>
                </div>
            </div>


            {/* Curated for your use cases */}
            <div className="">
                <div className=" py-18">
                    <h1 className="text-24 text-primary font-semibold text-center">Curated for your use cases</h1>
                    <div className=" w-80 sm:w-111 lg:w-225 xl:w-285 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 pt-12 m-auto">
                        {/* card 1 */}

                        {
                            curatedData?.map((curated, i) => {
                                return (
                                    <div className="border-brand-primary p-5 w-full sm:w-54 h-24 text-center content-center" key={i}>
                                        <h1 className="text-20 text-primary font-medium">{curated}</h1>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>


            {/* Popular Reports */}
            {/* <div className=" bg-section">
                <div className=" py-18">
                    <h1 className="text-24 text-primary font-semibold text-center">Popular Reports</h1>
                    <div className=" w-67 sm:w-140 grid grid-cols-1 sm:grid-cols-2 xl:w-285 xl:grid-cols-4 gap-6 pt-12 m-auto">

                        
                        <div className=" h-102 w-67 bg-surface">
                            <div className=" h-[42%]">
                                <div className=" px-4 pt-4">
                                    <h1 className='text-primary text-20 font-medium'>Consumer Goods Market Report - Consumer and Exporters</h1>
                                </div>
                                <div className=" mt-5 flex px-4 py-2 justify-between">
                                    <span className='text-primary text-16 font-regular'>$1299</span>
                                    <button className='flex gap-2'>
                                        <span className='text-primary text-15 font-medium'>Browse Reports</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9.46967 5.46967C9.76256 5.17678 10.2373 5.17678 10.5302 5.46967L15.8232 10.7626C15.9748 10.9143 16.1426 11.0806 16.2636 11.2392C16.3978 11.4151 16.5429 11.6665 16.5429 11.9999C16.5429 12.3334 16.3978 12.5848 16.2636 12.7607C16.1426 12.9193 15.9748 13.0856 15.8232 13.2372L10.5302 18.5302C10.2373 18.8231 9.76256 18.8231 9.46967 18.5302C9.17678 18.2373 9.17678 17.7626 9.46967 17.4697L14.7626 12.1767C14.8324 12.107 14.8883 12.0497 14.9365 11.9999C14.8883 11.9502 14.8324 11.8929 14.7626 11.8232L9.46967 6.53022C9.17678 6.23732 9.17678 5.76256 9.46967 5.46967Z" fill="#001413" />
                                        </svg></span>
                                    </button>
                                </div>
                            </div>

                            <div className=" relative h-[58%]">
                                <img src={frame1} alt="image" className='h-full w-full' />
                                <div className=" absolute flex gap-2 px-4 bottom-4">
                                    <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Market Study</div>
                                    <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Importers</div>
                                    <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Pricing</div>
                                </div>
                            </div>
                        </div>

                    
                        <div className=" h-102 w-67 bg-surface">
                            <div className=" h-[42%]">
                                <div className=" px-4 pt-4">
                                    <h1 className='text-primary text-20 font-medium'>Consumer Goods Market Report - Consumer and Exporters</h1>
                                </div>
                                <div className=" mt-5 flex px-4 py-2 justify-between">
                                    <span className='text-primary text-16 font-regular'>$1299</span>
                                    <button className='flex gap-2'>
                                        <span className='text-primary text-15 font-medium'>Browse Reports</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9.46967 5.46967C9.76256 5.17678 10.2373 5.17678 10.5302 5.46967L15.8232 10.7626C15.9748 10.9143 16.1426 11.0806 16.2636 11.2392C16.3978 11.4151 16.5429 11.6665 16.5429 11.9999C16.5429 12.3334 16.3978 12.5848 16.2636 12.7607C16.1426 12.9193 15.9748 13.0856 15.8232 13.2372L10.5302 18.5302C10.2373 18.8231 9.76256 18.8231 9.46967 18.5302C9.17678 18.2373 9.17678 17.7626 9.46967 17.4697L14.7626 12.1767C14.8324 12.107 14.8883 12.0497 14.9365 11.9999C14.8883 11.9502 14.8324 11.8929 14.7626 11.8232L9.46967 6.53022C9.17678 6.23732 9.17678 5.76256 9.46967 5.46967Z" fill="#001413" />
                                        </svg></span>
                                    </button>
                                </div>
                            </div>

                            <div className=" relative h-[58%]">
                                <img src={frame1} alt="image" className='h-full w-full' />
                                <div className=" absolute flex gap-2 px-4 bottom-4">
                                    <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Market Study</div>
                                    <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Importers</div>
                                    <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Pricing</div>
                                </div>
                            </div>
                        </div>

                       
                        <div className=" h-102 w-67 bg-surface">
                            <div className=" h-[42%]">
                                <div className=" px-4 pt-4">
                                    <h1 className='text-primary text-20 font-medium'>Consumer Goods Market Report - Consumer and Exporters</h1>
                                </div>
                                <div className=" mt-5 flex px-4 py-2 justify-between">
                                    <span className='text-primary text-16 font-regular'>$1299</span>
                                    <button className='flex gap-2'>
                                        <span className='text-primary text-15 font-medium'>Browse Reports</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9.46967 5.46967C9.76256 5.17678 10.2373 5.17678 10.5302 5.46967L15.8232 10.7626C15.9748 10.9143 16.1426 11.0806 16.2636 11.2392C16.3978 11.4151 16.5429 11.6665 16.5429 11.9999C16.5429 12.3334 16.3978 12.5848 16.2636 12.7607C16.1426 12.9193 15.9748 13.0856 15.8232 13.2372L10.5302 18.5302C10.2373 18.8231 9.76256 18.8231 9.46967 18.5302C9.17678 18.2373 9.17678 17.7626 9.46967 17.4697L14.7626 12.1767C14.8324 12.107 14.8883 12.0497 14.9365 11.9999C14.8883 11.9502 14.8324 11.8929 14.7626 11.8232L9.46967 6.53022C9.17678 6.23732 9.17678 5.76256 9.46967 5.46967Z" fill="#001413" />
                                        </svg></span>
                                    </button>
                                </div>
                            </div>

                            <div className=" relative h-[58%]">
                                <img src={frame1} alt="image" className='h-full w-full' />
                                <div className=" absolute flex gap-2 px-4 bottom-4">
                                    <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Market Study</div>
                                    <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Importers</div>
                                    <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Pricing</div>
                                </div>
                            </div>
                        </div>

                      
                        <div className=" h-102 w-67 bg-surface">
                            <div className=" h-[42%]">
                                <div className=" px-4 pt-4">
                                    <h1 className='text-primary text-20 font-medium'>Consumer Goods Market Report - Consumer and Exporters</h1>
                                </div>
                                <div className=" mt-5 flex px-4 py-2 justify-between">
                                    <span className='text-primary text-16 font-regular'>$1299</span>
                                    <button className='flex gap-2'>
                                        <span className='text-primary text-15 font-medium'>Browse Reports</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9.46967 5.46967C9.76256 5.17678 10.2373 5.17678 10.5302 5.46967L15.8232 10.7626C15.9748 10.9143 16.1426 11.0806 16.2636 11.2392C16.3978 11.4151 16.5429 11.6665 16.5429 11.9999C16.5429 12.3334 16.3978 12.5848 16.2636 12.7607C16.1426 12.9193 15.9748 13.0856 15.8232 13.2372L10.5302 18.5302C10.2373 18.8231 9.76256 18.8231 9.46967 18.5302C9.17678 18.2373 9.17678 17.7626 9.46967 17.4697L14.7626 12.1767C14.8324 12.107 14.8883 12.0497 14.9365 11.9999C14.8883 11.9502 14.8324 11.8929 14.7626 11.8232L9.46967 6.53022C9.17678 6.23732 9.17678 5.76256 9.46967 5.46967Z" fill="#001413" />
                                        </svg></span>
                                    </button>
                                </div>
                            </div>

                            <div className=" relative h-[58%]">
                                <img src={frame1} alt="image" className='h-full w-full' />
                                <div className=" absolute flex gap-2 px-4 bottom-4">
                                    <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Market Study</div>
                                    <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Importers</div>
                                    <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Pricing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* How this helps you decide */}
            <div className="">
                <div className=" py-18">
                    <h1 className="text-24 text-primary font-semibold text-center">How this helps you decide</h1>
                    <div className=" w-80 grid grid-cols-1 sm:w-160 sm:grid-cols-2 xl:grid-cols-4 gap-6 py-20 xl:w-285 m-auto pt-12">
                        {/* card 1 */}
                        {
                            howThisHelpsYou?.map((titleText, i) => {
                                return (
                                    <div className="border-text-secondary w-full sm:w-67 h-24 bg-surface text-center content-center relative" key={i}>
                                        <h1 className="text-20 text-primary font-regular">{titleText}</h1>
                                        <div className="div border-brand-primary absolute bottom-0 w-full"></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* How to get modular report */}
            <div className=" bg-section">
                <div className=" py-18">
                    <h1 className="text-24 text-primary font-semibold text-center">How to get modular report</h1>
                    <div className=" w-80 flex flex-col lg:flex-row items-center gap-13 pt-12 lg:w-209 m-auto">
                        {/* card 1 */}
                        <div className=" w-44 h-45">
                            <div className=' h-25 w-25 m-auto'>
                                <img src={selective} alt="image" className='h-full w-full' />
                            </div>
                            <div className='px-2 mt-5'>
                                <p className='text-primary text-20 font-medium text-center'>Choose industry or market</p>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className=" w-12 h-12">
                            <img src={circleArrow} alt="icon" className='h-ful w-full' />
                        </div>

                        {/* card 3 */}
                        <div className=" w-44 h-45">
                            <div className=' h-25 w-25 m-auto'>
                                <img src={Group} alt="image" className='h-full w-full' />
                            </div>
                            <div className='px-2 mt-5'>
                                <p className='text-primary text-20 font-medium text-center'>Buy full report or specific sections</p>
                            </div>
                        </div>

                        {/* card 4 */}
                        <div className=" w-12 h-12">
                            <img src={circleArrow} alt="icon" className='h-ful w-full' />
                        </div>

                        {/* card5 */}
                        <div className=" w-44 h-45">
                            <div className=' h-25 w-25 m-auto'>
                                <img src={download} alt="image" className='h-full w-full' />
                            </div>
                            <div className='px-2 mt-5'>
                                <p className='text-primary text-20 font-medium text-center'>Download or view online</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* text container */}
            <div className=" w-80 sm:w-160 lg:w-240 m-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:w-314 xl:grid-cols-7 gap-8.5 text-15 text-primary font-medium py-18">
                {
                    textContainerData?.map((textContainerTitle, i) => {
                        return (
                            <div className="border-brand-primary py-3 text-center" key={i}>{textContainerTitle}</div>
                        )
                    })
                }
            </div>
        </>
    );
};
export default HomePage;
