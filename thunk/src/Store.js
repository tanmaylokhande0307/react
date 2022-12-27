import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./galleryState"

const Store = configureStore({
    reducer:{
        gallery: galleryReducer
    }
});

export default Store;