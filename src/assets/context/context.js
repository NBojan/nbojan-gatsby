import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [showSide, setShowSide] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const toggleSide = () => setShowSide(!showSide);
    const checkScroll = () => window.scrollY >= window.innerHeight ? setShowScrollTop(true) : setShowScrollTop(false);


    useEffect(() => {
        window.addEventListener("scroll", checkScroll)
        return () => window.removeEventListener("scroll", checkScroll);
    }, [])


    return (
        <AppContext.Provider value={{showSide, toggleSide, showScrollTop, featured: []}}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}