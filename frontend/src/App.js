import "./App.css"
import "react-toastify/dist/ReactToastify.css"

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { NavBar } from "./Components/NavBar/NavBar"
import { Cart } from "./Components/Cart/Cart"
import { Home } from "./Components/Home/Home"
import { NotFound } from "./Components/NotFound/Notfound"
import { ToastContainer } from "react-toastify"
import { Register } from "./Components/Auth/Register/Register"
import { Login } from "./Components/Auth/Login/Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart"  element={<Cart />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
