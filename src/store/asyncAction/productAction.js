import {createAsyncThunk} from '@reduxjs/toolkit'
import data from './products.json'
import axios from "axios";

// const baseURL = "https://easymenu-backend.vercel.app";
const instance = axios.create({
    baseURL: "https://easymenu-backend.vercel.app",
});
export const fetchProductsByCategory = createAsyncThunk(
    "products/fetchProductsByCategory",
    async (categoryId, { rejectWithValue }) => {
        try {
           let {data} =  await instance.get(`/products/${categoryId}`);

            return data
        } catch (err) {
            return rejectWithValue([], err);
        }
    }
);

export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (productId, { rejectWithValue }) => {
        try {
            let {data} =  await instance.get(`/product/${productId}`);
            // if (!response.ok) {
            //     throw new Error('Failed to fetch product by id');
            // }
            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
