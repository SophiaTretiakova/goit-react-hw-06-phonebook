// const initialState = {
//   contacts: [],
//   filter: '',
// };
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };

//     case 'contacts/deleteContact':
//       const updatedContacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//       return {
//         ...state,
//         contacts: updatedContacts,
//       };

//     case 'contacts/setFilter':
//       return {
//         ...state,
//         filter: action.payload,
//       };

//     default:
//       return state;
//   }
// };

const contactsInitialState = [];

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];

    case 'contacts/deleteContact':
      const updatedContacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      return [...state, updatedContacts];

    default:
      return state;
  }
};

const filterInitialState = '';

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return action.payload;

    default:
      return state;
  }
};