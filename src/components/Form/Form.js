import React from "react"
import shortid from "shortid"
import { FormStyled } from "./Form.styled"
import { PropTypes } from "prop-types"
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().min(6).max(15).required("Please enter name"),
  number:yup.number().min(100).required("Please enter number")
})
export const INITIAL_STATE = {
  name: '',
  number: ''
}

let showId = shortid.generate()  

//////переробив на формік......

export const FormByFormik = ({ addContact }) => {
  const handleSubmit = (value, { resetForm }) => {
 
     addContact(value)
     resetForm()
  }
  return (<Formik
    initialValues={INITIAL_STATE}
    onSubmit={handleSubmit}
    validationSchema={schema}>
    <FormStyled autoComplete="off">
         <label htmlFor="name">Name</label>
        <Field 
        id={showId}
        type="text"
        name="name"
        placeholder="enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      <ErrorMessage name="name"/>
     <label htmlFor="number">Number</label> 
          <Field
        id={showId}
        type="tel"
        name="number"
        placeholder="enter number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
      <ErrorMessage name="number"/>
        <button type="submit">add contact</button>
  </FormStyled>
</Formik>)


}

FormByFormik.propTypes = {
  initialValues: PropTypes.object,
  addContact:PropTypes.func.isRequired,
  validationSchema:PropTypes.object

}

// export class Forma extends Component {

// state = {
//   name: '',
//   number: ''
//   }
//   showId = shortid.generate()  

//   handleChange = (e) => {
//     const { name, value } = e.currentTarget 
//     this.setState({[name]:value })
  
// }

//   handleSubmit = e => {
//     e.preventDefault(); 
//     this.props.onSubmit({ ...this.state })
//     this.reset()
//   }

//   reset=() =>this.setState({...INITIAL_STATE})
  
//   render() {
   
//     const { name, number } = this.state

//     return (
//       <FormStyled onSubmit={this.handleSubmit}>
//         <label >Name
//         <input 
//         id={this.showId}
//         onChange={this.handleChange}
//         type="text"
//         name="name"
//         value={name}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         /></label>
//       <label>Number 
//           <input
//         onChange={this.handleChange}
//         id={this.showId}
//         type="tel"
//         name="number"
//         value={number}
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//         /></label>
//         <button type="submit">add contact</button>

//       </FormStyled>)
//   }
// }

