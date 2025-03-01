import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { api_base_url } from "../../Utils/Electronics/constants";

export const fetchAllProduct = createAsyncThunk(
  'allElectronicsProduct/fetchAllProduct',
  async(_, {rejectWithValue}) =>{
    try {
      const res = await axios.get(`${api_base_url}/products/category/electronics`)
      return res.data; // Returning only the results array
    } catch (error) {
      return rejectWithValue(error.message || "An unknown error occurred"); // Handling errors
    }
  }
)

const allProductSlice = createSlice({
  name:'allElectronicsProduct',
  initialState:{
    allElectronicsProduct:[],
    status:'idle',
    error:'null'
  },
  reducers:{},
  extraReducers:(builder)=>{
    builder
      .addCase(fetchAllProduct.pending,(state,acion)=>{
        state.status = 'loading';
        state.error = "";
      })
      .addCase(fetchAllProduct.fulfilled, (state,action)=>{
        state.status = 'succeeded';
        state.allElectronicsProduct = action.payload;
      })
      .addCase(fetchAllProduct.rejected, (state, action)=>{
        state.status = "failed"; // Set status to 'failed' if fetch is rejected
        state.error = action.payload; // Store error message in state
      })  
  }
})


export default allProductSlice.reducer; // Exporting reducer for use in store