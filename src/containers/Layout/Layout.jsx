import React, {useState} from "react";
import NavBar from "../NavBar/navBar";
import SideBar from "../../components/SideBar/sideBar";

const Layout = () => {
    // show is boolean.
    const [show, changeShow] = useState(false);

    function drawerOpenHandler() {
        console.log(show);
        // ensure state immutability
        const newShowValue = true;
        changeShow(newShowValue);
    }


    function drawerCloseHandler() {
        console.log(show);
        // ensure state immutability
        const newShowValue = false;
        changeShow(newShowValue);
    }

    return (
        // This is a hoc(Higher Order Component)
        <>
            <NavBar clicked = {drawerOpenHandler}/>
            <SideBar open = {show} cancelClicked = {drawerCloseHandler}/>
        </>
    )
}

export default Layout;