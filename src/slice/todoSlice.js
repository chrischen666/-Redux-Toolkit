import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 非同步取得資料
export const asyncFetchData = createAsyncThunk('todo/fetchData', async (payload, { dispatch }) => {

    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        dispatch(updateTodo(res.data));
    } catch (error) {
        console.log(error)
    }
});
// 定義 todoSlice
export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        data: [
        ],
        status: 'idle',
    },
    reducers: {
        updateTodo: (state, action) => {
            console.log('updateTodo', action.payload);
            state.data = action.payload;
        },

    },
    // 處理非同步（Promise-based）action 的狀態變化，特別是配合 createAsyncThunk 使用
    extraReducers: (builder) => {
        console.log('builder', builder);
        builder.addCase(asyncFetchData.pending, (state) => {
            state.status = 'loading'
        });
        builder.addCase(asyncFetchData.fulfilled, (state) => {
            state.status = 'succeeded'
        });
    },

})

// 新增非同步
export const asyncAddTodo = createAsyncThunk('todo/addTodo', async (payload, { dispatch }) => {
    try {
        console.log(payload);
        const res = await axios.post("https://jsonplaceholder.typicode.com/posts", payload);
        console.log('addData', res);
        dispatch(asyncFetchData());
    } catch (error) {
        console.log(error)
    }
}
);
// 刪除非同步
export const asyncDelTodo = createAsyncThunk('todo/delTodo', async (payload, { dispatch }) => {
    try {
        console.log(payload);
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${payload.id}`);
        console.log('addData', res);
        dispatch(asyncFetchData());
    } catch (error) {
        console.log(error)
    }
}
);


export const { updateTodo } = todoSlice.actions;
export default todoSlice.reducer;