import { Section } from './Section/Section';
// import { nanoid } from 'nanoid';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyles } from './GlobalStyles.styled';
import { useEffect } from 'react';
// import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';
// addContact

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  // const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  const dispatch = useDispatch();

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    savedContacts.forEach(contact => {
      dispatch(addContact(contact));
    });
  }, [dispatch]);

  return (
    <>
      <Section title="Phone book">
        <PhoneBook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList contacts={contacts} />
      </Section>

      <GlobalStyles />
    </>
  );
};
