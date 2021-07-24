import { createSlice } from "@reduxjs/toolkit";

export const car = createSlice({
  name: "car",
  initialState: {
    cars: [
      " Model X",
      " Model Y",
      "Model 3",
      "Model S",
      "Solar Roof",
      "Solar Panels",
    ],
  },
  reducers: {},
});

export const selectCar = (state) => state.car.cars;
export default car.reducer;
