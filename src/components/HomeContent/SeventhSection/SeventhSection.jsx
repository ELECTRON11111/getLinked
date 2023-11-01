import React from "react";
import classes from "./SeventhSection.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import CupImg from "../../../assets/content/cup_target.png";
import GoldMedal from  "../../../assets/content/gold_medal.png";
import SilverMedal from  "../../../assets/content/silver_medal.png";
import BronzeMedal from  "../../../assets/content/bronze_medal.png";

const SeventhSection = () => {
    return (
        <section>
            <div className={classes.Top}>
                <div className={classes.Headers}>
                    <span className={classes.WhiteHeader}>Prizes and</span>
                    <span className={classes.PurpleHeader}>Rewards</span>
                </div>
                <p>Highlight of the prizes or rewards for winners and for participants.</p>
            </div>


            <div className={classes.CupAndPrizes}>
                <LazyLoadImage 
                    src={CupImg}
                    className={classes.Cup}
                />

                <div className={classes.Prizes}>
                    <div className={classes.First}>
                        <LazyLoadImage 
                            src={GoldMedal}
                            className={classes.GoldMedal}
                        />      
                        <div>
                            <p className={classes.Position}>
                                1st
                            </p>
                            <p>Runner</p>
                        </div>
                        <h3 className={classes.Amount}>N400,000</h3>
                    </div>
                    <div className={classes.Second}>
                        <LazyLoadImage 
                            src={SilverMedal}
                            className={classes.SilverMedal}
                        />      
                        <div>
                            <p className={classes.Position}>
                                2nd
                            </p>
                            <p>Runner</p>    
                        </div>    
                        <h3 className={classes.Amount}>N300,000</h3>
                    </div>
                    <div className={classes.Third}>
                        <LazyLoadImage 
                            src={BronzeMedal}
                            className={classes.BronzeMedal}
                        />      
                        <div>
                            <p className={classes.Position}>
                                3rd
                            </p>
                            <p>Runner</p>
                        </div>
                        <h3 className={classes.Amount}>N150,000</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeventhSection;