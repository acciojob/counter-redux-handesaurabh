import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../state/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1 data-testid="count">{count}</h1>
      <button onClick={() => dispatch(increment())} data-cy="increment-btn">increment</button>
      <button onClick={() => dispatch(decrement())} data-cy="decrement-btn">decrement</button>
    </div>
  )
}

export default App
