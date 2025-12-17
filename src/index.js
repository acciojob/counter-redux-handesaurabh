import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import store from './store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Providing store for full app */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
