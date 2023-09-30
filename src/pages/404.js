import React from "react";
import styled from "styled-components";
import errorImg from "../assets/images/stars.svg";
import { Link } from "gatsby";
import { SEO } from "../components";

const ErrorPage = () => {
    return (  
        <Wrapper>
            <div className="w-[90%] max-w-[600px]">
                <img src={errorImg} alt="404 Error" className="w-full"/>
                <div className="text-center mt-6">
                    <h4>That page got lost in space.</h4>
                    <p className="mb-3 tracking-wide text-gray-600">Having hard time finding it.</p>
                    <Link to="/" className="btn btn-m btn-prim capitalize">back to homepage</Link>
                </div>
            </div>
        </Wrapper>
    );
}
export const Head = () => (
    <SEO title="Error" />
)
const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    min-height: 100vh;
    
    @media (max-width: 575px){
        h4 {
            font-size: 18px;
        }
        a {
            padding: 4px 8px;
	        font-size: 14px;
	        letter-spacing: 1px;
        }
    }
    @media (max-width: 300px){
        h4 {
            font-size: 15px;
        }
        p {
            font-size: 14px;
        }
    }
`
export default ErrorPage;