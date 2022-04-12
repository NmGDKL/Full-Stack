import Header from "../../components/header/Header";
import ImageHomeSvg from "../../assets/home.svg";
import axios from "axios";
import { useState } from "react";
import RecipeCard from "./RecipeCard";
import { ImageHome } from "./style";
import Form from "../../components/header/Form";

const Home = () => {

  const [recipes, setRecipes] = useState([]);


  const APP_KEY = "39a3fef7fdf597d5088bc91c00aab6af";
  const APP_ID = "5958d2cc";

  const result = async ({searchText, optionText}) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${searchText}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${optionText}`);
    console.log(searchText);
    
    setRecipes(response.data.hits);
  };
  
  
 
  return (
    <div style={{ backgroundColor: "rgb(66, 167, 191)" }}>
      <Header/>
      <Form result={result}/>
      {recipes.length != 0 ? <RecipeCard recipes={recipes} /> : <ImageHome src={ImageHomeSvg} />}
      
      
    </div>
  );
};

export default Home;
