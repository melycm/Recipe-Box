function searchRecipe(item){
    console.log("action on search recipe");
    return{
        type: 'searchRecipe',
        recipeData: {
            recipeYoutube: item.recipeYoutube
        }
    }
}

export default searchRecipe;