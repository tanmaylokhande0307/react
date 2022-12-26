import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     c: 0,
// }

// export const customReducer = createReducer(initialState,{
//     increment: (state) => {
//         state.c += 1;
//     },

//     incrementByValue: (state,action) => {
//         state.c += action.payload;
//     },

//     decrement: (state,action) => {
//         state.c -= 1;
//     }
// });

const initialState = {
    title : "initial"
}


export const Course = createSlice({
    name: 'course',
    initialState,
    reducers: {

        setTitle: (state,action) => {
            return {...state,title: action.payload}
        },
        

    }
})

export const { setTitle } = Course.actions

export default Course.reducer;