import {createAsyncThunk} from '@reduxjs/toolkit'

const baseURL = "https://easymenu-backend.vercel.app";

export const fetchProductsByCategory = createAsyncThunk(
    "products/fetchProductsByCategory",
    async (categoryId, { rejectWithValue }) => {
        try {
            let response = await fetch(`${baseURL}/products/${categoryId}`);

            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }

            return await response.json();
        } catch (err) {
            return rejectWithValue([], err);
        }
    }
);

export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (productId, { rejectWithValue }) => {
        try {
            const response = await fetch(`${baseURL}/product/${productId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product by id');
            }
            return await response.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
