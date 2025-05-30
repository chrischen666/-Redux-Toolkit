import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import todoReducer from "./slice/todoSlice";

export const store = configureStore({
    // 這裡的 reducer 算是一個集合管理器，將 slice 匯入後統一進行管理
    reducer: { // 必要加入 reducer
        counter: counterReducer,
        todo: todoReducer
    }
});

