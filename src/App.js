import React from 'react';
import AddRecipe from './components/AddRecipe';
import {connect} from 'react-redux';
import NavigationBar from './components/NavigationBar'
import addRecipe from './actions/addRecipe'
import FooterBar from './components/FooterBar'
import './App.css'
import apiData from './actions/apiData'
import deleteRecipe from './actions/deleteRecipe'

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="imagefront">
        <NavigationBar />
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <a style={{fontSize: '30px', color: 'white', marginRight: '15px', marginBottom: '10px'}} href="www.github.com/melycm" target="_blank" class="fa fa-github"></a><br />
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '15px', marginBottom: '10px'}}>
            <a style={{fontSize: '30px', float: 'right', color: 'white'}} href="www.github.com/melycm" target="_blank" class="fa fa-linkedin"></a><br />
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '15px'}}>
            {/* <div style={{float: 'right', marginTop: '30px', marginLeft: '128px'}}> */}
            <a style={{writingMode: 'vertical-rl', color: 'white', fontSize: '20px'}} href="www.melissacantu.com" target="_blank">www.melissacantu.com</a>
        </div>
        {/* <div className="container h-100"> */}
        {/* <div className="row h-100 justify-content-center align-items-center"> */}
          {/* <div className="mainBox">
              <h1 className="quote">"No one is born a great cook, one learns by doing."</h1>
          </div> */}
          {/* <div style={{display: 'flex', justifyContent: 'flex-end', width: '0' }}>
            <a style={{fontSize: '30px', color: 'white'}} href="www.github.com/melycm" target="_blank" class="fa fa-github"></a><br />
            <a style={{fontSize: '30px', float: 'right', color: 'white'}} href="www.github.com/melycm" target="_blank" class="fa fa-linkedin"></a><br />
            <div style={{float: 'right', marginTop: '30px', marginLeft: '128px'}}>
            <a style={{writingMode: 'vertical-rl', color: 'white', fontSize: '20px'}} href="www.melissacantu.com" target="_blank">www.melissacantu.com</a>
          </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
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
    onFetch: (response) => dispatch(apiData(response)),
    onDeleteRecipe: (recipeData) => dispatch(deleteRecipe(recipeData))
  }
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connectedComponent;

