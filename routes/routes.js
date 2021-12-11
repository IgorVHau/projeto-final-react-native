import React, { useContext } from "react";
import AppRoutes from "./app.routes";
import { AuthContext } from "../src/context/authContext";

const Routes = () => {
    const {user, setUser} = useContext(AuthContext);
    return (
        <>
            <AppRoutes />
        </>
    )
}

export default Routes