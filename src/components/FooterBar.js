import React from 'react';
import { footer} from 'react-bootstrap';
import '../App.css'

class FooterBar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <footer className="navbar-fixed-bottom">
					<div className="container">
						<div className="row">
							<p>© 2018 Copyright: Melissa Cantu</p>
						</div>
					</div>
				</footer>
            </div>
        );
    }
}



export default FooterBar;
