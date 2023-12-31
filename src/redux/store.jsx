import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './people/PeopleSlice'

export const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
});

export default store;