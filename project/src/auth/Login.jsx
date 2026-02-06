import { RiLoader4Fill } from "react-icons/ri";
import {
    // useContext,
    // useEffect,
    useState
} from "react";
// import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';
import { nURL } from "../URL";

// import { AuthContext } from "./AuthContext";

const Login = () => {

    const [inputValue, setInputValue] = useState({
        username: "",
        password: ""
    });

    const [showPass, setShowPass] = useState(true);
    const [error, setError] = useState(false);

    const [loader2, setLoader2] = useState(false);

    const navigate = useNavigate();

    // const { isAuthenticated, setIsAuthenticated, getAuthUserData } = useContext(AuthContext);

    // console.log("is", isAuthenticated);

    // if (isAuthenticated) {
    //     return <Navigate to={"/add"} />
    // }

    // const { isAuthenticated, loading, getAuthUserData } = useContext(AuthContext);

    // if (loading) {
    //     return null; // ya loader
    // }

    // console.log("is......auth.........", isAuthenticated);

    // if (isAuthenticated) {
    //     return <Navigate to="/add" replace />;
    // }

    // // for test only
    // useEffect(() => {
    //     console.log("LOGIN PAGE auth:", isAuthenticated);
    // }, [isAuthenticated]);


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
            setLoader2(true);
            const result = await fetch(`${nURL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(inputValue)
            });

            const data = await result.json();
            console.log("login: ", data);

            if (data.message) {
                // await getAuthUserData();
                // setIsAuthenticated(true);
                // navigate("/");
                alert(data.message);
            }
            else {
                alert(data.detail);
            }

        } catch (err) {
            setError(false);
            console.error("Something went wrong:", err.message);
        } finally {
            setLoader2(false);
        }
    };

    return (
        <div className="h-[90vh] flex justify-center items-center">
            <div className="border w-80 sm:w-90 m-auto px-2 py-2 pb-4 rounded">
                <h1 className="text-24 font-medium text-center py-4">Login here</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="">
                        <label htmlFor="" className="font-medium">Username Id:</label><br />
                        <input type="email" name="username" value={inputValue.username} onChange={handleChange} className="border w-full h-9 rounded px-1" />
                        {error && !inputValue.username && <p className="text-red-500">Please Enter Username Id</p>}
                    </div>
                    <div className="relative">
                        <label htmlFor="" className="font-medium">Password:</label><br />
                        <input type={showPass ? "password" : "text"} name="password" value={inputValue.password} onChange={handleChange} className="border w-full h-9 rounded px-1" />
                        <button type="button" onClick={() => setShowPass(!showPass)} className="cursor-pointer absolute right-3 top-8 text-xl">{showPass ? <span><FaRegEye /></span> : <span><FaRegEyeSlash /></span>}</button>
                        {error && !inputValue.password && <p className="text-red-500">Please Enter Password</p>}
                    </div>
                    {/* <div className="border border-red-500">
                        <button type="submit" className="py-1 w-full font-medium cursor-pointer rounded hover:bg-gray-100">{loader2?<span>Login </span>:<span className=" flex justify-center items-center gap-2">Login in <RiLoader4Fill className="text-20" /> </span>}</button>
                    </div> */}
                    <div className="border">
                        <button
                            type="submit"
                            className="py-1 w-full font-medium cursor-pointer rounded hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={loader2}
                        >
                            {loader2 ? (
                                <span className="flex justify-center items-center gap-2">
                                    Logging in
                                    <RiLoader4Fill className="text-20 animate-spin" />
                                </span>
                            ) : (
                                <span>Login</span>
                            )}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};
export default Login;