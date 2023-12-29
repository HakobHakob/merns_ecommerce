import { configureStore } from "@reduxjs/toolkit"
import { productsAPI } from "../Features/ProductsAPI"
import productsReducer from "../Features/ProductsSlice"
import cartReducer from "../Features/CartSlice"
import authReducer from "../Features/AuthSlice"

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  //Custom  middlwere
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
})
