import React, { Component } from "react"
import shortid from "shortid"
import { FormStyled } from "./Form.styled"
import { PropTypes } from "prop-types"

export const INITIAL_STATE = {
  name: '',
  number: ''
}

export class Form extends Component {

state = {
  name: '',
  number: ''
  }
  showId = shortid.generate()  

  handleChange = (e) => {
    const { name, value } = e.currentTarget 
    this.setState({[name]:value })
  
}

  handleSubmit = e => {
    e.preventDefault(); 
    this.props.onSubmit({ ...this.state })
    this.reset()
  }

  reset=() =>this.setState({...INITIAL_STATE})
  
  render() {
   
    const { name, number } = this.state

    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <label >Name
        <input 
        id={this.showId}
        onChange={this.handleChange}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        /></label>
      <label>Number 
          <input
        onChange={this.handleChange}
        id={this.showId}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        /></label>
        <button type="submit">add contact</button>

      </FormStyled>)
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,

}