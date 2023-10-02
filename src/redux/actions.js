import { nanoid } from 'nanoid';

export const addContact = ({ name, number }) => {
  const newContact = {
    id: nanoid(),
    name,
    number,
  };

  return {
    type: 'contacts/addContact',
    payload: newContact,
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setFilter = value => {
  return {
    type: 'contacts/setFilter',
    payload: value,
  };
};
