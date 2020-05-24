import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Header from './components/Header';
import Landing from './components/Landing';

import Footer from './components/Footer';

import './styles/App.css';

class App extends Component {
  
  render() {
  return (
        <div className="main">
        <BrowserRouter>
          {/* <div className="main"> */}
            <Header />
            <Route exact path="/" component={Landing} />
            {/* <Route exact path="/about" component={About} /> */}
            <Footer/>
          {/* </div> */}
        </BrowserRouter>
      </div>    
  );
  }
}

export default App;
