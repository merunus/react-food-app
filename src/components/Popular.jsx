import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom'


function Popular() {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular()

    }, [])

    const getPopular = async () => { // async function getPopular() {}

        const check = localStorage.getItem("popular")
        if(check) {
            setPopular(JSON.parse(check))
        }else {
            const key = "06aa1d9e5ebb44c79240eafb6f692786"
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=12`) // apiKey=${process.env.REACT_APP_API_KEY}
            const data = await api.json()
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            setPopular(data.recipes)
            console.log(data.recipes);

        }

    }






    return (
        <div>
        <hr/>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
          breakpoints: {
            1024: {
              perPage: 3,
            },
            767: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key = {recipe.id}>
                                <Card >
                                    <Link to = {"/recipe/" + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image ? recipe.image : "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg"} alt={recipe.title}></img>
                                    <Gradient/>
                                    </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
            
        </div>
    )
}

const Wrapper = styled.div`
margin: 4rem 0rem;

`

const Card = styled.div`
    min-height:25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    
    img{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
    }
  
    p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: #fff;
    width: 100%;
    height: 40%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }


`

const Gradient = styled.div`
position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  z-index: 3;
  border-radius: 2rem;
;
`

export default Popular