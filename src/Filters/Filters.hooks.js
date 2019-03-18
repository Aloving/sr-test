import { useReducer } from 'react';

import { TYPE, CONTAINING_OPERATION, EQUAL_OPERATION } from '../constants';

const DEFAULT_TEXT_OPERATION = CONTAINING_OPERATION;
const DEFAULT_NUMBER_OPERATION = EQUAL_OPERATION;

const ADD_FILTER = 'ADD_FILTER';

const getNewFilter = () => ({
  type: TYPE.TEXT,
  operation: DEFAULT_TEXT_OPERATION,
  value: '',
  id: +Date.now(),
});

function filterReducer(state, action) {
  switch (action.type) {
    case ADD_FILTER: {
      return [...state, getNewFilter()];
    }

    default:
      return state;
  }
}

export default function useFilters() {
  const [filters, dispatch] = useReducer(filterReducer, [getNewFilter()]);

  const addNewFilter = () => dispatch({ type: ADD_FILTER });

  return {
    addNewFilter,
    filters,
  };
}
