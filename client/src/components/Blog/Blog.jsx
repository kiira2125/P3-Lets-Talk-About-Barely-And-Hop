export function AddRecipe() {
  return (
    <div>
      <h1>Add Recipe</h1>
      <form style={{ display: 'flex', flexDirection: 'column'}}>
        <input type="text" placeholder="Recipe Name" />
        <input type="text" placeholder="Recipe Type" />
        <input type="text" placeholder="Recipe Description" />
        <input type="text" placeholder="Recipe Ingredients" />
        <input type="text" placeholder="Recipe Instructions" />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;