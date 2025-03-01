// src/Redux/Womens/Womens.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWomensProducts = createAsyncThunk(
  "womens/fetchWomensProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
    return response.json();
  }
);

const womensSlice = createSlice({
  name: "womens",
  initialState: {
    products: [],
    status: 'idle', // Add status here
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWomensProducts.pending, (state) => {
        state.status = 'loading'; // Update status here
        state.error = null;
      })
      .addCase(fetchWomensProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Update status here
        state.products = action.payload;
      })
      .addCase(fetchWomensProducts.rejected, (state, action) => {
        state.status = 'failed'; // Update status here
        state.error = action.error.message;
      });
  },
});

export default womensSlice.reducer;
