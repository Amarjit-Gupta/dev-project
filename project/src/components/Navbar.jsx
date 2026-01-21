import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import logo from '../assets/Logo-Integers.svg';
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <>
            <div className=" h-21 w-full bg-surface flex justify-around items-center sticky top-0 left-0 z-50">
                <div className=" w-55 h-11"><img src={logo} alt="logo" className='h-full w-full' /></div>
                <button className='lg:hidden text-2xl' onClick={() => setMenu(!menu)}>{menu ? <span><RxCross2 /></span> : <span><RxHamburgerMenu /></span>}</button>
                <ul className={`transition-all duration-500 fixed top-21 lg:sticky lg:top-0 lg:w-auto w-full h-full lg:h-auto text-center bg-surface ${menu ? "right-0" : "-right-[100%]"}`}>
                    <li className='lg:inline-block py-5 lg:py-0'>Home</li>
                    <li className='lg:inline-block lg:pl-9 py-5 lg:py-0'>Industries</li>
                    <li className='lg:inline-block lg:pl-9 py-5 lg:py-0'>Reports</li>
                    <li className='lg:inline-block lg:pl-9 py-5 lg:py-0'>Use Cases</li>
                    <li className='lg:inline-block lg:pl-9 py-5 lg:py-0'>Pricing</li>

                    <div className="lg:hidden">
                        <div className="m-auto h-9 border-brand-primary w-59 flex py-2 px-4 items-center">
                            <input type="search" className='h-full text-16 outline-0 w-full' placeholder='Search report...' />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16.4197 16.4197C16.7126 16.1268 17.1874 16.1268 17.4803 16.4197L21.5301 20.4695C21.823 20.7624 21.823 21.2372 21.5301 21.5301C21.2372 21.823 20.7624 21.823 20.4695 21.5301L16.4197 17.4803C16.1268 17.1874 16.1268 16.7126 16.4197 16.4197Z" fill="#3CD690" />
                                <path d="M18.4502 11.0996C18.45 7.0405 15.1588 3.75 11.0996 3.75C7.04063 3.75021 3.75021 7.04063 3.75 11.0996C3.75 15.1588 7.0405 18.45 11.0996 18.4502C15.1589 18.4502 18.4502 15.1589 18.4502 11.0996ZM19.9502 11.0996C19.9502 15.9873 15.9873 19.9502 11.0996 19.9502C6.21207 19.95 2.25 15.9872 2.25 11.0996C2.25021 6.2122 6.2122 2.25021 11.0996 2.25C15.9872 2.25 19.95 6.21207 19.9502 11.0996Z" fill="#3CD690" />
                            </svg>
                        </div>
                    </div>
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
            </div>
        </>
    );
};
export default Navbar;