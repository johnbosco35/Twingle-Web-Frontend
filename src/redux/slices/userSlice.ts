import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  isAuthenticated: boolean;
  user: {
    id?: string;
    name?: string;
    email?: string;
    role?: "user" | "seller" | "admin";
  } | null;
  token?: string | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState["user"]>) => {
      state.user = action.payload;
      state.isAuthenticated = Boolean(action.payload);
    },
    setAuthToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { setUser, setAuthToken, logoutUser } = userSlice.actions;
export default userSlice.reducer;
