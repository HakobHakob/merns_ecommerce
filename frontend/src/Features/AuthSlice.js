import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { url } from "./Api"
import { jwtDecode } from "jwt-decode"

const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
}

//Create asyncThunk function. Action creator for user registration
export const registerUser = createAsyncThunk(
  // authSlice.name + / + registerUser "asyncthunk name"
  "auth/registerUser",
  //values -from UI, rejectWithValue - create error for initialState.registerError
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/register`, {
        name: user.name,
        email: user.email,
        password: user.password,
      })

      localStorage.setItem("token", token.data)

      return token.data
    } catch (error) {
      console.log(error.response.data)
      return rejectWithValue(error.response.data)
    }
  }
)
export const loginUser = createAsyncThunk(
  // authSlice.name + / + registerUser "asyncthunk name"
  "auth/loginUser",
  //values -from UI, rejectWithValue - create error for initialState.registerError
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/login`, {
        email: user.email,
        password: user.password,
      })

      localStorage.setItem("token", token.data)

      return token.data
    } catch (error) {
      console.log(error.response.data)
      return rejectWithValue(error.response.data)
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      // Access token from localstorage
      const token = state.token
      if (token) {
        // Decode token from localstorage
        const user = jwtDecode(token)

        // Update the state
        return {
          ...state,
          token,
          name: user.name,
          email: user.email,
          _id: user._id,
          registerStatus: "success",
          userLoaded: true,
        }
      }
    },
    logoutUser(state, action) {
      localStorage.removeItem("token")

      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" }
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload)

        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          registerStatus: "success",
        }
      } else return state
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      }
    })


    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" }
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload)

        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          loginStatus: "success",
        }
      } else return state
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      }
    })


  },
})

export const { loadUser, logoutUser } = authSlice.actions
export default authSlice.reducer
