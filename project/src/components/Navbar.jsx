import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from 'react';
import logo from '../assets/Logo-Integers.svg';
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoSmall from '../assets/logo-small.svg';
import { base_url } from "../URL";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const [openPopup, setOpenPopup] = useState(false);

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.stopPropagation();
        setOpenPopup(!openPopup);
    };

    useEffect(() => {
        const closeMenu = () => setOpenPopup(false);
        window.addEventListener("click", closeMenu);
        return () => window.removeEventListener("click", closeMenu);
    }, []);

    const handleLogout = async () => {
        try {
            const result = await fetch(`${base_url}/logout`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            });

            if (!result.ok) {
                throw new Error(`HTTP error! status: ${result.status}`);
            }

            const data = await result.json();

            console.log("logout msg: ", data);

            if (data.success) {
                // setOpenPopup(false)
                // setIsAuthenticated(false);
                // setUser(null);
                localStorage.removeItem("n@xIIktKQXeorj.W*XF5tFrKl");
                navigate("/login");
                alert(data.message);
            }
            else {
                // setOpenPopup(false)
                alert("Logout Failed");
            }

        } catch (err) {
            console.error("Something went wrong:", err.message);
        }
    }




    let isAuth = localStorage.getItem("n@xIIktKQXeorj.W*XF5tFrKl");
    console.log("isAuth?????", isAuth);

    let userName = isAuth ? JSON.parse(isAuth) : "";

    let uname = userName ? (userName.full_name).slice(0, 1) : "";

    return (
        <>
            <div className="bg-surface h-21 flex justify-around items-center sticky top-0 left-0 z-50">
                <div className="w-55 h-11 hidden sm:block"><img src={logo} alt="logo" className='h-full w-full' /></div>
                <div className="w-11 h-11 sm:hidden"><img src={logoSmall} alt="logo" className='h-full w-full' /></div>

                <div className="lg:hidden">
                    <div className="h-9 border-brand-primary w-45 sm:w-59 flex py-1 sm:py-2 px-2 sm:px-4 items-center">
                        <input type="search" className='h-full text-16 outline-0 w-full' placeholder='Search report...' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.4197 16.4197C16.7126 16.1268 17.1874 16.1268 17.4803 16.4197L21.5301 20.4695C21.823 20.7624 21.823 21.2372 21.5301 21.5301C21.2372 21.823 20.7624 21.823 20.4695 21.5301L16.4197 17.4803C16.1268 17.1874 16.1268 16.7126 16.4197 16.4197Z" fill="#3CD690" />
                            <path d="M18.4502 11.0996C18.45 7.0405 15.1588 3.75 11.0996 3.75C7.04063 3.75021 3.75021 7.04063 3.75 11.0996C3.75 15.1588 7.0405 18.45 11.0996 18.4502C15.1589 18.4502 18.4502 15.1589 18.4502 11.0996ZM19.9502 11.0996C19.9502 15.9873 15.9873 19.9502 11.0996 19.9502C6.21207 19.95 2.25 15.9872 2.25 11.0996C2.25021 6.2122 6.2122 2.25021 11.0996 2.25C15.9872 2.25 19.95 6.21207 19.9502 11.0996Z" fill="#3CD690" />
                        </svg>
                    </div>
                </div>

                <button className='lg:hidden text-2xl' onClick={() => setMenu(!menu)}>{menu ? <span><RxCross2 /></span> : <span><RxHamburgerMenu /></span>}</button>

                <ul className={`transition-all duration-500 fixed top-21 lg:top-0 lg:static w-full lg:w-auto h-full lg:h-auto text-center bg-surface ${menu ? "right-0" : "-right-[100%]"}`}>
                    <li className="block lg:inline-block py-5 lg:py-0"><NavLink to={'/'} onClick={() => setMenu(false)}>Home</NavLink></li>
                    {/* <li className="block lg:inline-block lg:pl-9 py-5 lg:py-0">Industries</li> */}
                    <li className="block lg:inline-block lg:pl-9 py-5 lg:py-0"><NavLink to={'/report'} onClick={() => setMenu(false)}>Reports</NavLink></li>
                    {/* <li className="block lg:inline-block lg:pl-9 py-5 lg:py-0">Use Cases</li> */}
                    {/* <li className="block lg:inline-block lg:pl-9 py-5 lg:py-0"><NavLink to={"/pricing"}>Pricing</NavLink></li> */}

                    <li className="block lg:inline-block lg:pl-9 py-5 lg:py-0"><NavLink to={"/contact"} onClick={() => setMenu(false)}>Contact Us</NavLink></li>

                    {isAuth &&
                        <div className="lg:hidden">
                            <div className="relative inline-block">
                                {/* Header Button */}
                                <button
                                    onClick={handleClick}
                                    className="border bg-brand rounded-full h-9 w-9 text-20 font-medium transition-all cursor-pointer hover:bg-[var(--color-brand-primary-hover)] capitalize"
                                >
                                    {uname}
                                </button>

                                {/* Popup */}
                                {openPopup && (
                                    <div className="absolute right-0 top-full z-10 mt-2 rounded shadow-lg">
                                        <button
                                            onClick={handleLogout}
                                            className="bg-brand w-full rounded py-2 px-3 text-15 text-primary font-medium cursor-pointer hover:bg-[var(--color-brand-primary-hover)]"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    }
                </ul>

                <div className="hidden lg:block">
                    <div className="h-9 border-brand-primary w-59 flex py-2 px-4 items-center">
                        <input type="search" className='h-full text-16 outline-0 w-full' placeholder='Search report...' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.4197 16.4197C16.7126 16.1268 17.1874 16.1268 17.4803 16.4197L21.5301 20.4695C21.823 20.7624 21.823 21.2372 21.5301 21.5301C21.2372 21.823 20.7624 21.823 20.4695 21.5301L16.4197 17.4803C16.1268 17.1874 16.1268 16.7126 16.4197 16.4197Z" fill="#3CD690" />
                            <path d="M18.4502 11.0996C18.45 7.0405 15.1588 3.75 11.0996 3.75C7.04063 3.75021 3.75021 7.04063 3.75 11.0996C3.75 15.1588 7.0405 18.45 11.0996 18.4502C15.1589 18.4502 18.4502 15.1589 18.4502 11.0996ZM19.9502 11.0996C19.9502 15.9873 15.9873 19.9502 11.0996 19.9502C6.21207 19.95 2.25 15.9872 2.25 11.0996C2.25021 6.2122 6.2122 2.25021 11.0996 2.25C15.9872 2.25 19.95 6.21207 19.9502 11.0996Z" fill="#3CD690" />
                        </svg>
                    </div>
                </div>

                {isAuth &&
                    <div className="hidden lg:block">
                        <div className="relative inline-block">
                            {/* Header Button */}
                            <button
                                onClick={handleClick}
                                className="border bg-brand rounded-full h-9 w-9 text-20 font-medium transition-all cursor-pointer hover:bg-[var(--color-brand-primary-hover)] capitalize"
                            >
                                {uname}
                            </button>

                            {/* Popup */}
                            {openPopup && (
                                <div className="absolute right-0 top-full z-10 mt-2 rounded shadow-lg">
                                    <button
                                        onClick={handleLogout}
                                        className="bg-brand w-full rounded py-2 px-3 text-15 text-primary font-medium cursor-pointer hover:bg-[var(--color-brand-primary-hover)]"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                }
            </div>
        </>
    );
};
export default Navbar;