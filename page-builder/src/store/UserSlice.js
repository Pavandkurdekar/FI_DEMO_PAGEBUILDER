import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "userData",
  initialState: {},
  reducers: {
    setUserData: (state, action) => {
        console.log("Got User Data = ",action.payload)
      return action.payload;
    },
    clearUserData: () => {}
  },
});

export default UserSlice;
export const UserDataActions = UserSlice.actions;
