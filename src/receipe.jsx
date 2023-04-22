import React, { useState } from 'react';

function RecipeList() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: 'Pasta with Tomato Sauce',
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80',
      description: 'A classic Italian dish, made with fresh tomatoes and herbs.',
      mealType: 'Dinner',
      dietaryRestrictions: ['Vegetarian'],
    },
    {
      id: 2,
      name: 'Chicken Salad',
      image: 'https://www.example.com/images/salad.jpg',
      description: 'A healthy and delicious salad, perfect for lunch or dinner.',
      mealType: 'Lunch',
      dietaryRestrictions: ['Gluten-Free'],
    },
    // Add more recipes here
  ]);

  const [selectedCriteria, setSelectedCriteria] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleCriteriaChange = (event) => {
    setSelectedCriteria(event.target.value);
  };

  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    if (selectedCriteria && recipe[selectedCriteria]) {
      return recipe[selectedCriteria].includes(searchKeyword);
    } else {
      return (
        recipe.name.includes(searchKeyword) ||
        recipe.description.includes(searchKeyword)
      );
    }
  });

  const recipeStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
  };

  const imgStyle = {
    maxWidth: '100%',
    height: '200px',
    display: 'block',
    margin: 'auto',
    marginBottom: '10px',
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Recipe List</h1>
      <form style={{display:'flex',justifyContent:'center'}}>
        <label htmlFor="criteria">Filter by:</label>
        <select id="criteria" value={selectedCriteria} onChange={handleCriteriaChange}>
          <option value="">Name</option>
          <option value="mealType">Meal Type</option>
          <option value="dietaryRestrictions">Dietary Restrictions</option>
        </select>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" value={searchKeyword} onChange={handleSearchKeywordChange} style={{ marginLeft: '10px' }} />
      </form>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={recipeStyle}>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} style={imgStyle}/>
            <p>{recipe.description}</p>
            <p>Meal Type: {recipe.mealType}</p>
            <p>Dietary Restrictions: {recipe.dietaryRestrictions.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
