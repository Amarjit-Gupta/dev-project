// // App.jsx
// import { useEffect, useRef, useState } from "react";
// import { RxCaretDown } from "react-icons/rx";

// // API data
// // const apiData = {
// //     sections: [
// //         "1 Executive Summary",
// //         "1.1 Key findings and insights",
// //         "1.2 Market size and growth snapshot",
// //         "1.3 Key drivers, risks, and opportunities",
// //         "1.4 Strategic takeaways",
// //         "2 Introduction and Scope Definition",
// //         "2.1 Study objective",
// //         "2.2 Market definition",
// //         "2.3 Scope boundaries",
// //         "2.4 Assumptions and limitations",
// //         "3 Research Methodology",
// //         "3.1 Primary research sources",
// //         "3.2 Secondary research sources",
// //         "3.3 Data triangulation approach",
// //         "3.4 Estimation and forecasting methodology",
// //         "3.5 Validation techniques",
// //         "4 Market Overview",
// //         "4.1 Industry background",
// //         "4.2 Market evolution",
// //         "4.3 Ecosystem analysis",
// //         "4.4 Value chain analysis",
// //         "4.5 Market structure",
// //         "4.6 Country-Level Breakdown",
// //         "4.7 North America",
// //         "4.8 Europe",
// //         "4.9 Asia-Pacific",
// //         "4.10 Latin America",
// //         "4.11 Middle East and Africa",
// //         "5 Market Size and Forecast Analysis",
// //         "5.1 Global market size",
// //         "5.2 Historical market trends",
// //         "5.3 Market forecast",
// //         "5.4 CAGR analysis",
// //         "5.5 Pricing and inflation impact",
// //         "6 Market Segmentation Analysis",
// //         "6.1 Segmentation by product type",
// //         "6.2 Segmentation by application",
// //         "6.3 Segmentation by end user",
// //         "6.4 Segmentation by region",
// //         "7 Market Dynamics",
// //         "7.1 Market drivers",
// //         "7.2 Market restraints",
// //         "7.3 Market opportunities",
// //         "7.4 Market challenges",
// //         "8 Pricing and Cost Structure Analysis",
// //         "8.1 Price range analysis",
// //         "8.2 Cost structure breakdown",
// //         "8.3 Margin analysis",
// //         "8.4 Price trend analysis",
// //         "9 Technology and Innovation Landscape",
// //         "9.1 Current technologies",
// //         "9.2 Emerging innovations",
// //         "9.3 R&D trends",
// //         "9.4 Technology adoption",
// //         "10 Regulatory and Compliance Landscape",
// //         "10.1 Key regulations and authorities",
// //         "10.2 Regional regulatory overview",
// //         "10.3 Certifications and standards",
// //         "10.4 Regulatory impact analysis",
// //         "11 Competitive Landscape",
// //         "11.1 Market share analysis",
// //         "11.2 Competitive benchmarking",
// //         "11.3 Porter’s Five Forces analysis",
// //         "11.4 Strategic positioning",
// //         "11.5 Country-Level Breakdown",
// //         "11.6 North America",
// //         "11.7 Europe",
// //         "11.8 Asia-Pacific",
// //         "11.9 Latin America",
// //         "11.10 Middle East and Africa",
// //         "12 Company Profiles",
// //         "12.1 Company overview",
// //         "12.2 Product portfolio",
// //         "12.3 Financial performance",
// //         "12.4 Strategic initiatives",
// //         "13 Regional and Country-Level Analysis",
// //         "13.1 North America",
// //         "13.2 Europe",
// //         "13.3 Asia-Pacific",
// //         "13.4 Latin America",
// //         "13.5 Middle East and Africa",
// //         "14 Strategic Insights and Recommendations",
// //         "14.1 Market entry strategies",
// //         "14.2 Growth opportunities",
// //         "14.3 Investment hotspots",
// //         "14.4 Partnership and M&A strategies",
// //         "15 Future Outlook and Scenario Analysis",
// //         "15.1 Short-term outlook",
// //         "15.2 Long-term projections",
// //         "15.3 Risk scenarios",
// //         "15.4 Disruptive trends",
// //         "16 Appendix and Disclaimer",
// //         "16.1 Data tables",
// //         "16.2 Abbreviations",
// //         "16.3 Methodology notes",
// //         "16.4 Disclaimer",
// //         "17 Consumer and Buyer Behavior Analysis",
// //         "17.1 Purchase drivers",
// //         "17.2 Adoption barriers",
// //         "17.3 Usage patterns",
// //         "17.4 Decision-making criteria",
// //         "18 Conclusion and Strategic Outlook",
// //         "18.1 Key Findings Summary",
// //         "18.2 Strategic Recommendations",
// //         "18.3 Future Outlook",

