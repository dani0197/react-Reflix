import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Landing from './components/Landing'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <div className="App">
        <span className="main-links">
          <Link claasName="Link" to="/">Home</Link>
          <Link claasName="Link" id="reflix-logo" to="/catalog">Reflix</Link>
          <Link claasName="Link" to="/catalog">Catalog</Link>
        </span>
        <Route exact path="/" component={Landing} />
        </div>
      </Router>
    );
  }
}

export default App;
