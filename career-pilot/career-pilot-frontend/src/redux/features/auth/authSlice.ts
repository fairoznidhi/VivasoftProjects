import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TUser = {
  access_token: string;
  refresh_token: string;
  user: object;
};

type TAuthPayload = {
  message: string;
  data: TUser;
};

type TAuthState = {
  message: null | string;
  accessToken: null | string;
  refreshToken: null | string;
  user: null | object;
};

const initialState: TAuthState = {
  message: null,
  accessToken: null,
  refreshToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TAuthPayload>) => {
      const { message, data } = action.payload;
      console.log(data)
      console.log("message from ere",message)
      state.message = message;
      state.accessToken = data.access_token;
      state.refreshToken = data.refresh_token;
      state.user = data.user;
    },
    logout: (state) => {
      state.message = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
