import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  userData: ""
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    getUserData: (state) => {
      state.loading = true;
    },
    getUserDataSuccess: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = false;
      state.userData = payload;
    },
    getUserDataFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    }
  }
});

export const { getUserData, getUserDataSuccess, getUserDataFailure } =
  userDataSlice.actions;

export default userDataSlice.reducer;
