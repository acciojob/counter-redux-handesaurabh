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
        <button onClick={() => dispatch(increment())}>Increment By One</button>
        <button onClick={() => dispatch(decrement())}>Decrement By One</button>
      </div>
    </>
  )
}

export default App
