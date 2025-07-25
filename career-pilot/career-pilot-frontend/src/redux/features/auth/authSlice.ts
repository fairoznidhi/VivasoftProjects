import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TUser = {
  id: number;
  email: string;
  user_name: string;
  company_id: number;
  role: string;
  permissions: string[];
};
type TAuthState = {
  //state
  accessToken: null | string;
  refreshToken: null | string;
  user: null | TUser;
};
type TAuthData = {
  //backend data
  access_token: null | string;
  refresh_token: null | string;
  user: null | TUser;
};
type TAuthPayload = {
  message: string;
  data: TAuthData;
};

const initialState: TAuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TAuthPayload>) => {
      const { data } = action.payload;
      state.accessToken = data.access_token;
      state.refreshToken = data.refresh_token;
      state.user = data.user;
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
