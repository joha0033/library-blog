import React from 'react'
import styles from './style.libraryList.css'
import LibraryItem from './libraryItem/libraryItem.js'

class LibraryList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      libraries: [
        {
          title: "Wallaby.js",
          content: "Lorem ipsum dolor amet sartorial snackwave celiac thundercats, retro plaid marfa tumeric small batch pok pok health goth microdosing cardigan kitsch. Blog occupy blue bottle, put a bird on it VHS seitan live-edge small batch cornhole. Try-hard scenester kombucha schlitz seitan pop-up tumblr sustainable sartorial trust fund master cleanse YOLO four loko organic williamsburg. Offal ugh coloring book kinfolk man braid.",
          imgURL: "https://avatars0.githubusercontent.com/u/9921462?s=200&v=4"
        },
        {
          title: "Redux",
          content: "Lorem ipsum dolor amet sartorial snackwave celiac thundercats, retro plaid marfa tumeric small batch pok pok health goth microdosing cardigan kitsch. Blog occupy blue bottle, put a bird on it VHS seitan live-edge small batch cornhole. Try-hard scenester kombucha schlitz seitan pop-up tumblr sustainable sartorial trust fund master cleanse YOLO four loko organic williamsburg.",
          imgURL: "https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L5K1I1WsuQMZ8ecEuWg%2Favatar.png?generation=1518623866348435&alt=media"
        },
        {
          title: "Moment",
          content: "Retro plaid marfa tumeric small batch pok pok health goth microdosing cardigan kitsch. Blog occupy blue bottle, put a bird on it VHS seitan live-edge small batch cornhole. Try-hard scenester kombucha schlitz seitan pop-up tumblr sustainable sartorial trust fund master cleanse YOLO four loko organic williamsburg. Offal ugh coloring book kinfolk man braid.",
          imgURL: "https://www.sydjs.com/images/showbag/moment.jpg"
        }
      ],
      input: {
          title: "",
          content: "",
          imgURL: ""
      },
      blurred: {
          title: false,
          content: false,
          imgURL: ""
      },
      formIsDisplayed: this.props.toggle
  };
}


  handleInputChange(newPartialInput) {
    console.log(newPartialInput);
    this.setState(state => ({
      ...state,
      input: {
        ...state.input,
        ...newPartialInput
      }
    }))

  }

  handleBlur(fieldName) {
  this.setState(state => ({
      ...state,
      blurred: {
          ...state.blurred,
          [fieldName]: true
        }
    }))
  }

  validate() {
      const errors = {};
      const {input} = this.state;

      if (!input.title) {
          errors.title = 'Title is required';
      }
      //Limit number of character also
      if (!input.content) {
          errors.content = 'Content is required';
      }
      //add regex for URL
      if (!input.imgURL) {
          errors.imgURL = 'Image URL is required';
      }
      return {
          errors,
          isValid: Object.keys(errors).length === 0
      };
  }

  toggleHidden () {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {

    const {input, blurred} = this.state;
    const {errors, isValid} = this.validate();

    return (
        <div className={styles.list}>
          {/* TEST IF CLICK WORKS FOR TERNARY STATEMENT / TOGGLES FORM*/}
          { this.props.form ? <div className="flex">
            <form
              className={styles.column}
              onSubmit={(e) =>
                { e.preventDefault();
                  this.setState({})
                  return this.state.libraries.push(this.state.input)
                  }}>

              <h2> Add a library! </h2>

                <label>
                  Name:
                  <input
                    className={styles.right}
                    name="title"
                    type="text"
                    value={input.title}
                    onBlur={() => this.handleBlur('title')}
                    onChange={e => this.handleInputChange({title: e.target.value})}/>
                </label>
                <br/>

                <label>
                  Content:
                  <input //text area? I would like about 140 chars or less...
                    className={styles.right}
                    name="content"
                    type="text"
                    value={input.content}
                    onBlur={() => this.handleBlur('content')}
                    onChange={e => this.handleInputChange({content: e.target.value})}/>
                </label>
                <br/>


                <label>
                  Image URL:
                  <input
                    className={styles.right}
                    name="imgURL"
                    type="text"
                    value={input.imgURL}
                    onBlur={() => this.handleBlur('imgURL')}
                    onChange={e => this.handleInputChange({imgURL: e.target.value})}
                  />

                </label>
                <br/>


                  <input touchend="submit" className={styles.button} type="submit" value="Submit" disabled={!isValid}/>


              {/* CSS THESE TO BE INLINE WITH INPUTS */}
              <br/>
              {blurred.content && !!errors.content && <span>{errors.content}</span>}

              <br/>
              {blurred.title && !!errors.title && <span>{errors.title}</span>}
              <br/>
              {blurred.imgURL && !!errors.imgURL && <span>{errors.imgURL}</span>}

            </form>
          </div> : null }
          <LibraryItem items={this.state.libraries}/>
        </div>
    )
  }
}

export default LibraryList
