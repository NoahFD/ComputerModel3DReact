import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  started: false,
  zoom: 1,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    start(state) {
      state.started = true;
    },
    zoom(state) {
      state.zoom = 2; // Adjust the zoom level as needed
    },
  },
});

export const { start, zoom } = appSlice.actions;
export default appSlice.reducer;
