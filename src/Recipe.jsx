import React from 'react';

const Recipe = ({ name, image, description }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Recipe;
