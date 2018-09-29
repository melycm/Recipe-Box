import React from 'react';
import AddRecipe from './components/AddRecipe';
import {connect} from 'react-redux';
import NavigationBar from './components/NavigationBar'
import addRecipe from './actions/addRecipe'
import FooterBar from './components/FooterBar'
import './App.css'
import { SocialIcon } from 'react-social-icons';


class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="imagefront">
        <NavigationBar />
        <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          {/* <div className="mainBox">
              <h1 className="quote">"No one is born a great cook, one learns by doing."</h1>
          </div> */}
          <SocialIcon style={{float: 'right', color: 'black'}} network="github" url="#" />
        </div>
      </div>
        {/* <FooterBar /> */}
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

