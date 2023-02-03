import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  country: [],
};

export const getCountry = createAsyncThunk("getCountry", async () => {
  const { data } = await axios.get(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
  );
  return data.data;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.country = action.payload;
    });
  },
});

export default counterSlice.reducer;
