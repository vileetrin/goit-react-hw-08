import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setNameFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setNameFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;