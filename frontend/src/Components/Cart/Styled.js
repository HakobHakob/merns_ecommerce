import styled from "styled-components"
const divMainStyle = `
display: flex;
justify-content: space-between;
align-items: center;
`
const cartTitlesMainStyle = `
font-size: 14px;
font-weight: 400;
text-transform: uppercase;
flex: 1;
`

const CartProductBn = `
color: #fff;
  border-radius: 5px;
  padding: 10px 15px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  border: none;
  letter-spacing: 1.15px;
`

export const CartContainer = styled.div`
  padding: 2rem 4rem;
`
export const CartContainerHeading = styled.h2`
  font-weight: 400;
  font-size: 30px;
  text-align: center;
`

export const CartEmpty = styled.div`
  ${divMainStyle};
  justify-content: flex-start;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0;
  font-size: 20px;
  color: rgb(84, 84, 84);
  margin: 30px 0;
`

export const StartShoping = styled.div`
  ${divMainStyle};
  justify-content: flex-start;
  align-items: unset;
  gap: 5px;
`

export const Titles = styled.div`
  margin: 2rem 0 1rem 0;
  display: flex;
  gap: 5px;
  width: 100%;
`

export const ProductTitle = styled.h3`
  ${cartTitlesMainStyle};
  flex: 3;
`
export const ProductPrice = styled.h3`
  ${cartTitlesMainStyle};
`
export const ProductQuantity = styled.h3`
  ${cartTitlesMainStyle};
`
export const ProductTotal = styled.h3`
  ${cartTitlesMainStyle};
  text-align: end;
`

export const CartItems = styled.div`
  margin: 2rem 0 1rem 0;
`
export const CartItem = styled.div`
  border-top: 1px solid rgb(187, 187, 187);
  padding: 1rem 0;
  display: flex;
  align-items: center;
  gap: 5px;
`

export const CartProduct = styled.div`
  flex: 3;
  display: flex;
  gap: 16px;
`

export const CartProductImg = styled.img`
  width: 100px;
  max-width: 100%;
`
export const CartDescription = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
`
export const CartDesciptionHeading = styled.h3``
export const CartDescriptionText = styled.p``
export const CartRemove = styled.button`
  ${CartProductBn};
  background: rgb(240, 116, 39);

  &:hover {
    background: rgba(255, 0, 0, 1);
  }
`

export const CartProductPrice = styled.div`
  flex: 1;
`

export const CartProductQuantity = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  max-width: 100%;
  gap: 10px;
  border-radius: 5px;
`
export const CartCount = styled.div`
  flex: 1;
  text-align: center;
`
export const CartDecrement = styled.button`
  ${CartProductBn};

  background: rgb(6, 14, 131);
  background: linear-gradient(
    0deg,
    rgba(6, 14, 131, 1) 0%,
    rgba(12, 25, 180, 1) 100%
  );
  &:hover {
    background: rgb(0, 3, 255);
    background: linear-gradient(
      0deg,
      rgba(0, 3, 255, 1) 0%,
      rgba(2, 126, 251, 1) 100%
    );
  }
`
export const CartIncrement = styled(CartDecrement)``

export const CartProductTotalPrice = styled.div`
  flex: 1;
  text-align: end;
  font-weight: 700;
`

export const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid rgb(187, 187, 187);
  padding-top: 2rem;
`

export const ClearCartBtn = styled(CartRemove)``

export const CartCheckout = styled.div`
  width: 270px;
  max-width: 100%;
`

export const CartSubtotal = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 25px;
`

export const CartSubtotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CartSubtotalName = styled.span``
export const CartSubtotalAmount = styled.span`
  font-weight: 700;
`
export const CartTotalMsg = styled.p`
  font-size: 12px;
  font-weight: 200;
  margin: 0.5rem 0;
`

export const CartCheckoutBtn = styled.button`
  ${CartProductBn};
  background-color: #4dccc6;
  width: 100%;
  margin: 10px 0;
  &:hover {
    background-color: #89d8d3;
  }
`

export const CartLoginBtn = styled(CartCheckoutBtn)`
background-color: yellow;
color: black;

`
export const ContinueShoping = styled.div`
  ${divMainStyle};
  align-items: unset;
`

export const ContinueShopingSpanArrow = styled.span`
  color: black;
`
export const ContinueShopingSpan = styled.span`
  color: black;
`
