import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';
import styles from './App.css';
import Header from '../shared/header/Header.js'
import Footer from '../shared/footer/Footer.js'
import LibraryList from '../libraryList/libraryList.js'
import AddLibForm from '../addLibForm/addLibForm.js'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />

        <header className={styles.header}>
          <h1 className={styles.title}>Welcome to JSL</h1>
          <h2 className={styles.subtitle}> Where we explore JS libraries</h2>
        </header>
        <AddLibForm />
        <LibraryList />
        <Footer />
      </div>
    );
  }
}

export default App;
