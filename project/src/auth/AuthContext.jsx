import { createContext, useEffect, useState } from "react";
import { nURL } from "../URL";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const getAuthUserData = async () => {
        try {
            let result = await fetch(`${nURL}/auth/me`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            });

            let data = await result.json();

            console.log("auth...: ", data);

            if (data?.user?.authenticated) {
                setUser(data?.user?.full_name);
                setIsAuthenticated(true);
            }
            else {
                setUser(null);
                setIsAuthenticated(false);
            }

        } catch (err) {
            console.error("Something went wrong:", err.message);
            setUser(null);
            setIsAuthenticated(false);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAuthUserData();
    }, []);

    console.log('auth: ',isAuthenticated);

    return (
        <>
            <AuthContext.Provider value={{ user, isAuthenticated, loading, setUser, setIsAuthenticated, getAuthUserData }}>
                {children}
            </AuthContext.Provider>
        </>
    );
};
export { AuthContext, AuthProvider };
