import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload; // Direct assignment instead of concatenation
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

// Memoized selector for restaurant
export const selectRestaurant = createSelector(
  (state) => state.restaurant,
  (restaurant) => restaurant.restaurant
);

export default restaurantSlice.reducer;
