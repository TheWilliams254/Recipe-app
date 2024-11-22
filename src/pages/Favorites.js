import React, { useState } from 'react';

function FavoriteRecipes() {
  const [favorites, setFavorites] = useState([]);
  const [newRecipe, setNewRecipe] = useState("");

  const addRecipe = () => {
    if (newRecipe) {
      setFavorites([...favorites, newRecipe]);
      setNewRecipe("");
    }
  };

  const removeRecipe = (indexToRemove) => {
    setFavorites(favorites.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h1>Your Favorite Recipes</h1>
      <input
        type="text"
        placeholder="Add a recipe"
        value={newRecipe}
        onChange={(e) => setNewRecipe(e.target.value)}
      />
      <button onClick={addRecipe}>Add Recipe</button>

      {favorites.length === 0 ? (
        <p>No favorite recipes yet. Start adding some!</p>
      ) : (
        <ul>
          {favorites.map((recipe, index) => (
            <li key={index}>
              {recipe}{" "}
              <button onClick={() => removeRecipe(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriteRecipes;
