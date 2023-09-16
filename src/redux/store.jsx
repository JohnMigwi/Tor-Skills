import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './People/PeopleSlice'

export const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
});

export default store;