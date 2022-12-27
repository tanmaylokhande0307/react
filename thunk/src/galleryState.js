import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async () => {
        const response = await fetch("https://picsum.photos/v2/list?page=3&limit=9");
        const formattedResponse = await response.json();
        return formattedResponse;
    }
)

const initialState = {
    photos : [],
    isLoading : false

}

const gallerySlice = createSlice({
    name:'gallery',
    initialState,
    extraReducers: {
        [getPhotos.pending]: (state) => {
            state.isLoading = true
        },
        [getPhotos.fulfilled]: (state,action) => {
            state.photos = action.payload;
            state.isLoading = false;
        },
        [getPhotos.rejected]: (state) => {
            state.isLoading = false
        }
    }

});

export default gallerySlice.reducer;