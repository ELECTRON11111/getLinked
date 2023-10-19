import React from "react";
import classes from "./FourthAndFifthSections.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";


export default function FourthAndFifthSections(props) {
    const attachedClasses = [classes.FourthAndFifthSections];
    const fourthUniqueContent = (
        <div className = {classes.FourthUniqueContent}>
            <p><span>Innovation and Creativity</span>:
            Evaluate the uniqueness and creativity of the
            solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
            </p>

            <p><span>Functionality</span>:
            Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
            </p>

            <p><span>Impact and Relevance</span>:
            Determine the potential impact of the solution 
            in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
            </p>

            <p><span>Technical Complexity</span>:
            Evaluate the technical sophistication of the solution. 
            Judges would consider the complexity of the code, the use of advanced 
            technologies or algorithms, and the scalability of the solution.
            </p>
            
            <p><span>Adherence to Hackathon Rules</span>:
            Judges will Ensure that the team adhered 
            to the rules and guidelines of the hackathon, including deadlines, use of 
            specific technologies or APIs, and any other competition-specific requirements.
            </p>

            <button>Read More</button>
        </div>
    );

    const fifthUniqueContent = (
        <div className = {classes.FifthUniqueContent}>
            <p>
                We got answers to the questions that you mightwant to ask about <b>getlinked Hackathon 1.0</b>
            </p>

            <ul>
                <li>
                    Can I work on a project I started before the hackathon?
                    <span>+</span>
                </li>

                <li>
                    What happens if I need help during the hackathon?
                    <span>+</span>
                </li>

                <li>
                    What happens if I don't have an idea for a project?
                    <span>+</span>
                </li>

                <li>
                    Can I join a team or do I have to come with one?
                    <span>+</span>
                </li>

                <li>
                    What happens after the hackathon ends?
                    <span>+</span>
                </li>

                <li>
                    Can I work on a project I started before the hackathon?
                    <span>+</span>
                </li>
            </ul>
        </div>
    );
    
    
    /* props.isFifth is boolean and flexReverse represents the class for the fourth section */
    if (props.isFifth) {
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

                {props.isFifth? fifthUniqueContent:fourthUniqueContent}
            </div>
        </section>
    )
}