// //         "19 Conclusion and Strategic Outlook",
// //         "19.1 Key Findings Summary",
// //         "19.2.3 Strategic Recommendations"
// //     ],
// // };

// // accordian data
// const prepareAccordionData = (data) => {
//     const result = [];
//     let currentMain = null;
//     let currentSub = null;

//     data.sections.forEach((section) => {
//         const [number] = section.split(" ");
//         const parts = number.split(".");
//         const level = parts.length;

//         // LEVEL 1
//         if (level === 1) {
//             currentMain = {
//                 value: `section-${number}`,
//                 trigger: section,
//                 content: [],
//             };
//             result.push(currentMain);
//             currentSub = null;
//         }

//         // LEVEL 2
//         else if (level === 2 && currentMain) {
//             currentSub = {
//                 title: section,
//                 children: [],
//             };
//             currentMain.content.push(currentSub);
//         }

//         // LEVEL 3 (safe even if level-2 missing)
//         else if (level === 3 && currentMain) {
//             if (!currentSub) {
//                 const autoSubNumber = parts.slice(0, 2).join(".");
//                 currentSub = {
//                     title: `${autoSubNumber} Auto Section`,
//                     children: [],
//                 };
//                 currentMain.content.push(currentSub);
//             }

//             currentSub.children.push(section);
//         }
//     });

//     return result;
// };

// // const accordionItems = prepareAccordionData(apiData);



// const TableContent = ({tableContent}) => {

//     console.log("tablecon: ",tableContent);


//     // const accordionItems = prepareAccordionData(tableContent);

//     const [openSection, setOpenSection] = useState(null);
//     const refs = useRef({});



//     // const getTableContent = async () => {
//     //     try {
//     //         let result = await fetch("");
//     //         let data = await result.json();
//     //         console.log("tbl data:",data);
//     //     } catch (err) {
//     //         console.log("something went wrong...");
//     //     }
//     // }



//     // useEffect(() => {
//     //     getTableContent();
//     // },[])

//     const toggleSection = (value) => {
//         setOpenSection(openSection === value ? null : value);
//     };

//     return (
//         <div className="">
//             {accordionItems.map((item) => {
//                 const isOpen = openSection === item.value;

//                 return (
//                     <div key={item.value} className=" rounded mb-2 overflow-hidden">
//                         {/* Header */}
//                         <button
//                             onClick={() => toggleSection(item.value)}
//                             className="w-full flex justify-between items-center px-4 sm:px-6 py-2 bg-gray-100 hover:bg-gray-200 cursor-pointer"
//                         >
//                             <div className="flex gap-2 flex-wrap">
//                                 <span className="font-bold text-15 sm:text-base">
//                                     {item.trigger.split(" ")[0]}
//                                 </span>
//                                 <span className="text-primary">
//                                     {item.trigger.split(" ").slice(1).join(" ")}
//                                 </span>
//                             </div>

//                             <RxCaretDown
//                                 className={`text-20 transition-transform ${isOpen ? "rotate-180" : ""
//                                     }`}
//                             />
//                         </button>

//                         {/* Content */}
//                         <div
//                             ref={(el) => (refs.current[item.value] = el)}
//                             style={{
//                                 maxHeight: isOpen
//                                     ? refs.current[item.value]?.scrollHeight + "px"
//                                     : "0px",
//                                 overflow: "hidden",
//                                 transition: "max-height 0.3s ease",
//                             }}
//                         >
//                             <div className="px-4 sm:px-6 py-3 bg-surface">
//                                 {item.content.map((sub, idx) => (
//                                     <div key={idx} className="mb-2">
//                                         {/* LEVEL 2 */}
//                                         <div className="flex gap-4">
//                                             <span className="font-medium text-15 sm:text-base">
//                                                 {sub.title.split(" ")[0]}
//                                             </span>
//                                             <span className="text-15 sm:text-base">
//                                                 {sub.title.split(" ").slice(1).join(" ")}
//                                             </span>
//                                         </div>

