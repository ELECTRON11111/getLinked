import classes from "./NavItems.module.css";

const NavItems = () => {

    return (
        <div className={classes.right}>
            <div className={classes.text}>
                <span>Timeline</span>
                <span>Overview</span>
                <span>FAQs</span>
                <span>Contact</span>
            </div>    
            <button>Register</button>
        </div>
    )
}

export default NavItems;