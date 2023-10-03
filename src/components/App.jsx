import { Section } from './Section/Section';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyles } from './GlobalStyles.styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';
import { setFilter } from 'redux/actions';


export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    savedContacts.forEach(contact => {
      dispatch(addContact(contact));
    });
  }, [dispatch]);

  const getFilterContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
    return filteredContacts;
  };

  const handleFilterChange = event => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };

  const filteredContacts = getFilterContacts();

  return (
    <>
      <Section title="Phone book">
        <PhoneBook />
      </Section>
      <Section title="Contacts">
        <Filter handleChange={handleFilterChange} />
        <ContactsList contacts={filteredContacts} />
        {filteredContacts.length === 0 && <p>No contacts are available</p>}
      </Section>

      <GlobalStyles />
    </>
  );
};
