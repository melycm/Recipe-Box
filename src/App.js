import React from 'react';
import AddRecipe from './components/AddRecipe';
import {connect} from 'react-redux';
import NavigationBar from './components/NavigationBar'
import addRecipe from './actions/addRecipe'


class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
}

function mapStateToProps(state){

  return{
    recipeList: state.recipeList
  }
}

function mapDispatchToProps(dispatch){

  return{
    onAddRecipe: (recipeData) => dispatch(addRecipe(recipeData)),
  }
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connectedComponent;

