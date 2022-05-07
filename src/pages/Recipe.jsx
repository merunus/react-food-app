import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import styled from "styled-components"


function Recipe() {
const [details, setDetails] = useState({})
const [activeTab, setActiveTab] = useState("instructions")
let params = useParams()



const fetchDetails = async () =>{
  const key = "06aa1d9e5ebb44c79240eafb6f692786"
  const data = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${key}`)
  const detailedData = await data.json()
  setDetails(detailedData)
  console.log(detailedData);
}


useEffect(() => {
  fetchDetails()
}, [params.name])





  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button className ={activeTab === "instructions" ? "active" : ""} onClick={() => {setActiveTab("instructions")}}>
          Instructions
        </Button>
        <Button className ={activeTab === "ingridients" ? "active" : ""} onClick={() => {setActiveTab("ingridients")}}>
          Ingridients
        </Button>

        {activeTab === "instructions" && (
          <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>
        )}
        
        {activeTab === "ingridients" && (
          <ul>
          {details.extendedIngredients.map((ingredient)=>{
             return <li key= {ingredient.id}>{ingredient.original}</li>
          })}
        </ul>
        )}
        
      </Info>
    </DetailWrapper>
  )
}



// Styling

const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;
justify-content: center;

img {
  border-radius: 5px;
}
.active {
background: linear-gradient(35deg, #494949, #313131);
color: #fff;

}

h3 {
  font-size: 1.2em;
  font-weight: 400;
}
h2 {
  margin-bottom: 2rem;
  font-size: 1.5em;
}
li {
  font-size: 1.2rem;
  line-height: 2.5rem;
  padding-left: 5px;
  font-weight: 400;
}
ul {
  margin-top: 2rem;
  list-style: decimal;
}
`

const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: #fff;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
transition: 0.3s ease;
cursor: pointer;
`


const Info = styled.div`
margin-left: 5rem;
`

export default Recipe