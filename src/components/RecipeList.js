import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { fetchRecipes } from "../services/api";

const RecipeList = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchRecipes(searchQuery || "popular"); // Default to popular recipes
      setRecipes(data);
      setLoading(false);
    };

    fetchData();
  }, [searchQuery]);

  if (loading) return <p>Loading recipes...</p>;

  return (
    <div className="recipe-list">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
