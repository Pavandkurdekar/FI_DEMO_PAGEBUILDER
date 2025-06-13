import { createSlice } from "@reduxjs/toolkit";

const leadSlice = createSlice({
  name: "leads",
  initialState: {
    data: [], // Array to hold all fetched leads
    nextToken: null, // Stores the next token for pagination
    hasMore: true, // Indicates if there are more records to fetch
  },
  reducers: {
    setLeads: (state, action) => {
      const { data, nextToken, hasMore } = action.payload;
      state.data = data; // Replace the current data
      state.nextToken = nextToken; // Update the token
      state.hasMore = hasMore; // Update the flag
    },
    addLeads: (state, action) => {
      const { data, nextToken, hasMore } = action.payload;
      state.data = [...state.data, ...data]; // Append new records
      state.nextToken = nextToken; // Update the token
      state.hasMore = hasMore; // Update the flag
    },
    deleteLead: (state, action) => {
      
      const data = action.payload; 
      state.data = state.data.filter((lead) => lead.ROWID !== data.ROWID)
    },
    deletemultipleLead: (state, action) => {
      const rowIdsToDelete = action.payload; // Array of ROWIDs to delete
      state.data = state.data.filter((lead) => !rowIdsToDelete.includes(lead.ROWID));
    }
    
    
  },
});


export const leadActions = leadSlice.actions;
export default leadSlice;