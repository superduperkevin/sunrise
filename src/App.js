import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Header from './components/Header';
import Landing from './components/Landing';
import Direction from './components/Direction';
import Testimonials from './components/Testimonials.js';
import Footer from './components/Footer';

import './styles/App.css';

class App extends Component {
  
  render() {
  return (
        <div className="body">
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/reviews" component={Testimonials} />
            <Route path="/directions" component={Direction} />
            <Footer/>
        </BrowserRouter>
      </div>    
  );
  }
}

export default App;
