import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../state/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h1 data-testid="count">{count}</h1>

      <div>
        <button
          data-testid="increment-btn"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>

        <button
          data-testid="decrement-btn"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
      </div>
    </>
  )
}

export default App
