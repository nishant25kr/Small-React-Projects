const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    noOfIcecream: 10
};

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        iordered: (state) => {
            state.noOfIcecream--;
        },
        irestock: (state, action) => {
            state.noOfIcecream += action.payload;
        }
    }
});

const { iordered, irestock } = icecreamSlice.actions;

module.exports = {
    icecreamReducer: icecreamSlice.reducer,
    iordered,
    irestock
};
