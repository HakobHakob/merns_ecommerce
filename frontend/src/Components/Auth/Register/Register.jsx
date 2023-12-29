import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../../Features/AuthSlice"

import * as Styled from "./Styled"
import { useNavigate } from "react-router-dom"

export const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth)
  // console.log("auth", auth)

  useEffect(() => {
    if (auth._id) {
      navigate("/cart")
    }
  }, [auth._id, navigate])

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(registerUser(user))
  }
  return (
    <>
      <Styled.RegisterForm onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>
          {auth.registerStatus === "pending" ? "Submitting" : "Register"}
        </button>

        {auth.registerStatus === "rejected" ? (
          <p>{auth.registerError}</p>
        ) : null}
      </Styled.RegisterForm>
    </>
  )
}
