import { useState } from "react";

const FilterCategory = () => {


    const [open, setOpen] = useState(null);

    const toggle = (id) => {
        setOpen(open === id ? null : id);
    };


    return (
        <>
            <div className="border">
                <button className="px-8 py-2 text-primary text-15 font-medium bg-brand">Reset Filter</button>
            </div>

            {/* select filter */}
            {/* <div className="border">
                <h1 className="text-primary text-20 font-medium">Selected Filter</h1>
                <div className="border mt-2 flex flex-wrap gap-2">
                    <div className="border px-2 py-1 text-primary text-12 font-regular">Filter1 <span>&times;</span></div>

                    <div className="border px-2 py-1 text-primary text-12 font-regular">Filter2 <span>&times;</span></div>

                    <div className="border px-2 py-1 text-primary text-12 font-regular">Filter3 <span>&times;</span></div>
                    <div className="border px-2 py-1 text-primary text-12 font-regular">Filter3 <span>&times;</span></div>
                </div>
            </div> */}

            <div className="border flex flex-col gap-2">
                {/* <div className="border">
                    <h1 className="text-primary text-15 font-medium">Industry</h1> */}
                <div
                    className="border flex justify-between items-center cursor-pointer xl:cursor-default"
                    onClick={() => toggle(1)}
                >
                    <h1 className="text-primary text-15 font-medium">Industry</h1>
                    {/* <span className="text-xl font-bold xl:hidden">
                        {open === 1 ? "×" : "+"}
                    </span> */}

                    <span className={`text-xl font-bold xl:hidden transition-transform duration-300 ${open === 1 ? "rotate-45" : "rotate-0"}`}>+</span>


                </div>

                {/* </div> */}
                <div className={`overflow-hidden transition-all duration-300 ${open === 1 ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"} xl:max-h-full xl:opacity-100 xl:mt-2`}>

                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Vitamins & Minerals (10)</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Amino Acids (5)</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Herbal Extract (3)</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Functional Ingredients (7)</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="border flex flex-col gap-2">
                {/* <div className="border">
                    <h1 className="text-primary text-15 font-medium">Report Type</h1>
                </div> */}
                <div
                    className="border flex justify-between items-center cursor-pointer xl:cursor-default"
                    onClick={() => toggle(2)}
                >
                    <h1 className="text-primary text-15 font-medium">Report Type</h1>
                    {/* <span className="text-xl font-bold xl:hidden">
                        {open === 2 ? "×" : "+"}
                    </span> */}
                    <span className={`text-xl font-bold xl:hidden transition-transform duration-300 ${open === 2 ? "rotate-45" : "rotate-0"}`}>+</span>
                </div>
                <div className={` overflow-hidden transition-all duration-300 ${open === 2 ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"} xl:max-h-full xl:opacity-100 xl:mt-2`}>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Market Intelligence Reports (1)</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Market Size & Forecast</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Competitive Landscape</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Pricing & Cost Analysis</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Consumer / Usage Insights</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Import / Export & Trade</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Regulatory Environment</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Innovation & Trends</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="border flex flex-col gap-2">
                {/* <div className="border">
                    <h1 className="text-primary text-15 font-medium">Region</h1>
                </div> */}
                <div
                    className="border flex justify-between items-center cursor-pointer xl:cursor-default"
                    onClick={() => toggle(3)}
                >
                    <h1 className="text-primary text-15 font-medium">Region</h1>
                    {/* <span className="text-xl font-bold xl:hidden">
                        {open === 3 ? "×" : "+"}
                    </span> */}
                    <span className={`text-xl font-bold xl:hidden transition-transform duration-300 ${open === 3 ? "rotate-45" : "rotate-0"}`}>+</span>
                </div>
                <div className={` overflow-hidden transition-all duration-300 ${open === 3 ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"} xl:max-h-full xl:opacity-100 xl:mt-2`}>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Global</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">North America</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Latin America</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Europe</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Middle East & Africa</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Asia Pacific</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="border flex flex-col gap-2">
                {/* <div className="border">
                    <h1 className="text-primary text-15 font-medium">Popular Countries</h1>
                </div> */}
                <div
                    className="border flex justify-between items-center cursor-pointer xl:cursor-default"
                    onClick={() => toggle(4)}
                >
                    <h1 className="text-primary text-15 font-medium">Popular Countries</h1>
                    {/* <span className="text-xl font-bold xl:hidden">
                        {open === 4 ? "×" : "+"}
                    </span> */}
                    <span className={`text-xl font-bold xl:hidden transition-transform duration-300 ${open === 4 ? "rotate-45" : "rotate-0"}`}>+</span>
                </div>
                <div className={` overflow-hidden transition-all duration-300 ${open === 4 ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"} xl:max-h-full xl:opacity-100 xl:mt-2`}>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">US</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Germany</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Spain</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">China</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">UK</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">UAE</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="border flex flex-col gap-2">
                {/* <div className="border">
                    <h1 className="text-primary text-15 font-medium">Popular Countries</h1>
                </div> */}
                <div
                    className="border flex justify-between items-center cursor-pointer xl:cursor-default"
                    onClick={() => toggle(5)}
                >
                    <h1 className="text-primary text-15 font-medium">Popular Countries</h1>
                    {/* <span className="text-xl font-bold xl:hidden">
                        {open === 5 ? "×" : "+"}
                    </span> */}
                    <span className={`text-xl font-bold xl:hidden transition-transform duration-300 ${open === 5 ? "rotate-45" : "rotate-0"}`}>+</span>
                </div>
                <div className={` overflow-hidden transition-all duration-300 ${open === 5 ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"} xl:max-h-full xl:opacity-100 xl:mt-2`}>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">US</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Germany</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">Spain</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">China</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">UK</span>
                        </label>
                    </div>
                    <div className="border">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[var(--color-brand-primary)]"
                            />
                            <span className="text-primary text-16 font-regular">UAE</span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FilterCategory;








// import { useState } from "react";

// const FilterCategory = () => {
//     const [open, setOpen] = useState(null);

//     const toggle = (id) => {
//         setOpen(open === id ? null : id);
//     };

//     const Section = ({ id, title, children }) => (
//         <div className="border flex flex-col gap-2">

//             {/* Header */}
//             <div
//                 className="border flex justify-between items-center cursor-pointer xl:cursor-default"
//                 onClick={() => toggle(id)}
//             >
//                 <h1 className="text-primary text-15 font-medium">{title}</h1>
//                 <span className="xl:hidden text-xl font-bold">
//                     {open === id ? "×" : "+"}
//                 </span>
//             </div>

//             {/* Content */}
//             <div className={`overflow-hidden transition-all duration-300 ease-in-out
//                 xl:max-h-full xl:opacity-100
//                 ${open === id ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"}
//             `}>
//                 <div className="flex flex-col gap-2">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );

//     return (
//         <>
//             {/* Reset */}
//             <div className="border">
//                 <button className="px-8 py-2 text-primary text-15 font-medium bg-brand">
//                     Reset Filter
//                 </button>
//             </div>

//             {/* Selected Filter */}
//             <div className="border">
//                 <h1 className="text-primary text-20 font-medium">Selected Filter</h1>
//                 <div className="border mt-2 flex flex-wrap gap-2">
//                     <div className="border px-2 py-1 text-primary text-12 font-regular">Filter1 ×</div>
//                     <div className="border px-2 py-1 text-primary text-12 font-regular">Filter2 ×</div>
//                     <div className="border px-2 py-1 text-primary text-12 font-regular">Filter3 ×</div>
//                 </div>
//             </div>

//             {/* INDUSTRY */}
//             <Section id={1} title="Industry">
//                 <Checkbox text="Vitamins & Minerals (10)" />
//                 <Checkbox text="Amino Acids (5)" />
//                 <Checkbox text="Herbal Extract (3)" />
//                 <Checkbox text="Functional Ingredients (7)" />
//             </Section>

//             {/* REPORT TYPE */}
//             <Section id={2} title="Report Type">
//                 <Checkbox text="Market Intelligence Reports (1)" />
//                 <Checkbox text="Market Size & Forecast" />
//                 <Checkbox text="Competitive Landscape" />
//                 <Checkbox text="Pricing & Cost Analysis" />
//                 <Checkbox text="Consumer / Usage Insights" />
//                 <Checkbox text="Import / Export & Trade" />
//                 <Checkbox text="Regulatory Environment" />
//                 <Checkbox text="Innovation & Trends" />
//             </Section>

//             {/* REGION */}
//             <Section id={3} title="Region">
//                 <Checkbox text="Global" />
//                 <Checkbox text="North America" />
//                 <Checkbox text="Latin America" />
//                 <Checkbox text="Europe" />
//                 <Checkbox text="Middle East & Africa" />
//                 <Checkbox text="Asia Pacific" />
//             </Section>

//             {/* POPULAR COUNTRIES */}
//             <Section id={4} title="Popular Countries">
//                 <Checkbox text="US" />
//                 <Checkbox text="Germany" />
//                 <Checkbox text="Spain" />
//                 <Checkbox text="China" />
//                 <Checkbox text="UK" />
//                 <Checkbox text="UAE" />
//             </Section>

//             {/* MORE COUNTRIES */}
//             <Section id={5} title="Popular Countries">
//                 <Checkbox text="US" />
//                 <Checkbox text="Germany" />
//                 <Checkbox text="Spain" />
//                 <Checkbox text="China" />
//                 <Checkbox text="UK" />
//                 <Checkbox text="UAE" />
//             </Section>
//         </>
//     );
// };

// /* Checkbox Component */
// const Checkbox = ({ text }) => (
//     <div className="border">
//         <label className="flex items-center gap-2 cursor-pointer">
//             <input
//                 type="checkbox"
//                 className="h-4 w-4 accent-[var(--color-brand-primary)]"
//             />
//             <span className="text-primary text-16 font-regular">{text}</span>
//         </label>
//     </div>
// );

// export default FilterCategory;
