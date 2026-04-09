import Header from "../others/Header"
import TaskListNumbers from "../others/TaskListNumbers"
import TaskList from "../TaskList/TaskList"
const EmployeeDashboard = ({data}) => {
  return (
    <div>
      <div className="p-10 bg-[#1C1C1C] h-screen">
    <Header data = {data}/>
    <TaskListNumbers data = {data}/>
    <TaskList data = {data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard