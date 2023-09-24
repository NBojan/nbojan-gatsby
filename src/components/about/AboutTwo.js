import React from "react";
import styled from "styled-components";
import aboutImg from "../../assets/images/my-app.svg";

const AboutTwo = () => {
    return (  
        <Wrapper className="about-two">
            <article className="containerBoot mx-auto articleContainer w-full flex items-center justify-between">
                <div className="image-div leading-none">
                    <img src={aboutImg} alt="Fancy Person" className="w-full"/>
                </div>

                <div className="info-div">
                    <header className="mb-3">
                        <h3 className="capitalize font-semibold"><span>about</span> me</h3>
                        <div className="underline-nb"></div>
                    </header>
                    <p className="text-gray-600">
                        I am a new programmer fighting for a spot in the IT world by displaying my work, 
                        trying to seize any opportunity for expanding my skill-set by working on other bigger projects. 
                        My purpose is to translate my knowledge into practice and make it a career.
                    </p>
                </div>
            </article>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    padding: 80px 0;
    
    .image-div {
        flex-basis: 50%;
    }
    .info-div {
        flex-basis: 41%;
        font-family: "Quicksand";
        p {
            padding: 16px;
            line-height: 2;
            font-weight: 500;
            border-radius: 12px;
            background-color: var(--clr-primary-1);
        }
    }
    h3 {
        text-align: left;
        span {
            color: var(--clr-primary-5);
        }
    }
    .underline {
        margin: 0;
        background-color: var(--clr-primary-5);
    }

    @media (max-width: 991px){
        padding: 64px 0;
    }
    @media (max-width: 767px){
        padding: 48px 0;

        .articleContainer {
            flex-direction: column;
        }
        .image-div,
        .info-div {
            flex-basis: auto;
        }
        .image-div {
            margin-bottom: 32px;
        }
    }
    @media (max-width: 575px){
        .articleContainer {
            width: 90%;
        }
        h3 {
            font-size: 20px;
        }
        p {
            font-size: 15px;
        }
    }
    @media (max-width: 300px){
        h3 {
            font-size: 18px;
        }
        p {
            font-size: 14px;
        }
    }
`

export default AboutTwo;