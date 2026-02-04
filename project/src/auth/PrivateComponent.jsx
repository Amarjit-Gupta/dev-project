import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {

    const { isAuthenticated, loading } = useContext(AuthContext);

    console.log("private: ", isAuthenticated, loading);

    if (loading) {
        return (
            <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p>Checking auth...</p>
            </div>
        );
    }

    return (isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />);
};
export default PrivateComponent;