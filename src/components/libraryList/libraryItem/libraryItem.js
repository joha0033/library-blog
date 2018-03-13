import React from 'react'
import styles from './style.libraryItem.css'

class LibraryItem extends React.Component{

  render() {
    return (
      <div>
      {
        // PASSING STATE FROM PARENT/LIBRARY-LIST
        this.props.items.map((library, i) =>
            // CONTAINER
            <div className={styles.container} key={i}>
              {/* LEFT/IMAGE*/}
              <div className={styles.imageContainer}>
                  <img key={i} alt="containerPic" className={styles.image} src={library.imgURL}/>
              </div>
              {/* RIGHT/NAME + CONTENT */}
              <div key={i} className={styles.contentContainer}>
                {/* NAME */}
                <div className={styles.title}>
                  <h1>{library.title}</h1>
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
