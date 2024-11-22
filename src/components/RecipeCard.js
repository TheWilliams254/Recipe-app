const RecipeCard = ({ recipe }) => {
    return (
      <div className="recipe-card">
        <img src={recipe.image} alt={recipe.title} />
        <h3>{recipe.title}</h3>
        <p>Ready in: {recipe.readyInMinutes} minutes</p>
        <p>Servings: {recipe.servings}</p>
      </div>
    );
  };
  
  export default RecipeCard;
  