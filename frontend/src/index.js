import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

import { Provider } from "react-redux"
import store from "./store"
import { productsFetch } from "./Features/ProductsSlice"
import { getTotals } from "./Features/CartSlice"


store.dispatch(productsFetch())
store.dispatch(getTotals())

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
