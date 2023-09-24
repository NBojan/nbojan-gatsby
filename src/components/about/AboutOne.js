import React from "react";
import styled from "styled-components";
import vector from "../../assets/images/vector.svg";
import aboutImg from "../../assets/images/hello.svg";

const AboutOne = () => {
    return (  
        <Wrapper className="about-one page bg-filler ">
            <article className="containerBoot mx-auto w-full flex items-center justify-between z-10 articleContainer">
                <div className="info-div">
                    <h3 className="capitalize font-semibold">hey, <span>nice to meet you!</span></h3>
                    <p className="text-gray-600">
                        My name is Bojan and this page represents my creative space, where just with a few clicks you can view some of my projects.
                        On that note feel free to explore the page and review my work.
                    </p>
                </div>

                <div className="image-div leading-none">
                    <img src={aboutImg} alt="Fancy Person" className="w-full"/>
                </div>
            </article>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    position: relative;
    padding: 7rem 0 2rem;
    background-color: var(--clr-mainBack);
    
    ::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30%;
        background: url(${vector});
        background-repeat: no-repeat;
        background-size: cover;
    }

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
    h3 {
        span {
            color: var(--clr-primary-5);
        }
    }

    @media(max-width: 991px){
        padding: 2rem 0;
        ::after {
            height: 25%;
        }
    }
    @media (max-width: 767px){
        ::after {
            height: 20%;
        }
        .image-div {
            display: none;
        }
        .info-div {
            flex-basis: 100%;
        }
    }
    @media (max-width: 575px){
        ::after {
            height: 15%;
        }
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

export default AboutOne;