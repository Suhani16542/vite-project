import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

export default function MyChange() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-72">
        
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Counter Box
        </h1>

        <div className="text-4xl font-semibold text-blue-700 mb-6">
          {count}
        </div>

        <div className="flex justify-between gap-2">
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>

          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
        </div>

      </div>
    </div>
  );
}
