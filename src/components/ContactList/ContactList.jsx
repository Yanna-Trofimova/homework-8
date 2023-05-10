import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectFiltredContacts } from 'redux/contacts/contacts-selectors';


export const ContactList = () => {
  const FiltredContacts = useSelector(selectFiltredContacts);

  return (
    <ul className={css.form}>
      {FiltredContacts.map(({ name, number, id }) => (
        // <li className={css.list} key={id}>
          <ContactItem key={id} name={name} number={number} id={id}/>
        // </li>
      ))}
    </ul>
  );
};


ContactList.propType = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};