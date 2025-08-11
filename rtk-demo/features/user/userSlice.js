const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
const axios = require('../../../rkt/node_modules/axios/index.d.cts')

const initialState = {
    loading: false,
    user: [],
    error: ''
}

// Async thunk
 const fetchuser = createAsyncThunk('user/fetchusers', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data.map((user)=> user.id)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchuser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchuser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = ''
        })
        builder.addCase(fetchuser.rejected, (state, action) => {
            state.loading = false
            state.user = []
            state.error = action.error.message
        })
    }
})

module.exports = { userReducer: userSlice.reducer, fetchuser }
