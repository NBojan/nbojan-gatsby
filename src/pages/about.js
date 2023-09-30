import React from "react";
import { AboutOne, AboutTwo, SEO } from "../components";

const About = () => {
    return (  
        <>
            <AboutOne />
            <AboutTwo />
        </>
    );
}
export const Head = () => (
    <SEO title="About" pathname="/about" />
)

export default About;