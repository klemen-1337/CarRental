import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./pages/Login/Auth"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App