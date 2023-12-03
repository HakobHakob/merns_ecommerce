import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { toastTrueMsg } from "./util"

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartTotalQuantity += 1
        toast.info(
          `increased ${state.cartItems[itemIndex].name} quantity`,
          toastTrueMsg
        )
      } else {
        const tempProduct = { ...action.payload, cartTotalQuantity: 1 }
        state.cartItems.push(tempProduct)
        toast.success(`${action.payload.name} added to cart`, toastTrueMsg)
      }

      // Adding items to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    removeFromCart(state, action) {
      const nextItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      )
      state.cartItems = nextItems
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      toast.error(`${action.payload.name}  removed from cart`, toastTrueMsg)
    },
    //increment or decrement product quantity in cart
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      )

      if (state.cartItems[itemIndex].cartTotalQuantity > 1) {
        state.cartItems[itemIndex].cartTotalQuantity -= 1
        toast.info(
          `Decreased ${action.payload.name}  cart quantity`,
          toastTrueMsg
        )
      } else if (state.cartItems[itemIndex].cartTotalQuantity === 1) {
        const nextItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        )
        state.cartItems = nextItems
        toast.error(`${action.payload.name}  removed from cart`, toastTrueMsg)
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
  },
})

export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions

export default cartSlice.reducer
