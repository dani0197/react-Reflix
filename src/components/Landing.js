import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/landing.css';

class Landing extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <span><h3 id="landing-header">Whos watching?</h3></span>
                <div className="users-container">
                    <Link  to="/catalog"><div className="user" id="Mona">Mona</div></Link>
                    <Link  to="/catalog"><div className="user" id="Jasmyne">Jasmyne</div></Link>
                    <Link  to="/catalog"><div className="user" id="Aura">Aura</div></Link>
                    <Link to="/catalog"><div className="user" id="Tina">Tina</div></Link>
                </div>
            </div>
        )
    }
}

export default Landing;