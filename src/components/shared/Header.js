import React from 'react'
import './style.Header.css'
import logo from '../../assets/booksSVG.svg';
import profile from '../../assets/profile.svg';

class Header extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render() {

    return(
      <nav>
        <div className="capsule">
          <img src={logo} className="Nav-logo" alt="logo"/>
           <ul id="navLinks">
             <li>
               <a href="#home">Home</a>
             </li>
             <li>
               <a href="#about">About</a>
             </li>
             <li>
               <a href="#contact">Contact</a>
             </li>
           </ul>
             <img src={profile} className="Nav-profile" alt="logo"/>
        </div>
      </nav>
    )
  }
}

export default Header
