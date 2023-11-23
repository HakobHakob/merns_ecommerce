import * as Styled from "./Styled"
import { Link } from "react-router-dom"

export const NavBar = () => {
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
            <span>3</span>
          </Styled.BagQuantitySpan>
        </Styled.NavBag>
      </Link>
    </Styled.NavBar>
  )
}
