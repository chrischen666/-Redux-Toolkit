
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    // 初始狀態
    initialState: {
        count: 0
    },
    // 方法
    reducers: {
        addCount: (state, action) => {
            console.log('量子狀態', state);
            // 增加計數
            state.count += action.payload || 1; // 如果沒有 payload，則默認增加 1
        },
        addCountByAmount: (state, action) => {
            console.log('addCountByAmount', action);
            state.count += action.payload;
        }
    },

})

// 非同步操作
export const addAsyncCountByCreateAsyncThunk = createAsyncThunk(
    'counter/addAsyncCountByCreateAsyncThunk',
    async (amount, thunkAPI) => {
        console.log('async thunk', amount);
        // 模擬異步操作
        setTimeout(() => {
            thunkAPI.dispatch(addCountByAmount(amount));
        }, 500);

    }
)
// 匯出到元件中
export const { addCount, addCountByAmount } = counterSlice.actions;
// 匯出 store 中的 reducer
export default counterSlice.reducer;