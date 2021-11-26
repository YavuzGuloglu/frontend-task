import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  sort: null,
  url: '',
};

export const slice = createSlice({
  name: 'selection',
  initialState,
  reducers: {

    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
  },
  extraReducers: (builder) => {

  },
});

export const { setSort, setUrl } = slice.actions;

export default slice.reducer;
