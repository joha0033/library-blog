import React from 'react'
import styles from './style.libraryItem.css'

class LibraryItem extends React.Component{
  render() {
    return (
      <div className={styles.container}>

        <div className={styles.imageContainer}>

          <img alt="containerPic" className={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"/>

        </div>

        <div className={styles.contentContainer}>

          <div className={styles.title}>
            <h1>The first LIB</h1>
          </div>

          <div >
            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>

        </div>

      </div>

    )
  }

}

export default LibraryItem
