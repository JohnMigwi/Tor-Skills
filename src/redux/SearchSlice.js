// SearchSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk action
export const searchPeople = createAsyncThunk(
  'search/searchPeople',
  async (query) => {
    // Perform the POST request to Torre.ai API here
    const response = await fetch('https://torre.ai/api/entities/_searchStream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
      body: JSON.stringify({
        query,
        // Add other request parameters here
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the response JSON and return it
    const data = await response.json();
    return data;
  }
);

// Define the initial state and reducers for the slice
const searchSlice = createSlice({
  name: 'search',
  initialState: {
    input: '',
    searchResults: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchPeople.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchPeople.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchPeople.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Export the async thunk action and reducers
export { searchPeople };
export const { setInput } = searchSlice.actions;
export default searchSlice.reducer;
