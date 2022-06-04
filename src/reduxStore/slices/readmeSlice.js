import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  markdown: ""
};

const readmeSlice = createSlice({
  name: "readme",
  initialState,
  reducers: {
    getUserData: (state) => {
      state.loading = true;
    },
    getUserDateSuccess: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = false;
      state.markdown = payload;
    },
    getUserDateFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    }
  }
});

export default readmeSlice.reducer;
