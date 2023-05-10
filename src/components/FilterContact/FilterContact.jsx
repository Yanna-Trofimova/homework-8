import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contacts-selectors';
import { updateFilter } from 'redux/filter/filter-slice';
import css from './FilterContact.module.css';

export const FilterContact = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

 


  return (
    <div className={css.div}>
   
      
       <label >
            Find contacts by name
            <input className={css.input} type="text" name="filter" value={filter}
            onChange={event => dispatch(updateFilter(event.target.value))}/>
        </label>
    </div>
  );
};

