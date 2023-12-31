import { Link, useNavigate } from "react-router-dom"
import * as Styled from "./Styled"
import { useDispatch, useSelector } from "react-redux"
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../Features/CartSlice"
import { useEffect } from "react"

export const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])

  const handleRemoveFromCart = (cartItem) => dispatch(removeFromCart(cartItem))
  const handleDecreaseCart = (cartItem) => dispatch(decreaseCart(cartItem))
  const handleIncreaseCart = (cartItem) => dispatch(addToCart(cartItem))
  const handleClearCart = (cartItem) => dispatch(clearCart(cartItem))

  return (
    <Styled.CartContainer>
      <Styled.CartContainerHeading>Shoping cart</Styled.CartContainerHeading>
      {cart.cartItems.length === 0 ? (
        <Styled.CartEmpty>
          <p>Your cart is currently empty</p>
          <Styled.StartShoping>
            <Link to="/">
              <Styled.ContinueShopingSpanArrow className="material-symbols-outlined">
                arrow_left_alt
              </Styled.ContinueShopingSpanArrow>
            </Link>
            <span>Start Shopping</span>
          </Styled.StartShoping>
        </Styled.CartEmpty>
      ) : (
        <>
          <Styled.Titles>
            <Styled.ProductTitle>Product</Styled.ProductTitle>
            <Styled.ProductPrice>Price</Styled.ProductPrice>
            <Styled.ProductQuantity>Quantity</Styled.ProductQuantity>
            <Styled.ProductTotal>Total</Styled.ProductTotal>
          </Styled.Titles>

          <Styled.CartItems>
            {cart.cartItems?.map((cartItem, index) => (
              <Styled.CartItem key={cartItem.id}>
                <Styled.CartProduct>
                  <Styled.CartProductImg
                    src={cartItem.image}
                    alt={cartItem.name}
                  />
                  <Styled.CartDescription>
                    <Styled.CartDesciptionHeading>
                      {cartItem.name}
                    </Styled.CartDesciptionHeading>
                    <Styled.CartDescriptionText>
                      {cartItem.desc}
                    </Styled.CartDescriptionText>
                    <Styled.CartRemove
                      onClick={() => handleRemoveFromCart(cartItem)}
                    >
                      Remove
                    </Styled.CartRemove>
                  </Styled.CartDescription>
                </Styled.CartProduct>

                <Styled.CartProductPrice>
                  ${cartItem.price}
                </Styled.CartProductPrice>

                <Styled.CartProductQuantity>
                  <Styled.CartDecrement
                    onClick={() => handleDecreaseCart(cartItem)}
                  >
                    -
                  </Styled.CartDecrement>
                  <Styled.CartCount>
                    {cartItem.cartTotalQuantity}
                  </Styled.CartCount>
                  <Styled.CartIncrement
                    onClick={() => handleIncreaseCart(cartItem)}
                  >
                    +
                  </Styled.CartIncrement>
                </Styled.CartProductQuantity>

                <Styled.CartProductTotalPrice>
                  ${cartItem.price * cartItem.cartTotalQuantity}
                </Styled.CartProductTotalPrice>
              </Styled.CartItem>
            ))}
          </Styled.CartItems>

          <Styled.CartSummary>
            <Styled.ClearCartBtn onClick={() => handleClearCart()}>
              Clear Cart
            </Styled.ClearCartBtn>

            <Styled.CartCheckout>
              <Styled.CartSubtotal>
                <Styled.CartSubtotalPrice>
                  <Styled.CartSubtotalName>Subtotal</Styled.CartSubtotalName>
                  <Styled.CartSubtotalAmount>
                    ${cart.cartTotalAmount}
                  </Styled.CartSubtotalAmount>
                </Styled.CartSubtotalPrice>

                <Styled.CartTotalMsg>
                  Taxes and shipping calculated
                </Styled.CartTotalMsg>

                {auth._id ? (
                  <Styled.CartCheckoutBtn>Check out</Styled.CartCheckoutBtn>
                ) : (
                  <Styled.CartLoginBtn onClick={()=>{
                    navigate("/login")
                  }}>Login to Check out</Styled.CartLoginBtn>
                )}

                <Styled.ContinueShoping>
                  <Link to="/">
                    <Styled.ContinueShopingSpanArrow className="material-symbols-outlined">
                      arrow_left_alt
                    </Styled.ContinueShopingSpanArrow>
                  </Link>
                  <Styled.ContinueShopingSpan>
                    Continue Shopping
                  </Styled.ContinueShopingSpan>
                </Styled.ContinueShoping>
              </Styled.CartSubtotal>
            </Styled.CartCheckout>
          </Styled.CartSummary>
        </>
      )}
    </Styled.CartContainer>
  )
}
