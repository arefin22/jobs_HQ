/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user , loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname);
    if(loading){
        return <div className="flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div> 
    }

    if(user){
        return(children)
    }

    return (
        <div>
            <Navigate state={location.pathname} to={'/login'}></Navigate>
        </div>
    );
};

export default PrivateRoute;