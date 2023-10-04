import { useDispatch } from 'react-redux';
import { ContactsListItem } from './ContactsListItem';
import propTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));

    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };
  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            onDelete={() => handleDeleteContact(contact.id)}
          />
        ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ).isRequired,
};
