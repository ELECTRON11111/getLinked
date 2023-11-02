import React from "react";
import classes from "./NinthSection.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ListItemImg from "../../../assets/content/list-item.svg";
import ManWithkeyImg from "../../../assets/content/man-with-key.png";
import PadlockImg from "../../../assets/content/padlock.svg";

const NinthSection = () => {
    return (
        <div className={classes.NinthSection}>
            <div className={classes.Left}>
                <div className={classes.Headers}>
                    <h2>Privacy Policy and</h2>
                    <h2 className={classes.PurpleText}>Terms</h2>
                </div>

                <div className={classes.Ps}>
                    <p>Last updated on September 12, 2023</p>
                    <p>Below are our privacy & policy, which outline a lot of goodies. 
                    it’s our aim to always take of our participant</p>
                </div>

                <div className={classes.PolicySection}>
                    <p>At getlinked tech Hackathon 1.0, we value your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, 
                    and safeguard your data when you participate in our tech 
                    hackathon event. By participating in our event, you consent 
                    to the practices described in this policy.</p>

                    <span>Licensing Policy</span>
                    <h3>Here are terms of our Standard License:</h3>

                    <div className={classes.Checklist}>
                        <div className={classes.ChecklistItem}>
                            <LazyLoadImage 
                                src = {ListItemImg}
                                className = {classes.ListItemImg}
                            />
                            <p>The Standard License grants you a non-exclusive right to
                            navigate and register for our event</p>
                        </div>
                        <div className={classes.ChecklistItem}>
                            <LazyLoadImage 
                                src = {ListItemImg}
                                className = {classes.ListItemImg}
                            />
                            <p>You are licensed to use the item available at any free source
                            sites, for your project developement</p>
                        </div>
                    </div>

                    <button type="submit">Read More</button>
                </div>
            </div>  
            <div className={classes.Right}>
                <LazyLoadImage 
                    src = {PadlockImg}
                    className = {classes.PadlockImg}
                />
                <LazyLoadImage 
                    src = {ManWithkeyImg}
                    className = {classes.ManWithkeyImg}
                />
            </div>
        </div>
    )
}

export default NinthSection;