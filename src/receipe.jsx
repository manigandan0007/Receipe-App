import React, { useState } from 'react';

function RecipeList() {
  const [recipes, setRecipes] = useState([
    
    {
      id: 1,
      name: 'Idli with Sambar',
      image: 'https://swadishtrecipes.in/wp-content/uploads/2023/01/Idli-Sambar-Recipe.png',
      description: 'Steamed rice and lentil cakes served with spicy stew.',
      mealType: 'Breakfast',
      dietaryRestrictions: ['Vegan'],
    },
    {
      id: 2,
      name: 'Dosa',
      image: 'https://images.indianexpress.com/2020/04/dosa_1200.jpg',
      description: 'Thin, crispy crepe made with rice and lentil batter.',
      mealType: 'Breakfast',
      dietaryRestrictions: ['Low-fat'],
    },
    {
      id: 3,
      name: 'Puri',
      image: 'https://www.shutterstock.com/shutterstock/photos/477880174/display_1500/stock-photo-puri-bhaji-is-indian-breakfast-dish-it-is-made-of-flat-round-flour-deep-fried-and-served-with-477880174.jpg',
      description: 'Small, round, fried Indian bread, airy texture.',
      mealType: 'Breakfast',
      dietaryRestrictions: ['Vegetarian'],
    },
    {
      id: 4,
      name: 'Ven Pongal',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/pongal-ven-pongal.jpg',
      description: 'Creamy, savory rice and lentil porridge, South Indian.',
      mealType: 'Breakfast',
      dietaryRestrictions: ['Vegetarian'],
    },
    {
      id: 5,
      name: 'Ragi Mudde',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/ragi-mudde-recipe.jpg',
      description: 'Wholesome, filling, gluten-free, finger millet balls.',
      mealType: 'Breakfast',
      dietaryRestrictions: ['Gluten-Free'],
    },    
    {
      id: 6,
      name: 'Rava Upma',
      image: 'https://c.ndtvimg.com/2021-03/jkd9mq2o_upma_625x300_10_March_21.jpg',
      description: 'Savory semolina porridge, South Indian breakfast',
      mealType: 'Breakfast',
      dietaryRestrictions: ['Vegan'],
    },
    {
      id: 7,
      name: 'South Indian Thali',
      image: 'https://media.istockphoto.com/id/481149282/photo/south-indian-food.jpg?s=612x612&w=0&k=20&c=w43naq0743XDvzCi5FW_ROvzw4_KaCkuam16sfy3hTc=',
      description: 'A wholesome meal of rice, sambar, rasam, and vegetables.',
      mealType: 'Lunch',
      dietaryRestrictions: ['Gluten-free'],
    },
    {
      id: 8,
      name: 'Gujarati Thali',
      image: 'https://www.nehascookbook.com/wp-content/uploads/2022/10/Shrad-thali-WS.jpg',
      description: 'Platter with sweet, sour, spicy, and savory dishes.',
      mealType: 'Lunch',
      dietaryRestrictions: ['Vegetarian'],
    },
    {
      id: 9,
      name: 'Maharashtrian Thali',
      image: 'https://img-global.cpcdn.com/recipes/529df0972022269f/400x400cq70/photo.jpg',
      description: 'Spicy, savory platter with various regional specialties.',
      mealType: 'Lunch',
      dietaryRestrictions: ['low-carbohydrate'],
    },
    {
      id: 10,
      name: 'Chicken Briyani',
      image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80',
      description: 'Fragrant rice, spiced chicken, aromatic Indian dish.',
      mealType: 'Lunch',
      dietaryRestrictions: ['Non-Vegetarian'],
    },    
    {
      id: 11,
      name: 'Mutton Briyani',
      image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg',
      description: 'Fragrant rice dish with spiced tender mutton meat.',
      mealType: 'Lunch',
      dietaryRestrictions: ['Gluten-free'],
    },
    {
      id: 12,
      name: 'Fish Briyani',
      image: 'https://www.bigbasket.com/media/uploads/recipe/w-l/1025_1.jpg',
      description: 'Aromatic rice dish with spiced fish pieces.',
      mealType: 'Lunch',
      dietaryRestrictions: ['High-cholesterol'],
    },    
    {
      id: 13,
      name: 'Parotta',
      image: 'https://images.news18.com/ibnlive/uploads/2022/06/malabar-paratha.jpg',
      description: 'Layered, flaky flatbread, South Indian origin.',
      mealType: 'Dinner',
      dietaryRestrictions: ['High-calorie'],
    },
    {
      id: 14,
      name: 'Kothu Parotta',
      image: 'https://www.licious.in/blog/wp-content/uploads/2020/06/KUTTU-PORATTA-750x750.jpg',
      description: 'Shredded parotta, spicy masala, South Indian street food.',
      mealType: 'Dinner',
      dietaryRestrictions: ['Non-Vegetarian'],
    },
    {
      id: 15,
      name: 'Chilli Parotta',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiR4dIVlSGmP8uZDOrSoNUi0SD3BhRjmZPJPmSZqyKA&usqp=CAU&ec=48600112',
      description: 'Spicy, shredded parotta with vegetables.',
      mealType: 'Dinner',
      dietaryRestrictions: ['High-calorie'],
    },
    {
      id: 16,
      name: 'Idiyappam with Coconutmilk',
      image: 'https://www.awesomecuisine.com/wp-content/uploads/2014/04/idiyappam-coconut-milk.jpg',
      description: 'Steamed rice noodles, served with coconut milk.',
      mealType: 'Dinner',
      dietaryRestrictions: ['Vegan'],
    },    
    {
      id: 17,
      name: 'Set Dosa with Vadacurry',
      image: 'https://traditionallymodernfood.com/wp-content/uploads/2022/02/vada-curry-vadakari-4-scaled.jpeg',
      description: 'Soft, spongy dosas, served with spicy lentil curry.',
      mealType: 'Dinner',
      dietaryRestrictions: ['Vegetarian'],
    },
    {
      id: 18,
      name: 'Chapati',
      image: 'https://static.toiimg.com/thumb/msid-71503575,width-1280,resizemode-4/71503575.jpg',
      description: 'Thin, unleavened flatbread, commonly eaten in India.',
      mealType: 'Dinner',
      dietaryRestrictions: ['Vegan'],
    },    
    {
      id: 19,
      name: 'Samosa',
      image: 'https://media.istockphoto.com/id/502663991/photo/punjabi-samosa-23.jpg?s=612x612&w=0&k=20&c=Ne0ArOpa-4L2N-INtPnq371fFZoM6qWW6R4ryN9TWW0=',
      description: 'Triangular, savory pastry filled with spiced vegetables.',
      mealType: 'Snacks',
      dietaryRestrictions: ['High Calories '],
    },       
    {
      id: 20,
      name: 'Sweet Paniyaram',
      image: 'https://static.toiimg.com/thumb/66554591.cms?imgsize=572772&width=800&height=800',
      description: 'Sweet, round, fried rice flour dumplings.',
      mealType: 'Snacks',
      dietaryRestrictions: ['Vegetarian'],
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
