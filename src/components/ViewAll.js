import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import {connect} from 'react-redux';
import addRecipe from '../actions/addRecipe'
import {Grid, Button, Row, Col, Thumbnail, Modal, ButtonToolbar} from 'react-bootstrap';
import deleteRecipe from '../actions/deleteRecipe'


class ViewAll extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.state = {
            show: false,
        }
    }

    handleShow() {
        this.setState({ show: true });
    }
    
    handleHide() {
        this.setState({ show: false });
    }

    render() {
        return (
            <div>
                <NavigationBar />
                
                {/* {
                    this.props.recipeList.map(recipeData =>{
                    return <div>
                        <img src={recipeData.recipePic} width="30%"/> <br />
                        <b>{recipeData.recipeName}</b> <br />
                        {recipeData.recipeIngredients}<br />
                        {recipeData.recipeInstructions}<br />
                    </div>
                })
            } */}

                {
                    this.props.recipeList.map(recipeData => {
                        return <div>
                <Grid>
                <Row>
                    
                    <Col xs={6} md={4}>
                    <Thumbnail src={recipeData.recipePic} alt="242x200">
                        <h3>{recipeData.recipeName}</h3>
                        <ButtonToolbar>
                        <Button bsStyle="primary" onClick={this.handleShow}>Show Recipe</Button>
                        <Modal {...this.props} show={this.state.show} onHide={this.handleHide} dialogClassName="custom-modal" >
                        <Modal.Body>
                        <img src={recipeData.recipePic} width="30%"/> <br />
                        <b>{recipeData.recipeName}</b> <br />
                        {recipeData.recipeIngredients}<br />
                        {recipeData.recipeInstructions}<br />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="default" onClick={this.handleHide}>Close</Button>
                        </Modal.Footer>
                        </Modal>
                        </ButtonToolbar>
                            <Button bsStyle="default" onClick={() => {this.props.onDeleteRecipe(recipeData)}}>Delete Recipe</Button>
                    </Thumbnail>
                    </Col>
                    
                    {/* <Col xs={6} md={4}>
                    <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>
                        <Button bsStyle="primary">Button</Button>
                        <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                    <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>
                        <Button bsStyle="primary">Button</Button>
                        <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                    </Col> */}
                </Row>
                </Grid>
                </div>
                })
                }
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
      onDeleteRecipe: (recipeData) => dispatch(deleteRecipe(recipeData))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ViewAll);
