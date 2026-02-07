import { useState, useRef, useEffect } from "react";
import { countries, roles } from "./Data";
import { RiLoader4Fill } from "react-icons/ri";
import { nURL } from "../URL";


const ContactUs = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [message, setMessage] = useState("");

    const [loader3, setLoader3] = useState(false);

    const [error, setError] = useState(false);

    // for country  state
    const [search, setSearch] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [countryOpen, setCountryopen] = useState(false);
    const dropdownRef = useRef(null);

    // for role  state
    const [selectedRole, setSelectedRole] = useState("");
    const [roleOpen, setRoleOpen] = useState(false);

    const roleRef = useRef(null);


    // for country
    // outside click close
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setCountryopen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredCountries = countries.filter((country) =>
        country.toLowerCase().includes(search.toLowerCase())
    );

    // for role

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (roleRef.current && !roleRef.current.contains(e.target)) {
                setRoleOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name.trim() || !email.trim() || !contact.trim() || !companyName.trim()) {
            setError(true);
            return;
        }
        try {
            setLoader3(true);
            console.log("api called...");
            let payload = {
                full_name: name,
                business_email_address: email,
                contact_number: contact,
                company_name: companyName,
                role: selectedRole,
                location: selectedCountry,
                message: message
            }

            console.log("formPayload: ", payload);

            let emailResult = await fetch(`${nURL}/contact/submit`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json"
                },
                // credentials: "include"
            });
            let emailData = await emailResult.json();
            console.log("emailData: ", emailData);
            if (emailData.success) {
                setName("");
                setEmail("");
                setContact("");
                setCompanyName("");
                setSelectedRole("");
                setSelectedCountry("");
                setMessage("");
                setError(false);
                alert(emailData.message || "Your message has been sent.");
            } else {
                alert(emailData.message || "Your message has not been sent.");
            }


        }
        catch (err) {
            console.log("something went wrong...", err.message);
        } finally {
            setLoader3(false);
        }
    }

    return (



        <div className={`border border-red-500 w-80 sm:w-155 md:w-180 m-auto p-3 bg-gray-100 my-5`}>

            <div className="border mt-4">
                <h1 className="text-primary text-24 font-regular">Contact with us</h1>
                <p className="text-primary text-16 font-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe commodi ut quod</p>
                {/* <p className="text-primary text-24 font-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe commodi ut quod</p> */}
            </div>
            {/* form */}

            <div className="border mt-7">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {/*  */}
                    <div className="border">
                        <label htmlFor="" className="font-medium">Full Name <sup>*</sup></label>
                        <input type="text" className="h-9 w-full border bg-surface px-1" placeholder="Enter Full name" value={name} onChange={(e) => setName(e.target.value)} />
                        {error && !name && <p className="text-15 text-red-500">Please Enter Full Name</p>}

                    </div>

                    {/*  */}
                    <div className="border">
                        <label htmlFor="" className="font-medium">Business Email Address <sup>*</sup></label>
                        <input type="email" className="h-9 w-full border bg-surface px-1" placeholder="Enter Full name" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {error && !email && <p className="text-15 text-red-500">Please Enter Email</p>}
                    </div>

                    {/*  */}
                    <div className="border">
                        <label htmlFor="" className="font-medium">Contact Number <sup>*</sup></label>
                        <input type="text" className="h-9 w-full border bg-surface px-1" placeholder="Enter Contact Number" value={contact} onChange={(e) => setContact(e.target.value)} />
                        {error && !contact && <p className="text-15 text-red-500">Please Enter Contact Number</p>}
                    </div>

                    {/*  */}
                    <div className="border">
                        <label htmlFor="" className="font-medium">Company Name <sup>*</sup></label>
                        <input type="text" className="h-9 w-full border bg-surface px-1" placeholder="Enter Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        {error && !companyName && <p className="text-15 text-red-500">Please Enter Company Name</p>}
                    </div>


                    {/* Role */}
                    <div ref={roleRef} className="relative w-full border">
                        <label className="block mb-1 font-medium">
                            Role
                        </label>

                        {/* Selected box */}
                        <div
                            onClick={() => setRoleOpen(!roleOpen)}
                            className="border border-gray-300 bg-white px-3 py-2 rounded cursor-pointer select-none"
                        >
                            {selectedRole || "---Select Role---"}
                        </div>

                        {roleOpen && (
                            <div className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded shadow-md">
                                {roles.map((role, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setSelectedRole(role);
                                            setRoleOpen(false);
                                        }}
                                        className="px-3 py-2 cursor-pointer hover:bg-gray-200 text-sm"
                                    >
                                        {role}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>


                    {/* country */}
                    <div ref={dropdownRef} className="relative w-full">
                        <label className="block mb-1 font-medium">
                            Location:
                        </label>
                        {/* Selected box */}
                        <div
                            onClick={() => setCountryopen(!countryOpen)}
                            className="border border-gray-300 bg-white px-3 py-2 rounded cursor-pointer select-none"
                        >
                            {selectedCountry || "---Select Country---"}
                        </div>

                        {countryOpen && (
                            <div className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded shadow-md">
                                {/* Search input */}
                                <input
                                    type="text"
                                    placeholder="Search country..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full px-3 py-2 border-b"
                                />

                                {/* List */}
                                <div className="max-h-40 overflow-y-auto">
                                    {filteredCountries.length > 0 ? (
                                        filteredCountries.map((country, index) => (
                                            <div
                                                key={index}
                                                onClick={() => {
                                                    setSelectedCountry(country);
                                                    setCountryopen(false);
                                                    setSearch("");
                                                }}
                                                className="px-3 py-2 cursor-pointer hover:bg-gray-200 text-sm"
                                            >
                                                {country}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="px-3 py-2 text-gray-400 text-sm">
                                            No country found
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* message */}

                    <div className="border">
                        <label htmlFor="" className="font-medium">Message</label>
                        <textarea name="" id="" className="border w-full h-20 resize-none bg-surface p-1" placeholder="Enter Message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                    </div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi laborum eos alias porro laboriosam. Itaque, ab veritatis.</p>

                    <button
                        type="submit"
                        className="py-2 w-35 border font-medium cursor-pointer rounded bg-surface hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                        disabled={loader3}
                    >
                        {loader3 ? (
                            <span className="flex justify-center items-center gap-2">
                                Submit in...
                                <RiLoader4Fill className="text-20 animate-spin" />
                            </span>
                        ) : (
                            <span>Submit</span>
                        )}
                    </button>
                </form>
            </div>

        </div>
    );
};
export default ContactUs;