import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import EditInfo from "./pages/EditInfo"
import { UseProvider } from "./services/UseContext"


function App() {


  return (
      <UseProvider>
        <BrowserRouter>

          <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit" element={<EditInfo />} />

          </Routes>

        </BrowserRouter>
      </UseProvider>
  )
}

export default App
