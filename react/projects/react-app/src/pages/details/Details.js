import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Image, Container, Container2, HeadText, Wrapper, ImageRecipe, Ingredients } from './style';
import dietSvg from '../../assets/diet.svg'
import mealSvg from '../../assets/meal.svg'


const Details = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [recipeDetail, setRecipeDetail] = useState([])
    
    
    useEffect(() => {
        fetch(`https://api.edamam.com/api/recipes/v2/${params.recipeLabel}?type=public&app_id=5958d2cc&app_key=39a3fef7fdf597d5088bc91c00aab6af`)
          .then((res) => res.json())
          .then((json) => setRecipeDetail(json));
          
      }, []);

      console.log(recipeDetail);

  return (


    <div style={{ backgroundColor: "rgb(66, 167, 191)", padding:"2rem"}}>
        {recipeDetail.length <= 1 ? <Container2><Image  onClick={() => navigate(-1)} style={{cursor:'pointer'}}/></Container2> :
        <div>
        <Container>
            <HeadText>{recipeDetail?.recipe?.label}</HeadText>
            {recipeDetail?.recipe?.dietLabels.length == 0 ? <Image src={mealSvg}/> : <Image src={dietSvg}/>}
        </Container>
        <Wrapper>
            
            <div>
                <Ingredients>Ingredients</Ingredients>
            {recipeDetail?.recipe?.ingredientLines.map((element=> ( <p> * {element} </p> )))}
            </div>
        <ImageRecipe src={recipeDetail?.recipe?.image}/>
        </Wrapper>
        </div>
}
        

    </div>
  )
}

export default Details