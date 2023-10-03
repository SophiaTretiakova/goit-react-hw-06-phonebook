// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reduser';
// import { rootReducer } from './reducer';
// import { devToolsEnhancer } from '@redux-devtools/extension';

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

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});