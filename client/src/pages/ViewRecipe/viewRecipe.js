import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function ViewRecipes({ recipe }) {

  const { name, link, description } = recipe;

  return (
    <div className="" key={name}>
      <img
        src=""
        alt={removeHyphensAndCapitalize(name)}
        className=""
      />
      <div className="">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ViewRecipe;