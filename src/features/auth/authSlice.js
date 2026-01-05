import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username : ""
  },
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LoginSuccess: (state, action) => {
      // Make sure payload structure matches API response
      const { user, accessToken, refreshToken } = action.payload;

      state.user = user || null;
      state.accessToken = accessToken || null;
      state.refreshToken = refreshToken || null;
      state.isAuthenticated = !!user;
    },

    LogOut: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const { LoginSuccess, LogOut } = authSlice.actions;
export default authSlice.reducer;
