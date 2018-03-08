import React from 'react'
import styles from './style.libraryList.css'
import LibraryItem from './libraryItem/libraryItem.js'

class LibraryList extends React.Component{
  constructor(){
    super()
    this.state = {}
  }
  render() {
    return (
      <div className={styles.list}>
        <LibraryItem />
      </div>
    )
  }
}

export default LibraryList
