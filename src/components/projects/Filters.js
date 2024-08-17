import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
    {
        allAirtable(filter: {table: {eq: "projects"}}) {
            distinct(field: {data: {type: SELECT}})
        }
    }
`

const Filters = ({ filterProjects }) => {
    const { allAirtable: {distinct:uniqueTypes} } = useStaticQuery(query);
    const types = ["all", ...uniqueTypes];
    const [index, setIndex] = useState(0);

    const filtering = (btnIndex, type) => {
        filterProjects(type);
        setIndex(btnIndex);
    }

    return (  
        <Wrapper className="space-x-2 xs:space-x-3">
            {types.map((type, btnIndex) => (
                <button 
                  type="button" 
                  className={`btn capitalize btn-prim ${btnIndex === index ? "active" : ""} hover:scale-110`} 
                  onClick={() => filtering(btnIndex, type)} key={btnIndex}
                >
                    {type}
                </button>
            ))}
        </Wrapper>
    );
}
 
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 32px;

    button {
        padding: 4px 6px;
        font-size: 14px;
        letter-spacing: 1px;
    }
    @media (min-width: 300px){
        button {
            padding: 6px 8px;
            font-size: 15px;
            letter-spacing: 1.2px;
        }
    }
    .active {
        transform: scale(1.1);
        background-color: var(--clr-primary-4);
	    border-color: var(--clr-primary-4);
    }
`
export default Filters;