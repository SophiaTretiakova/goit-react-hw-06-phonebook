import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
const initialState = {
  contacts: [],
  filters: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'contacts/deleteContact':
      const updatedContacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      return {
        ...state,
        contacts: updatedContacts,
      };

    default:
      return state;
  }
};
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
