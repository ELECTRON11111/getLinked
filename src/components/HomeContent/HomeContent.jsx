import React from "react";
import classes from "./HomeContent.module.css";
import SectionOne from "./SectionOne/SectionOne"; 
import SecondAndThirdSections from "./SecondAndThirdSections/SecondAndThirdSections";
import FourthAndFifthSections from "./FourthAndFifthSections/FourthAndFifthSections";
import SeventhSection from "./SeventhSection/SeventhSection";
import EighthSection from "./EighthSection/EighthSection";

import theBigIdea from "../../assets/content/big_idea.png";
import womanSitting from "../../assets/content/woman_sitting.png";
import analysisImg from "../../assets/content/analysis.png";
import manOnCloudsImg from "../../assets/content/cwok_casual.png"
import purpleFlare2 from "../../assets/purple_flare.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function HomeContent() {
    return (
        <div className={classes.HomeContent}>
            <hr />
            <SectionOne />
            <hr className={classes.Rule2}/>   
            <SecondAndThirdSections 
                isThird = {false}
                imgSrc = {theBigIdea}
                whiteHeader = {"Introduction to getlinked"}
                purpleHeader = {"tech Hackathon 1.0"}
                text = {"Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world,that's what we're all about!"}
            />     
            <hr />
            <LazyLoadImage 
                src={purpleFlare2}
                className={classes.PurpleFlare2}
            />
            <SecondAndThirdSections 
                isThird = {true}
                imgSrc = {womanSitting}
                whiteHeader = {"Rules and"}
                purpleHeader = {"Guidelines"}
                text = {"Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world,that's what we're all about!"}
            /> 
            <hr />
            <FourthAndFifthSections 
                isFifth = {false}
                imgSrc = {analysisImg}
                whiteHeader = {"Judging Criteria"}
                purpleHeader = {"Key attributes"}
            />
            <hr />
            <FourthAndFifthSections 
                isFifth = {true}
                imgSrc = {manOnCloudsImg}
                whiteHeader = {"Frequently Asked"}
                purpleHeader = {"Question"}
            />
            <hr />
            <SeventhSection />
            <EighthSection />
        </div>
    )
}

export default HomeContent;