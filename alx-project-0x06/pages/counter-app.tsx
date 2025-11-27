import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { increment, decrement } from "@/store/slices/countSlice";

export default function CounterApp() {
  const count = useSelector((state: RootState) => state.count.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
