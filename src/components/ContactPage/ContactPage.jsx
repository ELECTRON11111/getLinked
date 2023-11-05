import React from "react";
import classes from "./ContactPage.module.css";

import facebookIcon from "../../assets/content/facebook.svg";
import xIcon from "../../assets/content/x.svg";
import instagramIcon from "../../assets/content/instagram.svg";
import linkedinIcon from "../../assets/content/linkedin.svg";

import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactPage = () => {
    return (
        <div className={classes.ContactPage}>
            <div className={classes.LeftText}>
                <h2>Get in touch</h2>
                <p>Contact <br /> Information </p>
                <p>27, Alara Street <br />
                Yaba 11002 <br />
                Lagos State.
                </p>
                <p>Call us: 09056817978</p>
                <p>We are open from Monday - Friday <br /> 
                8:00am - 05:00pm</p>

                <div className={classes.Socials}>
                    <h4>Share on</h4>
                    <li className={classes.Icons}>
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
            </div>
            <form action="" method="post">
                <div className={classes.HeadersUnique}>
                    <h3>Question or need assistance?</h3>
                    <h3>Let us know about it!</h3>
                </div>

                <p>Email us any question related to the event.</p>

                <input type="text" placeholder="First Name"/>
                <input type="email" placeholder="Mail"/>
                <input type="text" placeholder="Message" className={classes.MessageBox}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactPage;