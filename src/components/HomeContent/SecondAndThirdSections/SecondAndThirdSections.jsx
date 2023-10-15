import React from "react";
import classes from "./SecondAndThirdSections.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";


function SecondAndThirdSections(props) {
    const attachedClasses = [classes.SecondAndThirdSections];

    /* props.isThird is boolean and flexReverse represents the class for the third section */

    if (props.isThird) {
        // add flex reverse property through utility class
        attachedClasses.push(classes.FlexReverse);
    }

    return (
        <section className={attachedClasses.join(" ")}>
            <LazyLoadImage 
                src = {props.imgSrc}
                className = {classes.Sectionimg}
            />
            
            <div className={classes.SectionText}>
                <div className={classes.Headers}>
                    <span className={classes.WhiteHeader}>{props.whiteHeader}</span>
                    <br />
                    <span className={classes.PurpleHeader}>{props.purpleHeader}</span>
                </div>

                <p>{props.text}</p>
            </div>
        </section>
    )
}

export default SecondAndThirdSections;