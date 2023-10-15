import React, {useState} from "react";
import NavBar from "../NavBar/navBar";
import SideBar from "../../components/SideBar/sideBar";
import Content from "../Content/Content";

import PurpleFlare from "../../assets/purple_flare.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classes from "./Layout.module.css";

const Layout = () => {
    // show is boolean.
    const [show, changeShow] = useState(false);

    function drawerOpenHandler() {
        // ensure state immutability
        const newShowValue = true;
        changeShow(newShowValue);
    }


    function drawerCloseHandler() {
        // ensure state immutability
        const newShowValue = false;
        changeShow(newShowValue);
    }

    return (
        // This is a hoc(Higher Order Component)
        <>
            {/* Absolute property to be added to this flare */}
            <LazyLoadImage 
                src = {PurpleFlare}
                className = {classes.PurpleFlare}
            />
            <NavBar clicked = {drawerOpenHandler}/>
            <SideBar open = {show} cancelClicked = {drawerCloseHandler}/>
            <Content />
        </>
    )
}

export default Layout;