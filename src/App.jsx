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
  const [loggedInUser, setLoggedInUser] = useState(null)
  const authData = useContext(AuthContext)
  useEffect(() => {
    if(authData){
      const loggedInUser=localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  }, [authData])
  

  const handleLogin = (email,password)=>{
    if(email =="admin@me.com" && password =="123"){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
    } else if(authData){
      const employee = authData.employees.find((e)=>email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUser(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:"employee"}))
      }
      

    } else{
      alert("Invalid Credentials!")
    }
  }
  return (
    <>
    { !user?<Login handleLogin={handleLogin} />:" "}
    {user=='admin'? <AdminDashboard/> : (user=="employee"?<EmployeeDashboard data = {loggedInUser}/> : null)}
  
    {/* continue from 2:37:20  */}
    </>
  )
}

export default App
