import React, { useState, useEffect } from 'react';
import { fetchRecipes, fetchRecipeDetails } from '../services/api';


function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setLoading(true);
        const data = await fetchRecipes();
        setRecipes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : recipes.length === 0 ? (
        <p>No recipes found. Try adding some!</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>{recipe.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
