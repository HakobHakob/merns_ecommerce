import { useSelector } from "react-redux"
import * as Styled from "./Styled"
import { Link } from "react-router-dom"

export const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart)
  return (
    <Styled.NavBar>
      <Link to="/">
        <Styled.NavBarHeading>OnlineShop</Styled.NavBarHeading>
      </Link>

      <Link to="/cart">
        <Styled.NavBag>
          <Styled.BagSpan className="material-symbols-outlined">
            shopping_bag
          </Styled.BagSpan>
          <Styled.BagQuantitySpan>
            <span>{cartTotalQuantity}</span>
          </Styled.BagQuantitySpan>
        </Styled.NavBag>
      </Link>
    </Styled.NavBar>
  )
}
