//  External Dependencies
import { createSlice } from "@reduxjs/toolkit";

//  Internal Dependencies
import { DropState, Phase } from "../../types/Drop.types";
import { getLatestDrop, updatePhase } from "./thunks/currentDrop";

const initialState: DropState = {
  currentDrop: {
    drop_id: "",
    name: "",
    description: "",
    game_id: "",
    private: {
      tokens: [],
    },
    community: {
      tokens: [],
    },
    public: {
      tokens: [],
    },
  },
  selectedPhase: Phase.PRIVATE,
  isLoading: false,
  isError: false,
};

export const dropSlice = createSlice({
  name: "drop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //  drop
    builder.addCase(getLatestDrop.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      return state;
    });
    builder.addCase(getLatestDrop.fulfilled, (state, action) => {
      state.currentDrop = action.payload;
      state.isLoading = false;
      return state;
    });
    builder.addCase(getLatestDrop.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      console.log("Error loading drop");
      return state;
    });

    // drop phase
    builder.addCase(updatePhase, (state, action) => {
      state.selectedPhase = action.payload;
      return state;
    })
  },  
});
