import { configureStore } from "@reduxjs/toolkit";
import pincodeslice from "./pincodeSlice";
import leadSlice from "./leadSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
  reducer: {
    pincodes: pincodeslice.reducer,
    leads: leadSlice.reducer,
    user: UserSlice.reducer,
  },
});

export default store;
