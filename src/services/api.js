// Your API key (replace with the actual key)
const API_KEY = process.env.REACT_APP_API_KEY;

// Base URL for the API
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Helper function to handle fetch requests
const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Error: ${response.statusText}, Details: ${error}`);
    }
    return await response.json();
};

// Function to fetch all recipes
export const fetchRecipes = async () => {
    try {
        const response = await fetch(`${BASE_URL}/recipes`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`, // Add the API key here
                'Content-Type': 'application/json',
            },
        });
        return await handleResponse(response);
    } catch (error) {
        console.error('Failed to fetch recipes:', error);
        throw error;
    }
};

// Function to fetch details of a specific recipe by ID
export const fetchRecipeDetails = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/recipes/${id}`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`, // Add the API key here
                'Content-Type': 'application/json',
            },
        });
        return await handleResponse(response);
    } catch (error) {
        console.error('Failed to fetch recipe details:', error);
        throw error;
    }
};
