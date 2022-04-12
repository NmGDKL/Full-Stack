import { HeadText, Image, Wrapper, Container, Button } from './style'
import { Link } from 'react-router-dom'

const RecipeCard = ({recipes}) => {
  return (
    <div>
      <Container>
         {recipes.map((recipe,index)=>(
                <Wrapper key={index}>
                    <HeadText>{recipe.recipe.label}</HeadText>
                    <Image src={recipe.recipe.image}/>
                    <Link to={`/details/${recipe.recipe.uri.slice(recipe.recipe.uri.indexOf("_")+1)}`}><Button>View More</Button></Link> 
                </Wrapper>
        ))}
        </Container>
    </div>
  )
}

export default RecipeCard