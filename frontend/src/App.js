import "./App.css"
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom"
import { NavBar } from "./Components/NavBar/NavBar"
import { Cart } from "./Components/Cart/Cart"
import { Home } from "./Components/Home/Home"
import { NotFound } from "./Components/NotFound/Notfound"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
