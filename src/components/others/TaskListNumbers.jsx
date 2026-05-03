const TaskListNumbers = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-6 gap-4">
      <div className="bg-amber-500 text-white rounded-xl py-5 px-6">
        <h2 className="font-bold text-3xl">{data.taskCounts.new}</h2>
        <h3 className="font-semibold text-base">New Task</h3>
      </div>
      <div className="bg-blue-500 text-white rounded-xl py-5 px-6">
        <h2 className="font-bold text-3xl">{data.taskCounts.accepted}</h2>
        <h3 className="font-semibold text-base">Accepted Task</h3>
      </div>
      <div className="bg-emerald-500 text-white rounded-xl py-5 px-6">
        <h2 className="font-bold text-3xl">{data.taskCounts.completed}</h2>
        <h3 className="font-semibold text-base">Completed Task</h3>
      </div>
      <div className="bg-rose-500 text-white rounded-xl py-5 px-6">
        <h2 className="font-bold text-3xl">{data.taskCounts.failed}</h2>
        <h3 className="font-semibold text-base">Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers