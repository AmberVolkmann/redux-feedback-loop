import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Feels from '../Feels/Feels';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success'



class App extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
        <Route exact path ="/">
          <Feels />
        </Route>
        <Route exact path ="/understanding">
          <Understanding />
        </Route>
        <Route exact path ="/support">
          <Support />
        </Route>
        <Route exact path ="/comments">
          <Comments />
        </Route>
        <Route exact path ="/review">
          <Review />
        </Route>
        <Route exact path ="/success">
          <Success />
        </Route>
        </Router>
      </div>
      
    );
  }
}

export default connect()(App);