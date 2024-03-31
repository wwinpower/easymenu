import {createSlice} from '@reduxjs/toolkit';
import {fetchProductsByCategory, fetchProductById} from '../asyncAction/productAction.js'; // Подставьте путь к вашему файлу с action creators
import {v4 as uuidv4} from 'uuid';

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
    modalActive: false,
    cart: [],
    sum: 0
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productClear: (state) => {
            state.sum = 0;
            state.product = null;
        },
        modifierClear: (state, action) => {
            const {modifierId} = action.payload;

            state.product.modifiers = state.product.modifiers.map(modifier => {
                if (modifier.id === modifierId) {
                    if (modifier.type === "multiple") {
                        modifier.options = modifier.options.map(option => {
                            option.count = 0;

                            return option;
                        })
                    }

                    if (modifier.type === "single") {
                        modifier.options = modifier.options.map((option, index) => {
                            option.selected = false;

                            if (index === 0) {
                                option.selected = true;
                            }

                            return option;
                        })
                    }
                }

                return modifier;
            })
        },
        toggleModal: (state) => {
            state.modalActive = !state.modalActive;
        },
        incModifier: (state, action) => {
            const {modifierId, optionId} = action.payload;


            state.product.modifiers = state.product.modifiers.map(modifier => {
                if (modifier.id === modifierId) {
                    modifier.options = modifier.options.map(option => {
                        if (option.id === optionId) {
                            option.count += 1;
                        }

                        return option;
                    })
                }

                return modifier;
            })
        },
        decModifier: (state, action) => {
            const {modifierId, optionId} = action.payload;


            state.product.modifiers = state.product.modifiers.map(modifier => {
                if (modifier.id === modifierId) {
                    modifier.options = modifier.options.map(option => {
                        if (option.id === optionId) {
                            option.count -= 1;
                        }

                        return option;
                    })
                }

                return modifier;
            })
        },
        incCount: (state) => {
            state.product.count = state.product.count + 1;
        },
        decCount: (state) => {
            state.product.count = state.product.count - 1;
        },
        selectModifier: (state, action) => {
            const {modifierId, optionId} = action.payload;

            state.product.modifiers = state.product.modifiers.map(modifier => {
                if (modifier.id === modifierId) {
                    modifier.options = modifier.options.map(option => {
                        option.selected = false;

                        if (option.id === optionId) {
                            option.selected = true;
                        }

                        return option;
                    })
                }

                return modifier;
            })
        },
        productSum: (state, action) => {
            const {currency} = action.payload;

            state.sum = state.product.modifiers.reduce((acc, current) => {

                if (current.type === "multiple") {
                    current.options && current.options.forEach(option => {
                        acc += (option.price[currency] * option.count)
                    })
                }
                if (current.type === "single") {
                    current.options && current.options.forEach(option => {
                        if (option.selected) {
                            acc += option.price[currency]
                        }
                    })
                }
                return acc;
            }, 0);
        },
        productAddToCart: (state) => {
            state.cart.push({...state.product, sum: state.sum, cartId: uuidv4()});
        },
        openProductInCart: (state, action) => {
            const {cartId} = action.payload;

            let product = state.cart.find(item => item.cartId === cartId);

            if (product) {
                state.sum = product.sum;
                state.product = product;
            }
        },
        saveChangeInCart: (state) => {
            const index = state.cart.findIndex(item => item.cartId === state.product.cartId);

            if (index !== -1) {
                state.cart[index] = {...state.product, sum: state.sum};
            }
        },
        removeProductFromCart: (state, action) => {
            const {cartId} = action.payload;

            state.cart = state.cart.filter(item => item.cartId !== cartId)
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
                state.error = null;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const {
    productClear,
    incModifier,
    decModifier,
    incCount,
    decCount,
    toggleModal,
    selectModifier,
    modifierClear,
    productSum,
    productAddToCart,
    openProductInCart,
    saveChangeInCart,
    removeProductFromCart
} = productsSlice.actions;
export default productsSlice.reducer;
