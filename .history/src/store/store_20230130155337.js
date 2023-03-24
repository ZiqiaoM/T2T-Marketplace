import {configureStore} from "@reduxjs/toolkit";
import cartSlice from './wish-list/cartSlice';
import cartUiSlice from "./wish-list/cartUISlice";

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer,
    },
});

export default store;