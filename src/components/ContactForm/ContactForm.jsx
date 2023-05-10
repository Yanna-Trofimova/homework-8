import { nanoid } from 'nanoid';
import { useState } from 'react';
// import Notiflix from 'notiflix';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operation';
import { selectContacts } from 'redux/contacts/contacts-selectors';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import css from './ContactForm.module.css';
import toast from 'react-hot-toast';



export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();



  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const nameId = nanoid();
  // const numberId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  
  const handleSubmit = e => {
    e.preventDefault();

      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),) ?
        toast.error(`Ім'я: ${name} вже записане у контактну книгу`) :
        dispatch(addContact({ name, number, id: nanoid() }))&&
        toast.success(`Новий контак додано`)&&
        resetForm();
     
    }


  const resetForm = () => {
    setName('');
    setNumber('');
  };



return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input} type="text" name="name"   value={name}  onChange={handleChange} />

      <input className={css.input}  type="tel" name="number"   value={number}  onChange={handleChange} />

      <button className={css.btn}  type="submit" >
        Add contact 
      </button>
    </form>
  );
};


