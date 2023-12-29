import { useDispatch, useSelector } from "react-redux"
import * as Styled from "./Styled"
import { Link } from "react-router-dom"
import { logoutUser } from "../../Features/AuthSlice"
import { toast } from "react-toastify"

export const NavBar = () => {
  const dispatch = useDispatch()
  const { cartTotalQuantity } = useSelector((state) => state.cart)
  const auth = useSelector((state) => state.auth)
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
      {auth._id ? (
        <Styled.Logout
          onClick={() => {
            dispatch(logoutUser(null))
            toast.warning("Logged out!", { position: "bottom-left" })
          }}
        >
          Logout
        </Styled.Logout>
      ) : (
        <Styled.AuthLinks>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Styled.AuthLinks>
      )}
    </Styled.NavBar>
  )
}
