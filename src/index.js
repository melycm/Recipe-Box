import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AddRecipe from './components/AddRecipe';
import ViewAll from './components/ViewAll';
import { createStore } from "redux";
import { Provider } from "react-redux";
import recipeReducer from './reducers/recipeReducer'
import searchRecipe from './components/searchRecipe';

var store = createStore(recipeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>  
            <switch>
                <Route exact path="/" component={App} />
                <Route exact path="/AddRecipe" component={AddRecipe} />
                <Route exact path="/searchRecipe" component={searchRecipe} />
                <Route exact path="/ViewAll" component={ViewAll} />
            </switch>
        </BrowserRouter> 
    </Provider>, document.getElementById('root'));
registerServiceWorker();
