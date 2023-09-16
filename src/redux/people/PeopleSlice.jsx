import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = axios.create({
    baseURL: 'https://torre.ai/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });


  function fetchIndividuals(query) {
    return url.post('/entities/_searchStream', {
      query,
      identityType: 'person',
      meta: false,
      limit: 10,
      torreGgId: '1573478',
      excludeContacts: true,
      excludedPeople: [],
    });
  }

  const initialState = {
    people: [],
    ifSucceed: false,
    isLoading: false,
    error: null,
  }
  
  export const searchPeople = createAsyncThunk(
    'people/searchPeople',
    async (query) => {
      const response = await fetchIndividuals(query);
      const jsons = response.data.split('\n').filter(Boolean).map((line) => JSON.parse(line));
      return jsons;
    },
  );
  
  const PeopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(searchPeople.pending, (state) => ({
          ...state,
          isLoading: true,
        }))
        .addCase(searchPeople.fulfilled, (state, action) => ({
          ...state,
          isLoading: false,
          ifSucceed: true,
          people: action.payload,
        }))
        .addCase(searchPeople.rejected, (state, action) => ({
          ...state,
          isLoading: false,
          
        }));
    },
  });
  
  export default PeopleSlice.reducer;

