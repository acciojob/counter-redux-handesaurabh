import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../state/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button data-cy="increment-button" onClick={() => dispatch(increment())}>increment</button>
        <button data-cy="decrement-button" onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </>
  )
}

export default App
