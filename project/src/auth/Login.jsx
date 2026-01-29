import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { nURL } from "../URL";

const Login = () => {

    const [inputValue, setInputValue] = useState({
        username: "",
        password: ""
    });

    const [showPass, setShowPass] = useState(true);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleChange = (event) => {
        setInputValue({ ...inputValue, [event.target.name]: event.target.value });
    }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     if (!inputValue.username || !inputValue.password) {
    //         setError(true);
    //         return;
    //     }
    //     try {

    //         let result = await fetch(loginURL, {
    //             method: "post",
    //             body: JSON.stringify(inputValue),
    //             credentials:"include",
    //             headers: { "Content-Type": "application/json" }
    //         });
    //         let data = await result.json();
    //         console.log(data);
    //     }


    //     catch(err){
    //         console.log("Something went wrong...");
    //     }
    // }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!inputValue.username.trim() || !inputValue.password.trim()) {
            setError(true);
            return;
        }

        try {
            const result = await fetch(`${nURL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(inputValue)
            });

            const data = await result.json();

            if (data.message) {
                alert(data.message);
                navigate("/add");

            }
            else {
                alert(data.detail);
            }

        } catch (err) {
            setError(false);
            console.error("Something went wrong:", err.message);
        }
    };


    return (
        <div className="h-[90vh] flex justify-center items-center">
            <div className="border w-80 sm:w-90 m-auto px-2 py-2 pb-4 rounded">
                <h1 className="text-24 font-medium text-center py-4">Login here</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="">
                        <label htmlFor="" className="font-medium">username Id:</label><br />
                        <input type="email" name="username" value={inputValue.username} onChange={handleChange} className="border w-full h-9 rounded px-0.5" />
                        {error && !inputValue.username && <p className="text-red-500">Please Enter username Id</p>}
                    </div>
                    <div className="relative">
                        <label htmlFor="" className="font-medium">Password:</label><br />
                        <input type={showPass ? "password" : "text"} name="password" value={inputValue.password} onChange={handleChange} className="border w-full h-9 rounded px-0.5" />
                        <button type="button" onClick={() => setShowPass(!showPass)} className="cursor-pointer absolute right-3 top-8 text-xl">{showPass ? <span><FaRegEye /></span> : <span><FaRegEyeSlash /></span>}</button>
                        {error && !inputValue.password && <p className="text-red-500">Please Enter Password</p>}
                    </div>
                    <div className="border">
                        <button type="submit" className="py-1 w-full font-medium cursor-pointer rounded">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;