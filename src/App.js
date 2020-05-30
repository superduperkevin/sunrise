import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Header from './components/Header';
import Landing from './components/Landing';
// import About from './components/About';
import Testimonials from './components/Testimonials.js';
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
            {/* <Route path="/about" component={About} /> */}
            <Route path="/testimonials" component={Testimonials} />
            <Footer/>
          {/* </div> */}
        </BrowserRouter>
      </div>    
  );
  }
}

export default App;
