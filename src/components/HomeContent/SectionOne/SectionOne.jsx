import React from "react";
import classes from "./SectionOne.module.css";

import PurpleFlare from "../../../assets/purple_flare.png";
import Star from "../../../assets/content/star.svg";
import GreyStar from "../../../assets/content/star_2.svg";
import Bulb from "../../../assets/content/Creative 1.svg";
import Chain from "../../../assets/content/chain.svg";
import ManInSmartGlasses from "../../../assets/content/man_smartglasses.png";
import Circle from "../../../assets/content/Image_1.png";

import { LazyLoadImage } from "react-lazy-load-image-component";


function SectionOne() {
    return (
        <div className = {classes.SectionOne}>
            <h2>Igniting a Revolution in HR Innovation</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="255" height="17" viewBox="0 0 255 17" fill="none">
                <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5"/>
            </svg>
            
            <LazyLoadImage 
                src = {Star}
                className = {classes.Star}
            />

            <div>
                <div className = {classes.Left}>
                    <h1>
                        <LazyLoadImage 
                            src = {Bulb}
                            className = {classes.Bulb}
                        />
                        <br/>
                        getlinked Tech <br /> Hackathon <span>1.0</span>
                    
                        <LazyLoadImage 
                            src = {Chain}
                            className = {classes.Chain}
                        />

                        <br />

                        <p>Participate in getlinked tech Hackathon 2023 stand <br />a chance to win a Big prize</p>
                    </h1>

                    <LazyLoadImage 
                        src = {GreyStar}
                        className = {classes.GreyStar}
                    />

                    <LazyLoadImage 
                        src = {GreyStar}
                        className = {classes.GreyStar2}
                    />

                    <button>Register</button>

                    <h3>00<span>H</span>  00<span>M</span>  00<span>S</span></h3>
                </div>

                <div className = {classes.CombinedImage}>
                    <LazyLoadImage 
                        src = {ManInSmartGlasses}
                        className = {classes.ManInSmartGlasses}
                    />
                    <LazyLoadImage 
                        src = {Circle}
                        className = {classes.Circle}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default SectionOne;