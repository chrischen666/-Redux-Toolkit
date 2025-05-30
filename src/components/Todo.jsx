import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncAddTodo, asyncDelTodo, asyncFetchData } from "../slice/todoSlice";

export default function Todo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncFetchData());
  }, [dispatch]);

  const selectData = useSelector((state) => state.todo.data);
  const status = useSelector((state) => state.todo.status);
  console.log("status", status);
  const [title, setTitle] = useState("Todo App");
  return (
    <>
      <h1>Todo：{status}</h1>
      <div>
        <label htmlFor="">Title:{title}</label>
        <br />
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(asyncAddTodo({ title }));
          }}
        >
          送出
        </button>
      </div>
      {selectData.map((item) => {
        return (
          <div key={item.id}>
            <button
              // type="button"
              onClick={() => {
                dispatch(asyncDelTodo({ id: item.id }));
              }}
            >
              刪除
            </button>
            <h2>{item.title}</h2>
            <p>完成狀態：{item.completed ? "已完成" : "未完成"}</p>
            <p>使用者ID：{item.userId}</p>
          </div>
        );
      })}
    </>
  );
}
