import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      console.log(current[state]);
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.card.info.id !== itemIdToRemove);
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
