import React from 'react'
import styles from './style.Footer.css'

class Header extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render() {
    return(
      <footer className={styles.footer}>
        <div>
          <p>Made with some skills by AustinRJ</p>
        </div>
      </footer>
    )
  }
}

export default Header
