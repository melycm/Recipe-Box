import React from 'react';
import AddRecipe from './components/AddRecipe';
import {connect} from 'react-redux';
import NavigationBar from './components/NavigationBar'
import addRecipe from './actions/addRecipe'
import FooterBar from './components/FooterBar'
import './App.css'
import apiData from './actions/apiData'

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
          <a style={{fontSize: '50px', float: 'right', color: 'rgba(110, 110, 110, 0.5)'}} href="#" class="fa fa-github"></a>
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
    onFetch: (response) => dispatch(apiData(response))
  }
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connectedComponent;

