import React from 'react'
import './style.Footer.css'

class Header extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render() {
    return(
      <footer className="footer">
        <div>
          <ul>
            <li>this</li>
            <li>that</li>
          </ul>
          <p>Made with some skills by AustinRJ</p>
        </div>
      </footer>
    )
  }
}

export default Header
