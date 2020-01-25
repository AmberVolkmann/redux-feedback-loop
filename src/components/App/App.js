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
          <Route exact path ="/" component={Feels}/>
          <Route exact path ="/understanding" component={Understanding}/>
          <Route exact path ="/support" component={Support}/>
          <Route exact path ="/comments" component={Comments}/>
          <Route exact path ="/review" component={Review}/>
          <Route exact path ="/success" component={Success}/>
        </Router>
      </div>
      
    );
  }
}

export default connect()(App);