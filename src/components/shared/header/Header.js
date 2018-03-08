import React from 'react'
import styles from './style.Header.css'
import logo from '../../../assets/booksSVG.svg';
import profile from '../../../assets/profile.svg';

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showForm: false
    }
  }

  render() {
    // console.log(this.state.showForm);
    return(
      <nav className={styles.nav}>
        <div className={styles.capsule}>
          <img src={logo} className={styles.navLogo} alt="logo"/>
           <ul className={styles.navUL}>
             <li className={styles.navLinks}>
               <a className={styles.navA} href="#home">Home</a>
             </li>
             <li className={styles.navLinks}>
               <a className={styles.navA} href="#about" onClick={this.someFn}>Add Lib</a>
             </li>
             <li className={styles.navLinks}>
               <a className={styles.navA} href="#contact">Contact</a>
             </li>
           </ul>
             <img src={profile} className={styles.profile} alt="logo"/>
        </div>
      </nav>
    )
  }
}

export default Header
