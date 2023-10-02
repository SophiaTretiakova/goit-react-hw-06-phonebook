import { Section } from './Section/Section';
// import { nanoid } from 'nanoid';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyles } from './GlobalStyles.styled';
// import { useState, useEffect } from 'react';
// import { createStore } from 'redux';
import { useSelector } from 'react-redux';

export const App = () => {
  // const contacts = useSelector(state => state.contacts);
  const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  return (
    <>
      <Section title="Phone book">
        <PhoneBook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList contacts={savedContacts} />
      </Section>

      <GlobalStyles />
    </>
  );
};
