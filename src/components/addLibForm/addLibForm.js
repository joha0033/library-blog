import React from 'react'
import styles from './style.addLibForm.css'

class AddLibForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
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

    onClick () {
      // this.setState.formIsDisplayed = !this.state.formIsDisplayed
      console.log(this.state.formIsDisplayed);
    }

    handleInputChange(newPartialInput) {

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
        } //validate email

        if (!input.content) {
            errors.content = 'Content is required';
        }

        if (!input.imgURL) {
            errors.content = 'Image URL is required';
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        };
    }

    // handleAddTodoItem() {
    //   this.state.libraries.push(this.state.textvalue)
    //   this.setState(
    //     this.state
    //   )
    //   this.state
    //   console.log(this.state.value)
    // }

    render() {
      const {input, blurred} = this.state;
      const {errors, isValid} = this.validate();


      return (

        <div className="flex">
          <form
            className={styles.column}
            onSubmit={(e) =>
              { e.preventDefault();
                this.setState({})
                return console.log(this.state.input);
                }}>

            <h2> Add a library! </h2>

            <p>
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
            </p>

            <p>
              <label>
                Content:
                <input
                  className={styles.right}
                  name="content"
                  type="text"
                  value={input.content}
                  onBlur={() => this.handleBlur('content')}
                  onChange={e => this.handleInputChange({content: e.target.value})}/>
              </label>
              <br/>
            </p>
            <p>
              <label>
                Image URL:
                <input
                  className={styles.right}
                  name="imgURL"
                  type="text"
                  value={input.imgURL}
                  onBlur={() => this.handleBlur('imgURL')}
                  onChange={e => this.handleInputChange({imgURL: e.target.value})}/>
              </label>
              <br/>
            </p>
            <p>
                <input className={styles.button} type="submit" value="Submit" disabled={!isValid}/>
            </p>


            <br/>
            {blurred.content && !!errors.content && <span>{errors.content}</span>}
            <br/>
            {blurred.title && !!errors.title && <span>{errors.title}</span>}

          </form>
        </div>
      );
    }
  }

export default AddLibForm