//                                         {/* LEVEL 3 */}
//                                         {sub.children.length > 0 && (
//                                             <div className="ml-6 mt-1 space-y-1">
//                                                 {sub.children.map((child, i) => (
//                                                     <div key={i} className="flex gap-3">
//                                                         <span className="min-w-[3.5rem] text-15">
//                                                             {child.split(" ")[0]}
//                                                         </span>
//                                                         <span className="text-15">
//                                                             {child.split(" ").slice(1).join(" ")}
//                                                         </span>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

// export default TableContent;




























import { useRef, useState } from "react";
import { RxCaretDown } from "react-icons/rx";


const prepareAccordionData = (sections = []) => {

    if (!Array.isArray(sections) || sections.length === 0) {
        return [];
    }

    const result = [];
    let currentMain = null;
    let currentSub = null;

    sections.forEach((rawSection) => {
        // Defensive: ensure valid string
        if (typeof rawSection !== "string") return;

        const section = rawSection.trim();
        if (!section) return;

        const firstToken = section.split(" ")[0];
        if (!firstToken) return;

        const parts = firstToken.split(".").filter(Boolean);
        const level = parts.length;

        // level 1
        if (level === 1) {
            currentMain = {
                value: `section-${parts[0]}`,
                trigger: section,
                content: [],
            };

            result.push(currentMain);
            currentSub = null;
            return;
        }

        //  level 2 
        if (level === 2 && currentMain) {
            currentSub = {
                title: section,
                children: [],
            };

            currentMain.content.push(currentSub);
            return;
        }

        // level 3 
        if (level === 3 && currentMain) {
            // Auto-create missing level-2 safely
            if (!currentSub) {
                const autoSubNumber = parts.slice(0, 2).join(".");
                currentSub = {
                    title: `${autoSubNumber} Auto Section`,
                    children: [],
                };
                currentMain.content.push(currentSub);
            }

            currentSub.children.push(section);
        }
    });

    return result;
};

const TableContent = ({ tableContent }) => {

    // console.log("tablecon: ", tableContent);

    if (!Array.isArray(tableContent) || tableContent.length === 0) {
        return null;
    }

    const accordionItems = prepareAccordionData(tableContent);


    const [openSection, setOpenSection] = useState(null);
    const refs = useRef({});

    const toggleSection = (value) => {
        setOpenSection(openSection === value ? null : value);
    };

    return (
        <div className="">
            {accordionItems.map((item) => {
                const isOpen = openSection === item.value;

                return (
                    <div key={item.value} className=" rounded mb-2 overflow-hidden">
                        {/* Header */}
                        <button
                            onClick={() => toggleSection(item.value)}
                            className="w-full flex justify-between items-center px-4 sm:px-6 py-2 bg-gray-100 hover:bg-gray-200 cursor-pointer"
                        >
                            <div className="flex gap-2 flex-wrap">
                                <span className="font-bold text-15 sm:text-base">
                                    {item.trigger.split(" ")[0]}
                                </span>
                                <span className="text-primary">
                                    {item.trigger.split(" ").slice(1).join(" ")}
                                </span>
                            </div>

                            <RxCaretDown
                                className={`text-20 transition-transform ${isOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Content */}
                        <div
                            ref={(el) => (refs.current[item.value] = el)}
                            style={{
                                maxHeight: isOpen
                                    ? refs.current[item.value]?.scrollHeight + "px"
                                    : "0px",
                                overflow: "hidden",
                                transition: "max-height 0.3s ease",
                            }}
                        >
                            <div className="px-4 sm:px-6 py-3 bg-surface">
                                {item.content.map((sub, idx) => (
                                    <div key={idx} className="mb-2">
                                        {/* LEVEL 2 */}
                                        <div className="flex gap-4">
                                            <span className="font-medium text-15 sm:text-base">
                                                {sub.title.split(" ")[0]}
                                            </span>
                                            <span className="text-15 sm:text-base">
                                                {sub.title.split(" ").slice(1).join(" ")}
                                            </span>
                                        </div>

                                        {/* LEVEL 3 */}
                                        {sub.children.length > 0 && (
                                            <div className="ml-6 mt-1 space-y-1">
                                                {sub.children.map((child, i) => (
                                                    <div key={i} className="flex gap-3">
                                                        <span className="min-w-[3.5rem] text-15">
                                                            {child.split(" ")[0]}
                                                        </span>
                                                        <span className="text-15">
                                                            {child.split(" ").slice(1).join(" ")}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TableContent;
