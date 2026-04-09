import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%]  overflow-x-auto flex justify-start items-center flex-nowrap gap-5 w-full mt-10 py-5 text-white'>
        {data.tasks.map((elem)=>{
          if(elem.active){
            return <AcceptTask/>
          }
          if(elem.completed){
            return <CompleteTask/>
          }
          if(elem.newTask){
            return <NewTask/>
          }
          if(elem.failed){
            return <FailedTask/>
          }
        })}
        
    </div>
  )
}

export default TaskList