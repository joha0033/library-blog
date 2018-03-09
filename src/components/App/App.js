import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';
import styles from './App.css';
import Header from '../shared/header/Header.js'
import Footer from '../shared/footer/Footer.js'
import LibraryList from '../libraryList/libraryList.js'

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
        <Header toggleForm ={this.toggleHidden.bind(this)}/>
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome to JSL</h1>
          <div className={styles.parent}>
            <div className={styles.left}>
                <h2 className={styles.subtitle}> Where we explore JS libraries</h2>
            </div>
          </div>
        </header>
        <LibraryList form={this.state.showForm}/>
        <Footer />
      </div>
    );
  }
}

export default App;
