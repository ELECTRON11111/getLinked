import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classes from "./RegisterPage.module.css";

import ManWithKeyImage from "../../../src/assets/content/ManWithThumbsUp.png";
import LadyEmoji from "../../../src/assets/content/WomanWalking.png";
import ManEmoji from "../../../src/assets/content/ManWalking.png";

const RegisterPage = () => {
    return (
        <div className = {classes.RegisterPage}>
            <LazyLoadImage 
                src = {ManWithKeyImage}
                className = {classes.ManWithKeyImage}
            />
            <form>
                <h2>Register</h2>
                {/* img for mobile view */}
                <LazyLoadImage 
                    src = {ManWithKeyImage}
                    className = {classes.ManWithKeyImageMobile}
                />
                <p  className = {classes.POne}>Be part of this movement
                    <div className = {classes.Emojis}>
                        <LazyLoadImage 
                            src = {LadyEmoji}
                            className = {classes.LadyEmoji}
                        />          
                        <LazyLoadImage 
                            src = {ManEmoji}
                            className = {classes.ManEmoji}
                        />          
                    </div>
                </p>

                <span>CREATE YOUR ACCOUNT</span>
                <div className={classes.TeamAndPhone}>
                    <div className={classes.Team}>
                        <label>Team's Name</label>
                        <input type="text" placeholder="Enter the name of your group"/>
                    </div>
                    <div className={classes.Phone}>
                        <label>Phone</label>
                        <input type="number" placeholder="Enter your phone number" min={0} maxLength={12}/>
                    </div>
                </div>
                <div className={classes.EmailAndTopic}>
                    <div className={classes.Email}>
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email address"/>
                    </div>
                    <div className={classes.Topic}>
                        <label>Project Topic</label>
                        <input type="text" placeholder="What is your group project topic"/>
                    </div>
                </div>
                <div className={classes.CategoryAndSize}>
                    <div className={classes.Category}>
                        <label>Category</label>
                        <select placeholder="Select your category" className="Select1">
                            <option value="1">Select your category</option>
                        </select>
                    </div>
                    <div className={classes.Size}>
                        <label>Group Size</label>
                        <select placeholder="Select" className="Select2">
                            <option value="2">Select</option>
                        </select>
                    </div>
                </div>
                <h4 classsName={classes.PSmall}>Please review your registration details before submitting.</h4>    
                <div className={classes.PrivacyPolicy}>
                    <input type="checkbox" />
                    <span>I agreed with the event terms, conditions and privacy policy.</span>
                </div>
                <button>Register Now</button>
            </form>
        </div>
    )
}

export default RegisterPage;