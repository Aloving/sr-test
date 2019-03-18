import { useReducer } from 'react';

import { TYPE, CONTAINING_OPERATION, EQUAL_OPERATION } from '../constants';

const DEFAULT_TEXT_OPERATION = CONTAINING_OPERATION;
const DEFAULT_NUMBER_OPERATION = EQUAL_OPERATION;

const ADD_FILTER = 'ADD_FILTER';
const UPDATE_VALUE = 'UPDATE_VALUE';

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

    case UPDATE_VALUE: {
      return state.map((filter) => {
        if (filter.id === action.payload.id) {
          return {
            ...filter,
            value: action.payload.value,
          };
        }

        return filter;
      });
    }

    default:
      return state;
  }
}

export default function useFilters() {
  const [filters, dispatch] = useReducer(filterReducer, [getNewFilter()]);

  const addNewFilter = () => dispatch({ type: ADD_FILTER });
  const updateValue = (value, id) => {
    dispatch({
      type: UPDATE_VALUE,
      payload: { value, id },
    });
  }

  return {
    addNewFilter,
    filters,
    updateValue,
  };
}
