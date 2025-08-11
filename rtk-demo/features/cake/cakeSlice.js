const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    noOfCakes: 10
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.noOfCakes--;
        },
        restock: (state, action) => {
            state.noOfCakes += action.payload;
        },
    }
});

// Destructure actions for easy access
const { ordered, restock } = cakeSlice.actions;

module.exports = {
    cakeReducer: cakeSlice.reducer,
    ordered,
    restock
};
