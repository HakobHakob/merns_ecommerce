import { Link } from "react-router-dom"
import * as Styled from "./Styled"
import { useSelector } from "react-redux"

export const Cart = () => {
  const cart = useSelector((state) => state.cart)
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
                    <Styled.CartRemove>Remove</Styled.CartRemove>
                  </Styled.CartDescription>
                </Styled.CartProduct>

                <Styled.CartProductPrice>
                  ${cartItem.price}
                </Styled.CartProductPrice>

                <Styled.CartProductQuantity>
                  <Styled.CartDecrement>-</Styled.CartDecrement>
                  <Styled.CartCount>
                    {cartItem.cartTotalQuantity}
                  </Styled.CartCount>
                  <Styled.CartIncrement>+</Styled.CartIncrement>
                </Styled.CartProductQuantity>

                <Styled.CartProductTotalPrice>
                  ${cartItem.price * cartItem.cartTotalQuantity}
                </Styled.CartProductTotalPrice>
              </Styled.CartItem>
            ))}
          </Styled.CartItems>

          <Styled.CartSummary>
            <Styled.ClearCartBtn>Clear Cart</Styled.ClearCartBtn>
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

                <Styled.CartCheckoutBtn>Check out</Styled.CartCheckoutBtn>

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
