import React from 'react';
import {ButtonToolbar, Button, Modal, ControlLabel, FormGroup , FormControl} from 'react-bootstrap';
import '../App.css'
import NavigationBar from './NavigationBar'
import addRecipe from '../actions/addRecipe'
import {connect} from 'react-redux';
import ViewAll from './ViewAll'


class AddRecipe extends React.Component {
    constructor(props, context) {
        super(props, context);    
        this.state = {
           
            recipeName: '',
            recipeIngredients: '',
            recipeInstructions: '',
            recipiPic: ''
            
        };
        
    }

    handleRecipeName(e){
        e.preventDefault();

        

        this.setState({recipeName: e.target.value});

    }

    handleRecipeIngredients(e){
        e.preventDefault();

        

        this.setState({recipeIngredients: e.target.value});

    }

    handleRecipeInstructions(e){
        e.preventDefault();

        

        this.setState({recipeInstructions: e.target.value});

    }

    // handleSubmit(e){
    //     e.preventDefault();

    //     this.setState({
    //         recipe: {
    //             recipeName: this.state.recipe.recipeName,
    //             recipeIngredients: this.state.recipe.recipeIngredients,
    //             recipeInstructions: this.state.recipe.recipeInstructions,
    //             recipiPic: this.state.recipe.recipiPic,
    //         }
    //     }, function(){
    //         console.log('form submitted ' + this.state.recipe.recipeName, this.state.recipe.recipeIngredients,
    //         this.state.recipe.recipeInstructions,
    //         this.state.recipe.recipiPic);

    //         // let tempRecipe = this.state.allRecipes;
    //         // tempRecipe.push(this.state.newRecipe);

    //         //this.setState({allRecipes: tempRecipe});
    //     })
    // }

    render() {
        let recipeList = this.props.recipeList.map(recipe =>{

            return <p key={recipe.recipeName}>{recipe.recipeIngredients} {recipe.recipeInstructions}</p>
        })

        return (
            <div>
                <NavigationBar />
                
                <form >
                    <FormGroup controlId="formControlsName">
                        <ControlLabel>Name of Recipe</ControlLabel>
                        <FormControl type="text" placeholder="Name" onChange={this.handleRecipeName.bind(this)} />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Ingredients</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Ingredients" onChange={this.handleRecipeIngredients.bind(this)} />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Instructions</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Instructions" onChange={this.handleRecipeInstructions.bind(this)} />
                    </FormGroup>
                    <button onClick={() =>  this.props.onAddRecipe({
                        recipeName: this.state.recipeName,
                        recipeIngredients: this.state.recipeIngredients,
                        recipeInstructions: this.state.recipeInstructions,
                        recipiPic: this.state.recipiPic
                    })}>Save</button>
                </form>
                {recipeList}
        </div>
        )};
}

function mapStateToProps(state){

    return{
        recipeList: state.recipeList
    }
}

    function mapDispatchToProps(dispatch){
        console.log("calling dispatch")

    return{
        onAddRecipe: (recipeData) => dispatch(addRecipe(recipeData)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddRecipe);
