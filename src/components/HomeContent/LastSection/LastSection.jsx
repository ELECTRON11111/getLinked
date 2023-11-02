import React from "react";
import classes from "./LastSection.module.css";
import facebookIcon from "../../../assets/content/facebook.svg";
import xIcon from "../../../assets/content/x.svg";
import instagramIcon from "../../../assets/content/instagram.svg";
import linkedinIcon from "../../../assets/content/linkedin.svg";
import telephoneIcon from "../../../assets/content/tel.svg";
import locationIcon from "../../../assets/content/location.svg";

import { LazyLoadImage } from "react-lazy-load-image-component";

function LastSection() {
    return (
        <footer className={classes.LastSection}>
            {/* footer of 8rem padding */}
            <div className={classes.Top}>
                <div className={classes.About}>
                    <h2>get<span>linked</span></h2>
                    <p>Getlinked Tech Hackathon is a technology innovation program 
                    established by a group of organizations with the aim of showcasing 
                    young and talented individuals in the field of technology.</p>
                    <h4>Terms of Use <span>|</span> Privacy Policy</h4>
                </div>
                <div className={classes.Links}>
                    <h3>Useful Links</h3>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Timeline</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Register</a></li>
                    <li className={classes.Icons}>
                        <p>Follow Us:</p> 
                        <LazyLoadImage  
                            src={instagramIcon}
                            className={classes.InstagramIcon}
                        />
                        <LazyLoadImage
                            src={xIcon}
                            className={classes.XIcon}
                        />
                        <LazyLoadImage
                            src={facebookIcon}
                            className={classes.FacebookIcon}
                        />
                        <LazyLoadImage
                            src={linkedinIcon}
                            className={classes.linkedinIcon}
                        />
                    </li>
                </div>
                <div className={classes.Contact}>
                    <h3>Contact Us</h3>
                    <div className={classes.Tel}>
                        <LazyLoadImage 
                            src={telephoneIcon}
                            className={classes.TelephoneIcon}
                        />
                        <span>+234 6707653444</span>
                    </div>
                    <div className={classes.Address}>
                        <LazyLoadImage 
                            src={locationIcon}
                            className={classes.LocationIcon}
                        />
                        <span>27,Alara Street <br />
                            Yaba 100012 <br />
                            Lagos State.
                        </span>
                    </div>
                </div>
            </div>
            <div className={classes.Bottom}>
                <span>All rights reserved. © getlinked Ltd.</span>
            </div>
        </footer>
    )
}

export default LastSection;