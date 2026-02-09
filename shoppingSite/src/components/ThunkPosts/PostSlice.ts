import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    posts:[],
    status:'idle',
    error:null as string | null
}

export const loadPost= createAsyncThunk('post/loadPost', async()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json(); 
        return data;
    }
    catch(error){
        throw error;
    }
})
const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(loadPost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadPost.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.posts = action.payload;
            })
            .addCase(loadPost.rejected, (state, action) => {
                state.posts = [];
                state.status = 'rejected';
                state.error = action.error.message || null;
            });
    }
});

export default postSlice.reducer;