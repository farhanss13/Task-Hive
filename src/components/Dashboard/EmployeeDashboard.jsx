import { useContext } from "react"
import Header from "../others/Header"
import TaskListNumbers from "../others/TaskListNumbers"
import TaskList from "../TaskList/TaskList"
import { AuthContext } from "../../context/authContext"

const EmployeeDashboard = () => {
  const { currentUser } = useContext(AuthContext)
  const employee = currentUser?.profile

  if (!employee) {
    return null
  }

  return (
    <section className="min-h-screen p-4 sm:p-8 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <TaskListNumbers data={employee} />
      <TaskList data={employee} />
    </section>
  )
}

export default EmployeeDashboard