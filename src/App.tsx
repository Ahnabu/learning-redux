import { decrement, increment, incrementByValue } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"


function App() {
  const count = useAppSelector((state) => {
    return state.counter.count
  })
  const dispatch = useAppDispatch()

  const boxNum = Math.trunc(count / 5)
  const boxArray = Array.from({ length: boxNum }, (_, i) => i + 1)

  return (
    <>
      <div className="flex w-full items-center mx-auto justify-center gap-4">
        <button className="bg-green-600 border-white font-semibold rounded-2xl text-white text-lg shadow-2xl px-4 py-2"
          onClick={() => dispatch(increment())}
        > Increment</button>
        <button className="bg-green-600 border-white font-semibold rounded-2xl text-white text-lg shadow-2xl px-4 py-2"
          onClick={() => dispatch(incrementByValue(5))}
        > Increment by 5</button>
        <h1>{count}</h1>
        <button className="bg-red-600 font-semibold rounded-2xl text-white text-lg shadow-2xl px-4 py-2"
          onClick={() => dispatch(decrement())}
        >Decrement</button>
      </div>

      <div className="grid grid-cols-5 gap-4 mx-auto w-3/4">
        {boxArray.map((num) => (
          <div key={num} className="bg-blue-500 h-20 flex items-center justify-center text-white font-bold text-2xl rounded-lg shadow-lg">
            Box {num}
          </div>
        ))}

      </div>

    </>
  )
}

export default App
