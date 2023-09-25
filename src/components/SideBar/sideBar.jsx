import react from "react";
import NavItems from "../NavItems/NavItems";
import VectorImg from "../../assets/x-btn/Vector.png";
import CircleImg from "../../assets/x-btn/circle.png";
import classes from "./sideBar.module.css";

const SideBar = (props) => {
    let attatchedClasses = [classes.sideBar, classes.close];
    if (props.open) {
        attatchedClasses = [classes.sideBar, classes.open];
    }

    return (
        <div className={attatchedClasses.join(" ")}>
            <div className={classes.xBtn} onClick={() => props.cancelClicked()}>
                <img src={CircleImg} alt="circle" className={classes.circle}/>
                <img src={VectorImg} alt="vector" className={classes.vector}/>
            </div>

            <NavItems />
        </div>
    )
}

export default SideBar;