import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext, useEffect, useState } from 'react'
import { setLocalStorage } from './utilities/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  useEffect(()=>{
    setLocalStorage()
  },)
  const [user,setUser]=useState(null)
  const authData = useContext(AuthContext)

  const handleLogin = (email,password)=>{
    if(email =="admin@me.com" && password =="123"){
      setUser('admin')
    } else if(authData && authData.employees.find((e)=>email == e.email && e.password == password)){
      setUser('employee')
    } else{
      alert("Invalid Credentials!")
    }
  }
  return (
    <>
    { !user?<Login handleLogin={handleLogin} />:" "}
    {user=='admin'? <AdminDashboard/> :<EmployeeDashboard/>}
  
    {/* continue from 1:59:02 and add the useeffect hook */}
    </>
  )
}

export default App
