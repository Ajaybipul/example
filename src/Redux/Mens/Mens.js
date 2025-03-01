// src/Redux/Mens/Mens.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMensProducts = createAsyncThunk(
  "mens/fetchMensProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
    return response.json();
  }
);

const mensSlice = createSlice({
  name: "mens",
  initialState: {
    products: [],
    status: 'idle', // Add status here
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMensProducts.pending, (state) => {
        state.status = 'loading'; // Update status here
        state.error = null;
      })
      .addCase(fetchMensProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Update status here
        state.products = action.payload;
      })
      .addCase(fetchMensProducts.rejected, (state, action) => {
        state.status = 'failed'; // Update status here
        state.error = action.error.message;
      });
  },
});

export default mensSlice.reducer;
