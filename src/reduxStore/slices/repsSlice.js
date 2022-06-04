import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  reps: {}
};

const repsSlice = createSlice({
  name: "reps",
  initialState,
  reducers: {
    getUserData: (state) => {
      state.loading = true;
    },
    getUserDataSuccess: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = false;
      state.reps = payload;
    },
    getUserDataFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    }
  }
});

export default repsSlice.reducer;
