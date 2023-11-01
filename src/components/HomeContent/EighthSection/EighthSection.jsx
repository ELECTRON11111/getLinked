import React from "react";
import classes from "./EighthSection.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Wisper from "../../../assets/content/wisper.png";
import Winwise from "../../../assets/content/winwise.png";
import Liberty from "../../../assets/content/liberty.png";
import LibertyPay from "../../../assets/content/libertyPay.png";
import VuzualPlus from "../../../assets/content/vuzualPlus.png";
import Paybox from "../../../assets/content/Paybox.png";



const EighthSection = () => {
    return (
        <section className={classes.EighthSection}>
            <div className={classes.Headers}>
                <h2>Partners and Sponsors</h2>
                <p>Getlinked Hackathon 1.0 is honored to have the following major <br/> companies as its partners and sponsors</p>
            </div>

            <div className={classes.Grid_Container}>
                <div className={classes.Grid_element}>  
                    <LazyLoadImage 
                        src = {Liberty}
                        className = {classes.Liberty}
                    />
                </div>
                <div className={classes.Grid_element}>  
                    <LazyLoadImage 
                        src = {LibertyPay}
                        className = {classes.LibertyPay}
                    />
                </div>
                <div className={classes.Grid_element}>  
                    <LazyLoadImage 
                        src = {Winwise}
                        className = {classes.Winwise}
                    />
                </div>
                <div className={classes.Grid_element}>  
                    <LazyLoadImage 
                        src = {Wisper}
                        className = {classes.Wisper}
                    />
                </div>
                <div className={classes.Grid_element}>  
                    <LazyLoadImage 
                        src = {Paybox}
                        className = {classes.Paybox}
                    />
                </div>
                <div className={classes.Grid_element}>  
                    <LazyLoadImage 
                        src = {VuzualPlus}
                        className = {classes.VuzualPlus}
                    />
                </div>
            </div>
        </section>
    )
}

export default EighthSection;