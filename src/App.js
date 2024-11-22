import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./pages/RecipeDetails";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          {/* Home/Recipe List */}
          <Route path="/" element={<RecipeList />} />

          {/* Recipe Details */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />

          {/* Favorites */}
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
