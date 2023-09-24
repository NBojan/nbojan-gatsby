import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    allAirtable {
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
        <Wrapper>
            {types.map((type, btnIndex) => (
                <button type="button" className={`btn btn-m btn-prim ${btnIndex === index ? "active" : ""}`} onClick={() => filtering(btnIndex, type)} key={btnIndex}>
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
        margin-right: 12px;
        text-transform: capitalize;
    }
    button:hover {
        transform: scale(1.1);
    }
    .active {
        transform: scale(1.1);
        background-color: var(--clr-primary-4);
	    border-color: var(--clr-primary-4);
    }
`
export default Filters;