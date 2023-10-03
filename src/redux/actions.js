import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

// export const addContact = ({ name, number }) => {
//   const newContact = {
//     id: nanoid(),
//     name,
//     number,
//   };

//   return {
//     type: 'contacts/addContact',
//     payload: newContact,
//   };
// };

export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    return {
      type: 'contacts/addContact',
      payload: newContact,
    };
  }
);

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };

export const deleteContact = createAction('contacts/addContact', contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
});

// export const setFilter = value => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: value,
//   };
// };

export const setFilter = createAction('filter/setFilter', value => {
  return {
    type: 'contacts/deleteContact',
    payload: value,
  };
});
