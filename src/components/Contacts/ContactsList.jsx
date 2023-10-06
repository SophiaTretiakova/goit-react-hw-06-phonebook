import { ContactsListItem } from './ContactsListItem';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));

    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilterContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
    return filteredContacts;
  };

  const filteredContacts = getFilterContacts();
  return (
    <>
      <ul>
        {filteredContacts.length > 0 &&
          filteredContacts.map(contact => {
            return (
              <ContactsListItem
                key={contact.id}
                contact={contact}
                onDelete={() => handleDeleteContact(contact.id)}
              />
            );
          })}
      </ul>
      {filteredContacts.length === 0 && <p>No contacts are available</p>}
    </>
  );
};

// ContactsList.propTypes = {
//   contacts: propTypes.arrayOf(
//     propTypes.shape({
//       id: propTypes.string.isRequired,
//       name: propTypes.string.isRequired,
//       number: propTypes.string.isRequired,
//     })
//   ).isRequired,
// };
