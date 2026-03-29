import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { setLocalStorage } from './utilities/LocalStorage'

function App() {

  useEffect(()=>{
    setLocalStorage()
  },)

  return (
    <>
    <Login/>
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
  
  {/* start from 1:30:14 */}

    </>
  )
}

export default App
