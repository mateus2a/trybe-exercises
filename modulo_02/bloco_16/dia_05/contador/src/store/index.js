import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from '../App';
import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';
const rootReducer = combineReducers({ clickReducer });

export const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
const store = createStore(rootReducer);

export default store;