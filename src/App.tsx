import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counterSlice"


function App() {
  const count = useSelector((state) => {
    return state.counter.count
  })
  const dispatch = useDispatch()

  return (
    <>
      <div className="flex w-full items-center mx-auto justify-center h-screen gap-4">
        <button className="bg-green-600 border-white font-semibold rounded-2xl text-white text-lg shadow-2xl px-4 py-2"
          onClick={() => dispatch(increment())}
        > Increment</button>
        <h1>{count}</h1>
        <button className="bg-red-600 font-semibold rounded-2xl text-white text-lg shadow-2xl px-4 py-2"
          onClick={() => dispatch(decrement())}
        >Decrement</button>
      </div>

    </>
  )
}

export default App
