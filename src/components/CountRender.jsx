import { useSelector } from "react-redux";

export default function CountRender() {
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.count;
  });

  return (
    <>
      <h1>計數器：{count}</h1>
    </>
  );
}
