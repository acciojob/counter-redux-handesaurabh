import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../state/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <div>
        <span></span>
        <div>
          <button onClick={() => dispatch(increment())}>increment</button>
        </div>
        <div>
          <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
