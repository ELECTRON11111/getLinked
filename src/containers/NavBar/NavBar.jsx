import React from "react";
import NavItems from "../../components/NavItems/NavItems";
import burgerVector from "../../assets/Vector.svg";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="left">
                <span className="get">get<span className="linked">linked</span></span>
            </div>
            <NavItems />
            <img src={burgerVector} alt="img" />
        </div>
    );
}

export default NavBar;