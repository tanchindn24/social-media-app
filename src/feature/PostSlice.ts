import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import postService from "./services/PostService";

const initialState = {
    posts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const createPost = createAsyncThunk('post/create_post', async (post: any) => {
    try {
        return await postService.createPost(post)
    } catch (error: any) {
        const status = error.response.status
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return {
            status,
            message
        }
    }
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        reset: (state: any) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createPost.pending, (state: any) => {
            //console.log("🚀 ~ file: PostSlice.ts:38 ~ builder.addCase ~ state:", state)
            state.isLoading = true
        })
        builder.addCase(createPost.fulfilled, (state: any, action: any) => {
            //console.log("🚀 ~ file: PostSlice.ts:42 ~ builder.addCase ~ state:", state)
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        builder.addCase(createPost.rejected, (state: any, action: any) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const { reset } = postSlice.actions
export default postSlice.reducer
