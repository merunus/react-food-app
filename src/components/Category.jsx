import React, {useState, useEffect} from 'react'
import {FaPizzaSlice, FaHamburger} from "react-icons/fa"
import {GiNoodles, GiChopsticks} from "react-icons/gi"
import styled from "styled-components"
import {NavLink} from "react-router-dom"



function Category() {
  return (
    <List>
        <StyledLink  to = {"/cuisine/Italian"}>
            <FaPizzaSlice></FaPizzaSlice>
            <h4>Italian</h4>
        </StyledLink>
        <StyledLink to = {"/cuisine/American"}>
            <FaHamburger></FaHamburger>
            <h4>American</h4>
        </StyledLink>
        <StyledLink to = {"/cuisine/Thai"}>
            <GiNoodles></GiNoodles>
            <h4>Thai Food</h4>
        </StyledLink>
        <StyledLink to = {"/cuisine/Japanese"}>
            <GiChopsticks></GiChopsticks>
            <h4>Japanese</h4>
        </StyledLink>
    </List>
  )
}

const StyledLink = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-right: 2rem;
text-decoration: none;

h4 {
    font-weight: 400;
}
svg {
    font-size: 1.5em;
    margin-bottom: 10px;
    transition: 0.3s ease;
}

&.active{
    color: #f27121;
}


`

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`

export default Category