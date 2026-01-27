import { useState } from "react";

const FormStep2 = () => {

    //  for checkbox1
    const [selected, setSelected] = useState([]);

    const handleChange = (value, checked) => {
        if (checked) {
            setSelected((prev) => [...prev, value]);
        } else {
            setSelected((prev) => prev.filter((item) => item !== value));
        }
    };

    //  for checkbox2
    const [selected1, setSelected1] = useState([]);

    const handleChange1 = (value, checked) => {
        if (checked) {
            setSelected1((prev) => [...prev, value]);
        } else {
            setSelected1((prev) => prev.filter((item) => item !== value));
        }
    };

    const checkBox1 = ["Market & Demand", "Competitive Landscape", "Strategic Insights", "Pricing & Economics", "Trade & Supply Chain", "Innovation & Trends", "Geography", "Forecasting & Outlook", "Regulation & Compliance"];

    const checkBox2 = ["Product & Portfolio Decisions", "Competitive Strategy", "Investment & Financial Planning", "Market Entry & Expansion", "Pricing & Commercial Strategy", "Supply Chain & Sourcing", "Risk & Feasibility Assessment", "Strategic Communication"];

    return (
        <>
            <div className="border-2 border-red-500 w-full m-auto flex flex-col gap-5">
                <div className="border">
                    <h1 className="text-24 font-medium text-primary">Scope & Decision Value (form setp2)</h1>
                    <p className="text-16 font-regular text-primary">Control report positioning & conversion copy</p>
                </div>

                <div className="border">
                    <h1 className="text-20 font-medium text-primary">What this report covers <sup>*</sup></h1>
                    <div className="border grid grid-cols-3 gap-5">
                        {checkBox1.map((item, index) => (
                            <label key={index} className="border flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    value={item}
                                    checked={selected.includes(item)}
                                    onChange={(e) => handleChange(item, e.target.checked)}
                                />
                                <span>{item}</span>
                            </label>
                        ))}

                        {/* Debug output */}
                        {/* <pre className="mt-4 text-sm">{JSON.stringify(selected, null, 2)}</pre> */}
                    </div>
                </div>
                <div className="border">
                    <h1 className="text-20 font-medium text-primary">What decisions this report supports <sup>*</sup></h1>
                    <div className="border grid grid-cols-3 gap-5">
                        {checkBox2.map((item, index) => (
                            <label key={index} className="border flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    value={item}
                                    checked={selected1.includes(item)}
                                    onChange={(e) => handleChange1(item, e.target.checked)}
                                />
                                <span>{item}</span>
                            </label>
                        ))}

                        {/* Debug output */}
                        {/* <pre className="mt-4 text-sm">{JSON.stringify(selected1)}</pre> */}
                    </div>
                </div>


            </div>
        </>
    )
}
export default FormStep2;