import React from "react"
import shortid from "shortid"
import { FormStyled } from "./Form.styled"
import { PropTypes } from "prop-types"
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'


const schema = yup.object().shape({
  name: yup.string()
   
    .max(15)
    .required("Please enter name")
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Must be only letters"),

  number: yup.string()
    .required('Please enter number')
    .min(6)
    .max(15)
    .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Must be only digits")


})

export const INITIAL_STATE = {
  name: '',
  number: ''
}
let showId = shortid.generate()  

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
        />
      <ErrorMessage name="name"/>
     <label htmlFor="number">Number</label> 
          <Field
        id={showId}
        type="tel"
        name="number"
        placeholder="enter number"
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
