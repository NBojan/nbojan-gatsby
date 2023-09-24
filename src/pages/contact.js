import React from "react";
import styled from "styled-components";

const ContactPage = () => {
    return (  
        <Wrapper className="full-page contact-page">
            <article className="containerBoot mx-auto form-cont">
                <form className="shadow-xl hover:shadow-2xl" action="https://formspree.io/f/xrgvqpkd" method="POST">
                    <header className="capitalize text-center mb-6">
                        <h3 className="font-semibold">contact me</h3>
                        <div className="underline-nb mx-auto"></div>
                    </header>

                    <div className="form-control">
                        <label htmlFor="name">name :</label>
                        <input type="text" name="name" id="name" placeholder="Name..." required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">email :</label>
                        <input type="email" name="email" id="email" placeholder="youremail@domain.com" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="message">message :</label>
                        <textarea name="message" id="message" placeholder="Message..."></textarea>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button type="submit" className="btn btn-m btn-prim capitalize">submit</button>
                    </div>
                </form>
            </article>
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    display: flex;
    padding: 32px 0;
    background-color: var(--clr-mainBack);
    overflow: hidden;
    
    .form-cont {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .underline {
        background-color: var(--clr-primary-5);
    }
    form {
        width: 100%;
        max-width: 500px;
        padding: 24px 32px;
        border-radius: 4px;
        background-color: #fff;
        transition: all .2s ease;
        animation: fall .5s ease forwards;
    }

    .form-control {
        margin-bottom: 16px;
        label {
            display: block;
            margin-bottom: 4px;
            text-transform: capitalize;
        }
        input, textarea {
            display: block;
            width: 100%;
            font-size: 15px;
            padding: 8px 12px;
            border-radius: 4px;
            border: transparent;
            letter-spacing: .5px;
            background-color: var(--clr-mainBack);
        }
        input::placeholder,
        textarea::placeholder {
            color: var(--clr-grey-6)
        }
        textarea {
            height: 120px;
        }
    }

    @media (max-width: 575px){
        .form-cont {
            width: 90%;
        }
    }

    @keyframes fall {
        0% {
            transform: translateY(-100%);
        }
        50% {
            transform: translateY(25%);
        }
        100% {
            transform: translateY(0);
        }
    }
`
export default ContactPage;