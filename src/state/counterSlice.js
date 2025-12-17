import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// We can also use userSlice to create a slice for user data
// export const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         name: 'John',
//         age: 30
//     },
//     reducers: {
//         incrementAge: (state) => {
//             state.age += 1;
//         }
//     }
// })