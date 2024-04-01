
import css from "./ContactForm.module.css"
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
export const ContactForm = ({onAddContact}) => {
    const contactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
    })
    const initialValues = {
  name: "",
  number: ""
};
    const nameField = useId()
    const numberField = useId()
    const handleSubmit = (values, actions) => {
        const id = nanoid()
        const contactWithId = { ...values, id}
        onAddContact(contactWithId) 
        actions.resetForm()
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={contactSchema}
        >
    <Form className={css.container}>
                <label htmlFor={nameField} className={css.label}>Name</label>
                <Field type="text" name='name' id={nameField} className={css.input} ></Field>
                <ErrorMessage name="name" as="span" /> 
                <label htmlFor={numberField} className={css.label}>Number</label>
                <Field type="text" name='number' id={numberField} className={css.input}></Field>
                <ErrorMessage name="number" as="span" /> 
                <button>Add contact</button>
    </Form>       
  </Formik>
    )
}