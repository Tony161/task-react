import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import MainBlock from './mainblock';
import LeftBlock from './leftblock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="App">
        <Header />
        <div className="Container">
          <LeftBlock />
          <MainBlock />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
