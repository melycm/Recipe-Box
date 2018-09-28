function editRecipe(product){
    return {
        type: 'editRecipe',
        recipeData: {
            recipeName: item.recipeName,
            recipeIngredients: item.recipeIngredients,
            recipeInstructions: item.recipeInstructions,
            recipiPic: item.recipiPic
        }
    }
}

export default editRecipe;