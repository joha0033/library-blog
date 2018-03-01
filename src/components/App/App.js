import React, { Component } from 'react';
// import logo from '../../logo.svg';
import '../../App.css';
import Header from '../shared/header/Header.js'
import Footer from '../shared/footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <h1 className="App-title">Welcome to JSL</h1>
          <h2 className="App-subtitle"> Where we explore JS libraries</h2>
        </header>
        <p className="App-intro">
          Well get started soon enough...
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
