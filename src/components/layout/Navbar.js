import React from "react";
import styled from "styled-components";
import links from "../../assets/constants/links";
import logo from "../../assets/images/logo/FQ.svg";
import { Link } from "gatsby";
import { CgMenuRightAlt } from "react-icons/cg";
import { useGlobalContext } from "../../assets/context/context";

const Navbar = () => {
    const { toggleSide } = useGlobalContext();

    return (  
        <Wrapper>
            <nav className="containerBoot mx-auto">
                <Link to="/" className="logo-div leading-none">
                    <img src={logo} alt="NBojan"  />
                </Link>
                
                <div className="links">
                    {links.map(link => (
                        <Link to={link.url} key={link.id} className="btn btn-s mr-3 btn-prim capitalize">{link.text}</Link>
                    ))}
                </div>

                <button type="button" className="burger-btn" onClick={toggleSide}><CgMenuRightAlt /></button>
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    display: flex;
    z-index: 99;
    height: 80px;
    position: relative;
    background-color: transparent;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .links {
        display: flex;
    }
    
    .burger-btn {
        display: none;
        cursor: pointer;
        font-size: 40px;
        border-radius: 4px;
        border: transparent;
        color: var(--clr-primary-5);
        background-color: transparent;
        transition: all .2s ease;
    }
    .burger-btn:hover {
        color: #fff;
        background-color: var(--clr-primary-5);
    }

    @media (max-width: 991px){
        .about-btn {
            padding: 4px 8px;
	        font-size: 14px;
	        letter-spacing: 1px;
        }
    }
    @media (max-width: 767px){
        .links {
            display: none;
        }
        .burger-btn {
            display: flex;
        }
    }
    @media (max-width: 575px){
        nav {
            width: 90%;
        }
    }
`
export default Navbar;