import React from 'react';
import { Navbar, NavItem, Nav} from 'react-bootstrap';
import '../App.css'
import {Link} from 'react-router-dom';



class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Recipes
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                        <NavItem eventKey={1}>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem eventKey={1}>
                            <Link to="/AddRecipe">Add Recipe</Link>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Link to="/ViewAll">View All</Link>
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            </div>
        );
    }
}


export default NavigationBar
