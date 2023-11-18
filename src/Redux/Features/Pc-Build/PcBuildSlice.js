import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monitor: undefined,
  cpu: undefined,
  motherboard: undefined,
  ram: undefined,
  psu: undefined,
  storage: undefined,
};

const PcBuildSlice = createSlice({
  name: "pc",
  initialState,
  reducers: {
    handlePcBuild: (state, action) => {
      if (action.payload.category === "monitor") {
        state.monitor = action.payload;
      } else if (action.payload.category === "cpu") {
        state.cpu = action.payload;
      } else if (action.payload.category === "motherboard") {
        state.motherboard = action.payload;
      } else if (action.payload.category === "ram") {
        state.ram = action.payload;
      } else if (action.payload.category === "psu") {
        state.psu = action.payload;
      } else if (action.payload.category === "storage") {
        state.storage = action.payload;
      }
    },

    resetPcBuild: (state) => {
      // Reset all component states to undefined
      state.monitor = undefined;
      state.cpu = undefined;
      state.motherboard = undefined;
      state.ram = undefined;
      state.psu = undefined;
      state.storage = undefined;
    },
  },
});

export const { handlePcBuild,resetPcBuild } = PcBuildSlice.actions;

export default PcBuildSlice.reducer;
