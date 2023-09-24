import React from "react";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (  
        <Wrapper>
            <p>© {new Date().getFullYear()} <span>NBojan</span></p>
            <div className="flex justify-center items-center wrap">
                <p className="mr-2">bojannoveski@hotmail.com</p>
                <a href="https://www.linkedin.com/in/bojan-noveski-018a14241" className="leading-none">
                    <BsLinkedin />
                </a>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    background-color: var(--clr-darkmode2);

    p {
        color: #fff;
        span {
            color: var(--clr-primary-5);
        }
    }

    a {
        font-size: 18px;
        color: var(--clr-primary-5);
    }
`
export default Footer;