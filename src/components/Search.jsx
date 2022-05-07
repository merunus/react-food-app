import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {
    const [input, setInput] = useState("")

    const navigate = useNavigate()
  
    function sumbitHandler(e) {
        e.preventDefault()
        navigate("/searched/" + input )
    }


  return (
  
        <FormStyle onSubmit={sumbitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input value = {input} onChange = {(e) => setInput(e.target.value)} type="text" name="" id="" />
            </div>
        </FormStyle>
    
  )
}




// <---------- Styling 

const FormStyle = styled.form`
    margin: 0rem 20rem;
    div {
        width: 100%;
        position: relative;
    }
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        font-size: 1em;
        font-weight: 300;
    }
    svg {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(100%, -50%);
        color: white;

    }

`

export default Search