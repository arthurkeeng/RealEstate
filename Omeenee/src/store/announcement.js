import { createSlice } from "@reduxjs/toolkit";

import { announcements } from "../data";
const initialState = {
  announcements,
};
const announcementSlice = createSlice({
  name: "announcements",
  initialState,
});

export default announcementSlice.reducer;
