import NavBar from "../NavBar/navBar";
import SideBar from "../../components/SideBar/sideBar";

const Layout = () => {
    return (
        // This is a hoc(Higher Order Component)
        <>
            <NavBar />
            <SideBar />
        </>
    )
}

export default Layout;