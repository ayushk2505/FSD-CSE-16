import React from 'react'
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return (
        <div style={
            {
                textAlign: "center",
                backgroundColor: "black",
                color: "white"
            }}>
            <nav>
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/product")}>Product</button>
                <button onClick={() => navigate("/contact")}>Contact</button>
                <button onClick={() => navigate("/cart")}>Cart</button>
            </nav>
        </div>
    )
}

export default Header