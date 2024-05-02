import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  token: token ? token : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      if (action.payload.user && action.payload.token) {
        state.userInfo = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('userInfo', JSON.stringify(action.payload.user));
        localStorage.setItem('token', action.payload.token);
      } else {
        console.error('Invalid user data or token:', action.payload);
      }
    },
    logout: (state, action) => {
      state.userInfo = null;
      // NOTE: here we need to also remove the cart from storage so the next
      // logged in user doesn't inherit the previous users cart and shipping
      state.token = null; // Xóa token
      localStorage.clear();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
