import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./agent/agentSlice";

export const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});
