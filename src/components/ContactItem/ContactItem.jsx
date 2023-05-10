import React from 'react';
// import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operation';

import toast from 'react-hot-toast';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = ()=> {
    dispatch(deleteContact(id))
    toast.success('Контакт видалено')
  }
  
  return (
    <>
      <li>
        <div className={css.div}>   <p className="TodoList__text"><span className={css.contactName} >{name}</span> :  {number}</p>
          <button
            className={css.btn}
            type="button"
            onClick={onDelete}
            
          >
            Видалити
          </button>
          </div>
        </li>
    </>
  );
};

