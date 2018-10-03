function deleteRecipe(item){
    return {
        type: 'deleteRecipe',
        recipeData: {
            recipeName: item.recipeName,
            recipeIngredients: item.recipeIngredients,
            recipeInstructions: item.recipeInstructions,
            recipePic: item.recipePic
        }
    }
}

export default deleteRecipe;