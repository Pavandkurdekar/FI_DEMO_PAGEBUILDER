import { createSlice } from "@reduxjs/toolkit";

const pincodeSlice = createSlice({
  name: "pincodes",
  initialState: {
    data: [], // Array to hold all fetched pincodes
    nextToken: null, // Stores the next token for pagination
    hasMore: true, // Indicates if there are more records to fetch
  },
  reducers: {
    setPincodes: (state, action) => {
      // This reducer sets the initial batch of pincodes
      const { data, nextToken, hasMore } = action.payload;
      state.data = data; // Replace the current data
      state.nextToken = nextToken; // Update the token
      state.hasMore = hasMore; // Update the flag
    },
    addPincodes: (state, action) => {
      // This reducer appends new pincodes from subsequent API calls
      const { data, nextToken, hasMore } = action.payload;
      state.data = [...state.data, ...data]; // Append new records
      state.nextToken = nextToken; // Update the token
      state.hasMore = hasMore; // Update the flag
    },
    deletePincodes: (state, action) => {
      const ROWIDS = action.payload;

      state.data = state.data.filter(
        (pincode) => !ROWIDS.includes(pincode.ROWID)
      );
    },
  },
});

export const pincodeActions = pincodeSlice.actions;

export default pincodeSlice;
