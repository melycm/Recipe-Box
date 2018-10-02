import React from 'react';
import {ButtonToolbar, Button, Modal, ControlLabel, FormGroup , FormControl} from 'react-bootstrap';
import '../App.css'
import addRecipe from '../actions/addRecipe'
import {connect} from 'react-redux';

class AddSecondRecipe extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    
        this.state = {
          show: false,
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
      // this.history.push('/searchRecipe')
  }
      
    handleShow() {
        this.setState({ show: true });
    }
    
    handleHide() {
        this.setState({ show: false });
    }

    render() {
      let recipeList = this.props.recipeList.map(recipe =>{

        return <p key={recipe.recipeName}>{recipe.recipeName} {recipe.recipeIngredients} {recipe.recipeInstructions} {recipe.recipePic}</p>
    })
        return (
          <ButtonToolbar>
            <Button style={{float: 'right', bottom: '0', borderRadius: '100px'}} bsStyle="primary" onClick={this.handleShow}>
              Write Recipe
            </Button>
    
            <Modal
              {...this.props}
              show={this.state.show}
              onHide={this.handleHide}
              dialogClassName="custom-modal"
            >
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <h4 style={{textAlign: 'center'}}>Write the recipe</h4>
                <div>
                <form style={{backgroundColor: 'white'}} onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="formControlsName">
                        <ControlLabel>Name of Recipe</ControlLabel>
                        <FormControl style={{width: '100%'}} type="text" placeholder="Name" onChange={this.handleRecipeName.bind(this)} />
                    </FormGroup>
                    <FormGroup controlId="formControlsName">
                    
                        <ControlLabel>URL of picture</ControlLabel>
                        <FormControl style={{width: '100%'}} type="text" placeholder="URL" onChange={this.handleRecipePic.bind(this)} value={this.state.recipePic}/>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Ingredients</ControlLabel>
                        <FormControl style={{width: '100%'}} componentClass="textarea" placeholder="Ingredients" onChange={this.handleRecipeIngredients.bind(this)} />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Instructions</ControlLabel>
                        <FormControl style={{width: '100%'}} componentClass="textarea" placeholder="Instructions" onChange={this.handleRecipeInstructions.bind(this)} />
                    </FormGroup>
                    {/* <button onClick={() =>  this.props.onAddRecipe({
                        recipePic: this.state.recipePic,
                        recipeName: this.state.recipeName,
                        recipeIngredients: this.state.recipeIngredients,
                        recipeInstructions: this.state.recipeInstructions,
                    })}>Save</button> */}

                    <button style={{textAlign: 'center', borderRadius: '20px'}}>Submit</button>


                    
                </form>
                </div>
                </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
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

export default connect(mapStateToProps,mapDispatchToProps)(AddSecondRecipe);