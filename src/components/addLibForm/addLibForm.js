import React from 'react'
// import styles from './style.addLibForm.css'

class AddLibForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            input: {
                title: "",
                content: ""
            },
            blurred: {
                title: false,
                content: false
            }
        };
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

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        };
    }
    //
    // handleChange(event) {
    //   this.setState({content: event.target.value});
    // }
    //
    // handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.name);
    //   event.preventDefault();
    // }

    render() {
      const {input, blurred} = this.state;
      const {errors, isValid} = this.validate();
      return (
        <form onSubmit={(e) => { e.preventDefault();return console.log(this.state.input);}}>
          <label>
            Name:
            <input
              name="title"
              type="text"
              value={input.title}
              onBlur={() => this.handleBlur('title')}
              onChange={e => this.handleInputChange({title: e.target.value})}/>
              {blurred.title && !!errors.title && <span>{errors.title}</span>}
          </label>
          <label>
            Content:
            <input
              name="content"
              type="text"
              value={input.content}
              onBlur={() => this.handleBlur('content')}
              onChange={e => this.handleInputChange({content: e.target.value})}/>
              {blurred.content && !!errors.content && <span>{errors.content}</span>}
          </label>
          <input type="submit" value="Submit" disabled={!isValid}/>
        </form>
      );
    }
  }

export default AddLibForm
