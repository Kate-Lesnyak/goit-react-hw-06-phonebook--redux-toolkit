import { Formik } from 'formik';
// import { Notify } from 'notiflix';

// import {  useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';
// import { getContacts } from 'redux/selectors';

// import * as Yup from 'yup';
// import 'yup-phone';

import {
  StyledForm,
  StyledFormField,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledErrorMessage,
} from './ContactForm.styled';

// const formSchema = Yup.object().shape({
//   name: Yup.string()
//     // .min(3, 'Too Short!')
//     // .max(25, 'Too Long!')
//     .matches(
//       /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//       "Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
//     )
//     .required('Name is a required field')
//     .trim(),

//   number: Yup.string()
//     // .min(5, 'Too Short!')
//     .matches(
//       /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
//       'Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//     )
//     .required('Number is a required field')
//     .trim(),

//   // number: Yup.string().phone().required(),
// });

export const ContactForm = () => {
  // const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // const normalizedName = contacts.name.toLowerCase();
  // if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
  //   return Notify.info(`${contacts.name} is already in contacts!`);
  // }

  // const handleSubmit = (values, { resetForm }) => {
  //   dispatch(addContact(values));
  //   resetForm();
  // };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      // validationSchema={formSchema}
      // onSubmit={handleSubmit}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact({ ...values }));
        resetForm();
      }}
    >
      <StyledForm>
        <StyledFormField>
          <StyledLabel>Name</StyledLabel>
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <StyledErrorMessage name="name" component="div" />
        </StyledFormField>

        <StyledFormField>
          <StyledLabel>Number</StyledLabel>
          <StyledInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <StyledErrorMessage name="number" component="div" />
        </StyledFormField>
        <StyledButton type="submit">Add contacts</StyledButton>
      </StyledForm>
    </Formik>
  );
};
