import { configureStore } from "@reduxjs/toolkit";
import { createTransform, persistReducer, persistStore } from "redux-persist";
import userReducer, { type UserState } from "./slices/userSlice";

const storage = {
  getItem: (key: string) => {
    if (typeof window === "undefined") return Promise.resolve(null);
    return Promise.resolve(window.localStorage.getItem(key));
  },
  setItem: (key: string, value: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, value);
    }
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
    return Promise.resolve();
  },
};

const authStateTransform = createTransform(
  (inboundState: UserState | undefined) => {
    if (!inboundState) return inboundState;

    return {
      ...inboundState,
      token: null,
    };
  },
  (outboundState: UserState | undefined) => {
    if (!outboundState) return outboundState;

    return {
      ...outboundState,
      token: null,
    };
  },
);

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["isAuthenticated", "user"],
  transforms: [authStateTransform],
  version: 1,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/FLUSH",
        ],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
