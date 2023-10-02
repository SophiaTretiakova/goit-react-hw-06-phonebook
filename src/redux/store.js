import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Barry Simpson', number: '477-40-03' },
    { id: 'id-3', name: 'Carol Simpson', number: '480-19-11' },
  ],
  filters: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    // case 'contacts/deleteContact':
    //   return {
    //     ...state,

    //   };

    default:
      return state;
  }
};
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
