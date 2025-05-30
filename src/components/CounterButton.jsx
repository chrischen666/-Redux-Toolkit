import { useDispatch } from "react-redux";
import {
  addAsyncCountByCreateAsyncThunk,
  addCount,
  addCountByAmount,
} from "../slice/counterSlice";
import { useState } from "react";

export default function CounterButton() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
      >
        增加1
      </button>
      <hr />
      <input
        // type="number"
        value={number}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(addCountByAmount(number));
        }}
      >
        增加前方數字
      </button>
      <button
        onClick={() => {
          dispatch(addAsyncCountByCreateAsyncThunk(number));
        }}
      >
        非同步增加數字
      </button>

    </>
  );
}
