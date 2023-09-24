import React from "react";
import styled from "styled-components";
import heroImg from "../../assets/images/programming.svg";

const Hero = () => {
    return (  
        <Wrapper className="hero bg-filler">
            <article className="containerBoot mx-auto articleContainer w-full flex items-center justify-between">
                <div className="info-div">
                    <h2 className="capitalize font-semibold">Project page <span>NBojan</span></h2>
                    <p className="text-gray-600">
                        Welcome! NB Projects is a web page that displays different projects made for the purpose of presenting my work.
                        Links available to visit or check out the source code on Github.
                    </p>
                </div>

                <div className="image-div leading-none">
                    <img src={heroImg} alt="Fancy Person" className="w-full"/>
                </div>
            </article>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    min-height: 100vh;
    padding: 7rem 0 2rem;
    background: linear-gradient(90deg, var(--clr-primary-1) 60%, rgba(255,255,255,1) 60%);

    .image-div {
        flex-basis: 50%;
    }
    .info-div {
        flex-basis: 41%;
        font-family: "Quicksand";
        p {
            line-height: 2;
            font-weight: 500;
        }
    }
    h2 {
        span {
            color: var(--clr-primary-5);
        }
    }

    @media(max-width: 991px){
        padding: 2rem 0;
        background: var(--clr-primary-1);
    }
    @media (max-width: 767px){
        .image-div {
            display: none;
        }
        .info-div {
            flex-basis: 100%;
        }
    }
    @media (max-width: 575px){
        .articleContainer {
            width: 90%;
        }
        h2 {
            font-size: 24px;
        }
        p {
            font-size: 15px;
        }
    }
    @media (max-width: 300px){
        h2 {
            font-size: 18px;
        }
        p {
            font-size: 14px;
        }
    }
`
export default Hero;