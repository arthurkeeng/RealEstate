import { createSlice } from "@reduxjs/toolkit";

import { announcements } from "../data";
const initialState = {
  announcements ,
};
const announcementSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    setAnnouncement: (state, action) => {
      state.announcements = action.payload;
    },
  },
});

export const { setAnnouncement } = announcementSlice.actions;
export default announcementSlice.reducer;
