import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import Recipe from "./Components/Recipe";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  const YOUR_APP_ID = "5d6faacc";
  const YOUR_APP_KEY = "028b57b6e36dacc33afb710babdc795f";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipes= async()=> {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);

  }
    const onSubmit = (e)=>{
      e.preventDefault();
      getRecipes();
  }
  return (
    <div className="app">
      <h1 onClick={getRecipes}>Food Menu 🥣 </h1>
      <form className="app-search" onSubmit={onSubmit}>
        
          <input className="app-input"
            type="text"
            value={query}
            placeholder="Enter search here"
            onChange={(e) => setQuery(e.target.value)}
          />
        
        
          <input className="app-submit" type="submit" value="Search" />

          
        
      </form>


      <div className="app-recipe">
        {recipes.map(recipe =>{
         return  <Recipe recipe={recipe}/>;
        })}
      </div>
    </div>
  );
};

export default App;
