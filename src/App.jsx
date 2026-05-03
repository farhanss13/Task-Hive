import { useContext } from "react"
import "./App.css"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./context/authContext"

function App() {
  const { currentUser } = useContext(AuthContext)

  if (!currentUser) {
    return <Login />
  }

  return currentUser.role === "admin" ? <AdminDashboard /> : <EmployeeDashboard />
}

export default App
