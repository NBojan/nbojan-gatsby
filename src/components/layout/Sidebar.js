import React from "react";
import styled from "styled-components";
import links from "../../assets/constants/links";
import { Link } from "gatsby";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../assets/context/context";

const Sidebar = () => {
    const { showSide, toggleSide } = useGlobalContext();

    return (  
        <Wrapper className={showSide ? "sidebar show-side" : "sidebar"}>
            <button type="button" onClick={toggleSide} className="btn close-btn"><FaTimes /></button>

            <div className={showSide ? "cont show-cont" : "cont"}>
                <div className="links">
                    {links.map(link => (
                        <Link to={link.url} key={link.id} onClick={toggleSide} className="link" 
                        style={{animationDelay: `${link.id / 10}s`}}>
                            {link.text}
                        </Link>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 32px;
    z-index: 1000;
    transition: all .2s ease;
    background-color: var(--clr-mainBack);

    .close-btn {
        position: absolute;
        top: 32px;
        right: 32px;
        font-size: 32px;
        color: var(--clr-red-dark)
    }
    .close-btn:hover {
        color: var(--clr-red-light);
    }

    .cont {
        height: 100%;
        display: none;
    }
    .show-cont {
        display: none;
    }

    .links {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .link {
        display: block;
        opacity: 0;
        padding: 8px;
        font-size: 24px;
        margin-bottom: 12px;
        color: var(--clr-black);
        text-transform: capitalize;
        transform: translateX(-100%);
        transition: all .2s ease;
        animation: slideIn .4s ease forwards;
    }
    .link:hover {
        padding-left: 24px;
        color: var(--clr-primary-5);
        box-shadow: -3px 0 var(--clr-primary-5);
    }

    @media (max-width: 767px){
        .show-cont {
            display: flex;
        }
    }
`
export default Sidebar;