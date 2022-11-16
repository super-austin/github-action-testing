//  External Dependencies
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getLastestDropData } from "../../../../helper/GGHelper/GGHelper";
import { Phase } from "../../../types/Drop.types";

//  Get Latest Drop data
export const getLatestDrop = createAsyncThunk(
  "/drops/current-drop",
  async () => {;
    return await getLastestDropData();
  }
);

export const updatePhase = createAction('update-phase', (phase: Phase) => { return { payload: phase } });