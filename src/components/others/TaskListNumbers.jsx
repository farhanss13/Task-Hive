
const TaskListNumbers = () => {
  return (
    <div className="flex justify-between mt-10 gap-5 ">
        <div className="bg-red-400 w-[45%] text-white rounded-xl py-6 px-9 ">
            <h2 className="font-bold text-3xl">0</h2>
            <h3 className="font-semibold text-xl">New Task</h3>
        </div>
        <div className="bg-blue-400 w-[45%] text-white rounded-xl py-6 px-9 ">
            <h2 className="font-bold text-3xl">0</h2>
            <h3 className="font-semibold text-xl">New Task</h3>
        </div>
        <div className="bg-green-400 w-[45%] text-white rounded-xl py-6 px-9 ">
            <h2 className="font-bold text-3xl">0</h2>
            <h3 className="font-semibold text-xl">New Task</h3>
        </div>
        <div className="bg-purple-400 w-[45%] text-white rounded-xl py-6 px-9 ">
            <h2 className="font-bold text-3xl">0</h2>
            <h3 className="font-semibold text-xl">New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers