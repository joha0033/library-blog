import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';
import styles from './App.css';
import Header from '../shared/header/Header.js'
import Footer from '../shared/footer/Footer.js'
import LibraryList from '../libraryList/libraryList.js'
import AddLibForm from '../addLibForm/addLibForm.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showForm: false
    }
  }

  toggleHidden () {
    this.setState({
      showForm: !this.state.showForm
    })
  }


  render() {

    return (
      <div className={styles.App}>
        <Header/>
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome to JSL</h1>
          <div className={styles.parent}>
            <div className={styles.left}>
                <h2 className={styles.subtitle}> Where we explore JS libraries</h2>
                <button className={styles.addButton}onClick={this.toggleHidden.bind(this)}>
                  Add Library
                </button>
            </div>

          </div>

        </header>

        { this.state.showForm ? <AddLibForm/> : null }
        <LibraryList />
        <Footer />
      </div>
    );
  }
}

export default App;
