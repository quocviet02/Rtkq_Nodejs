import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
<script src="https://cdn.tailwindcss.com"></script>
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/reset.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>,
  </BrowserRouter>
)
