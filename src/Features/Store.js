import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./Cars/carSlice";

const store = configureStore({
  reducer: {
    car: carsReducer,
  },
});

export default store;
