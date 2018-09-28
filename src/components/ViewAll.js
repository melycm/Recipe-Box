import React, { Component } from 'react';
import NavigationBar from './NavigationBar'

class ViewAll extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <NavigationBar />
                {console.log(this.props.recipeData)}
                {
                    // this.props.recipeList.map(recipeData =>{
                    // return <div ><img src={recipeData.recipiPic} /> <br />
                    // <div>
                    //     {recipeData.recipeName} <br />
                    //     {recipeData.recipeIngredients}
                    //     {recipeData.recipeInstructions}
                    //     {recipeData.recipiPic}
                    //     <button>X</button></div>
                    // </div>
                    // })
             }
            </div>
        );
    }
}


export default ViewAll
