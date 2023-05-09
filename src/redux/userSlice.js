import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersCash } from "../api/getUserByCash";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    newUsers: [],
  },

  reducers: {
    setNewUsers: (state) => {
      state.newUsers = usersCash;
    },

    updateNewUsers: (state, action) => {
      const { id, followersCount, isFollowing } = action.payload;
      const index = state.newUsers.findIndex((user) => user.id === id);
      state.newUsers[index].followers = followersCount;
      state.newUsers[index].isFollowing = !isFollowing;
    },
  },
});

const persistConfig = {
  key: "Users",
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  usersSlice.reducer, 
);

export const { setNewUsers, updateNewUsers } = usersSlice.actions;

// Selectors
export const getNewUsers = (state) => state.users.newUsers;
