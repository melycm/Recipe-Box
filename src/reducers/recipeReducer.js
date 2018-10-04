import uuid from 'uuid';

function recipeReducer(state, action) {
    if (state === undefined) {
        return { 
            apiInfo: [],
            recipeList: [
                {
                    recipeName: "Beef Tacos",
                    recipeIngredients: '1 tablespoon olive oil, 1/2 yellow oniondiced, 2 pounds ground beef, 1/2 teaspoon chili powder, 1/2 teaspoon cumin, 1/2 teaspoon paprika, 1/2 teaspoon salt, 1/2 teaspoon ground black pepper, 1/4 teaspoon crushed red pepper',
                    recipeInstructions: 'Preheat the oven to 325 degrees F. For the beef: In a skillet over medium-high heat, add the olive oil and onions. Cook until starting to soften, then add the ground beef. Cook the meat until its totally browned, then drain the fat. Add the chili powder, cumin, paprika, salt, black pepper and crushed red pepper and stir to combine. Add 1/2 cup hot water and stir. Reduce the heat to low and simmer for 15 minutes. For the fixins: Meanwhile, wrap the flour tortillas in foil and warm in the oven for 20 to 25 minutes. Right before serving, crisp the taco shells in the oven according to package instructions. Serve with the grated cheese, diced tomatoes and shredded lettuce.',
                    recipePic: "https://d3hvwccx09j84u.cloudfront.net/0,0/image/pineapple-poblano-beef-tacos-b7badad1.jpg",
                    id: uuid.v4()
                },
                {
                    recipeName: "Chile Relleno",
                    recipeIngredients: '6 fresh Anaheim chile peppers, 2 eggs, separated, (8 ounce) package queso asadero (white Mexican cheese)- cut into 3/4-inch thick strips, 1 teaspoon baking powder, 3/4 cup all-purpose flour, 1 cup vegetable shortening for frying',
                    recipeInstructions: 'Preheat the ovens broiler and set the oven rack at about 6 inches from the heat source. Line a baking sheet with aluminum foil. Place peppers onto the prepared baking sheet, and cook under the preheated broiler until the skin of the peppers has blackened and blistered, about 10 minutes. Turn the peppers often to blacken all sides. Place the blackened peppers into a bowl, and tightly seal with plastic wrap. Allow the peppers to steam as they cool, about 15 minutes. Rinse cooled peppers under cold water to peel off the skins, and cut a slit along the long side of each pepper to remove the seeds and core. Rinse the peppers inside and out, and pat dry with paper towels. Stuff the peppers with strips of the cheese. Whisk the egg yolks in a bowl with the baking powder. In a second metal bowl, beat the egg whites with an electric mixer until the whites form stiff peaks. Gently fold the beaten egg whites into the yolk mixture. Place flour into a shallow bowl. Heat the vegetable shortening in a skillet over medium heat. Roll each stuffed pepper in flour, tap off excess flour, and dip the peppers into the egg mixture to coat both sides. Gently lay the coated peppers into the hot shortening. Fry peppers until lightly golden brown and the cheese has melted, about 5 minutes per side.',
                    recipePic: "https://food-fanatic-res.cloudinary.com/iu/s--KmhxrwKp--/c_thumb,f_auto,g_auto,h_800,q_auto,w_800/v1512750000/chile-relleno-photo",
                    id: uuid.v4()
                },
                {
                    recipeName: "Mole",
                    recipeIngredients: '1 chicken (3 to 4 pounds) cut into 6 pieces, 5 black peppercorns, 1/2 cup sesame seeds, 6 dried guajillo chile peppers, 4 dried ancho chile peppers, 6 tablespoons canola oil, 1 2.7-ounce disk Mexican chocolate, broken into pieces, Pinch of sugar',
                    recipeInstructions: 'Put the chicken and peppercorns in a large pot, cover with water and season with salt. Bring to a gentle simmer over low heat and cook until tender, about 40 minutes. Transfer the chicken to a large plate and set the cooking liquid aside. Toast the sesame seeds in a dry skillet over medium heat, tossing, until golden, about 5 minutes. Set aside 2 tablespoons for garnish and transfer the rest to a blender. In the same skillet, toast the cloves, cinnamon stick, and anise and coriander seeds until fragrant, about 3 minutes. Add to the blender. Remove the stems and seeds from the dried chile peppers. Heat 4 tablespoons canola oil in the same skillet over medium heat. Add the chiles and fry until lightly toasted, about 2 minutes. Transfer to a bowl, cover with hot water and set aside to soak until pliable, about 30 minutes.',
                    recipePic:"https://www.seriouseats.com/recipes/images/2012/10/20121024-227412-mole-poblano.jpg",
                    id: uuid.v4()
                }
            ]
        };
    }

    switch(action.type){
        case "addRecipe":
        return{
            ...state,
            recipeList: [
                ...state.recipeList,
                {
                    recipeName: action.recipeData.recipeName,
                    recipeIngredients: action.recipeData.recipeIngredients,
                    recipeInstructions: action.recipeData.recipeInstructions,
                    recipePic: action.recipeData.recipePic,
                    id: uuid.v4()
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

        case 'apiFetchData':
        {
            return {
                ... state,
                apiInfo: action.payload
            }
        }
        default:
            return state;
    }
}

export default recipeReducer;