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
                <Navbar style={{backgroundColor: 'rgba(110, 110, 110, 0.5)', borderBottom: '#737373 1px solid', boxShadow: '0 7px 5px -6px #999', borderRadius: '0px', borderTop: 'none', borderLeft: 'none', borderRight: 'none'}} >
                    <Navbar.Header>
                        <Navbar.Brand>
                            Recipes
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                        <NavItem eventKey={1}>
                            <Link to="/" style={{color: '#001f3f'}}><b>Home</b></Link>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Link style={{color: '#001f3f'}} to="/AddRecipe"><b>Add Recipe</b></Link>
                        </NavItem>
                        <NavItem eventKey={3}>
                            <Link style={{color: '#001f3f'}} to="/searchRecipe"><b>Search Recipe</b></Link>
                        </NavItem>
                        <NavItem eventKey={4}>
                            <Link style={{color: '#001f3f'}} to="/ViewAll"><b>View All</b></Link>
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            </div>
        );
    }
}


export default NavigationBar
