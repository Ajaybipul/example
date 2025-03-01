// src/Redux/Jewellery/Jewellery.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJewelleryProducts = createAsyncThunk(
  "jewellery/fetchJewelleryProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
    return response.json();
  }
);

const jewellerySlice = createSlice({
  name: "jewellery",
  initialState: {
    products: [],
    status: 'idle', // Add status here
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJewelleryProducts.pending, (state) => {
        state.status = 'loading'; // Update status here
        state.error = null;
      })
      .addCase(fetchJewelleryProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Update status here
        state.products = action.payload;
      })
      .addCase(fetchJewelleryProducts.rejected, (state, action) => {
        state.status = 'failed'; // Update status here
        state.error = action.error.message;
      });
  },
});

export default jewellerySlice.reducer;
