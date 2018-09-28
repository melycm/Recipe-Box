function deleteRecipe(item){
    return {
        type: 'deleteRecipe',
        recipeData: {
            recipeName: item.recipeName,
            recipeIngredients: item.recipeIngredients,
            recipeInstructions: item.recipeInstructions,
            recipiPic: item.recipiPic
        }
    }
}

export default deleteRecipe;