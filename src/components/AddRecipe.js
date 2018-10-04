import React from 'react';
import {ButtonToolbar, Button, Modal, ControlLabel, FormGroup , FormControl} from 'react-bootstrap';
import '../App.css'
import NavigationBar from './NavigationBar'
import addRecipe from '../actions/addRecipe'
import {connect} from 'react-redux';

class AddRecipe extends React.Component {
    constructor(props, context) {
        super(props, context);    
        this.state = {
            recipeName: '',
            recipeIngredients: '',
            recipeInstructions: '',
            recipePic: ""
        };
        this.history = props.history;
        
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

    handleRecipePic(e){
        e.preventDefault();
        this.setState({recipePic: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.onAddRecipe({
            recipePic: this.state.recipePic,
            recipeName: this.state.recipeName,
            recipeIngredients: this.state.recipeIngredients,
            recipeInstructions: this.state.recipeInstructions,
        });

        this.history.push('/ViewAll')
    }

    render() {
        let recipeList = this.props.recipeList.map(recipe =>{

            return <p key={recipe.recipeName}>{recipe.recipeName}<br /> <li>{recipe.recipeIngredients}</li><br /> {recipe.recipeInstructions}<br /> {recipe.recipePic}</p>
        })

        return (
            <div className="imagePages">
                <NavigationBar />
                <div className="formBack">
                <h3 style={{color: 'white'}}>"No one is born a great cook, one learns by doing"</h3>
                <br />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="formControlsName">
                        <ControlLabel style={{color: 'white'}}>Name of Recipe</ControlLabel>
                        <FormControl type="text" placeholder="Name" onChange={this.handleRecipeName.bind(this)} />
                    </FormGroup>
                    <FormGroup controlId="formControlsName">
                    
                        <ControlLabel style={{color: 'white'}}>URL of picture</ControlLabel>
                        <FormControl type="text" placeholder="URL" onChange={this.handleRecipePic.bind(this)} value={this.state.recipePic}/>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel style={{color: 'white'}}>Ingredients</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Ingredients" onChange={this.handleRecipeIngredients.bind(this)} />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel style={{color: 'white'}}>Instructions</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Instructions" onChange={this.handleRecipeInstructions.bind(this)} />
                    </FormGroup>
                    {/* <button onClick={() =>  this.props.onAddRecipe({
                        recipePic: this.state.recipePic,
                        recipeName: this.state.recipeName,
                        recipeIngredients: this.state.recipeIngredients,
                        recipeInstructions: this.state.recipeInstructions,
                    })}>Save</button> */}

                    <button style={{borderRadius: '20px', backgroundColor: 'white', marginBottom: '25px'}}>Save Recipe</button>

                    <br />
                    
                </form>
                </div>
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
