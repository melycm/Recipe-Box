function addRecipe(item){
    console.log("action on add recipe");
    return{
        type: 'addRecipe',
        recipeData: {
            recipeName: item.recipeName,
            recipeIngredients: item.recipeIngredients,
            recipeInstructions: item.recipeInstructions,
            recipePic: item.recipePic
        }
    }
}

export default addRecipe;