import React from 'react'
import styles from './style.libraryItem.css'

class LibraryItem extends React.Component{
  constructor(){
    super()
    this.state = {
      libraries: [
        {
          name: "Wallaby.js",
          content: "this is for evaluating inline, its awesome!",
          img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        },
        {
          name: "Redux",
          content: "this is for managing state, its confusing!",
          img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        },
        {
          name: "Moment",
          content: "this is for evaluating time in Javascript, its easy to use!",
          img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        }
      ]
    }
  }
  render() {
    return (
      <div>
      {
        this.state.libraries.map((library) =>
            // CONTAINER
            <div className={styles.container}>
              {/* LEFT/IMAGE*/}
              <div className={styles.imageContainer}>
                  <img alt="containerPic" className={styles.image} src={library.img}/>
              </div>
              {/* RIGHT/NAME + CONTENT */}
              <div className={styles.contentContainer}>
                {/* NAME */}
                <div className={styles.title}>
                  <h1>{library.name}</h1>
                </div>
                {/* CONTENT */}
                <div>
                  <p className={styles.content}>
                    {library.content}
                  </p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default LibraryItem
