import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const instance = axios.create({
    baseURL: "https://easymenu-backend.vercel.app",
});

export const fetchProductsByCategory = createAsyncThunk(
    "products/fetchProductsByCategory",
    async (categoryId, { rejectWithValue }) => {
        try {
            const response = await instance.get(`/products/${categoryId}`);
            console.log(response)
            return response.data;
        } catch (err) {
            return rejectWithValue({ data: [], error: err.message });
        }
    }
);

export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (productId, { rejectWithValue }) => {
        try {
            const response = await instance.get(`/product/${productId}`);
            return response.data;
        } catch (err) {
            return rejectWithValue({ data: null, error: err.message });
        }
    }
);
