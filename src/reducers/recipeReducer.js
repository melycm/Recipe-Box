function recipeReducer(state, action) {
    if (state === undefined) {
        return { 
            recipeList: [
                {
                    recipeName: "Beef Tacos",
                    recipeIngredients: '1 tablespoon olive oil, 1/2 yellow onion, diced, 2 pounds ground beef, 1/2 teaspoon chili powder, 1/2 teaspoon cumin, 1/2 teaspoon paprika, 1/2 teaspoon salt, 1/2 teaspoon ground black pepper, 1/4 teaspoon crushed red pepper',
                    recipeInstructions: 'Preheat the oven to 325 degrees F. For the beef: In a skillet over medium-high heat, add the olive oil and onions. Cook until starting to soften, then add the ground beef. Cook the meat until its totally browned, then drain the fat. Add the chili powder, cumin, paprika, salt, black pepper and crushed red pepper and stir to combine. Add 1/2 cup hot water and stir. Reduce the heat to low and simmer for 15 minutes. For the fixins: Meanwhile, wrap the flour tortillas in foil and warm in the oven for 20 to 25 minutes. Right before serving, crisp the taco shells in the oven according to package instructions. Serve with the grated cheese, diced tomatoes and shredded lettuce.',
                    recipiPic: 'https://d3hvwccx09j84u.cloudfront.net/0,0/image/pineapple-poblano-beef-tacos-b7badad1.jpg'
                },
                {
                    recipeName: "Chicken Tacos",
                    recipeIngredients: 'Ingredients 1',
                    recipeInstructions: 'Recipe 2',
                    recipePic: ''
                },
                {
                    recipeName: "Mole",
                    recipeIngredients: 'Ingredients 1',
                    recipeInstructions: 'Recipe 3',
                    recipePic:''
                }
            ]
        };
    }

    switch(action.type){
        case "addRecipe":
        console.log("im in my reducer");
        return{
            ...state,
            recipeList: [
                ...state.recipeList,
                {
                    recipeName: action.recipeData.recipeName,
                    recipeIngredients: action.recipeData.recipeIngredients,
                    recipeInstructions: action.recipeData.recipeInstructions
                }
            ] 
        }
        
        case "deleteRecipe":
            const updatedArray =  state.recipeList.filter( product =>
                {
                    return product.recipeName !== action.recipeData.recipeName
                }
            )
            return{
                ...state,
                recipeList: updatedArray
            }
        default:
            return (state)
        }
}

export default recipeReducer;