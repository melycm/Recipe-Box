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
                <Navbar style={{fontSize: '15px', backgroundColor: 'transparent', borderRadius: '0px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: 'none', textShadow: '2px 2px black', display: 'flex', justifyContent: 'center', marginLeft: '20%'}} >
                    <Navbar.Header>
                        <Navbar.Brand>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                        <NavItem style={{marginTop: '2%'}} eventKey={1}>
                            <Link to="/" style={{color: 'white'}}><b>HOME</b></Link>
                        </NavItem>
                        <NavItem style={{marginTop: '2%'}} eventKey={2}>
                            <Link style={{color: 'white'}} to="/AddRecipe"><b>ADD RECIPE</b></Link>
                        </NavItem>
                        <NavItem>
                            <img src="http://i65.tinypic.com/wiovat.png" width="240px" />
                        </NavItem>
                        <NavItem style={{marginTop: '2%'}} eventKey={3}>
                            <Link style={{color: 'white'}} to="/searchRecipe"><b>SEARCH RECIPE</b></Link>
                        </NavItem>
                        <NavItem style={{marginTop: '2%'}} eventKey={4}>
                            <Link style={{color: 'white'}} to="/ViewAll"><b>VIEW ALL</b></Link>
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            </div>
        );
    }
}


export default NavigationBar
