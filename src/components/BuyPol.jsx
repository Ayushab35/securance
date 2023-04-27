import React, { useEffect } from "react";
import Home from "./Home";
import { useNavigate } from "react-router";

function BuyPol(){
    const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem("formData");

        if (!user) {
            alert("Please log in to view this page.");
            navigate("/login");
        }
    }, []);

    return(
        <>
            <Home/>
            <div className="buypol">
                <div>

                </div>
            </div>
            <h1>Hello World !</h1>
        </>
    );
}   

export default BuyPol;