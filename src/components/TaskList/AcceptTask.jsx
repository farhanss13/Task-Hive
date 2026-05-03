import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

const AcceptTask = ({ task }) => {
  const { updateTaskStatus } = useContext(AuthContext)

  return (
    <article className="shrink-0 bg-blue-500 text-white w-[320px] rounded-2xl p-5 shadow-md">
      <div className="flex justify-between items-center">
        <span className="bg-white/20 text-xs px-3 py-1 rounded-full">{task.priority}</span>
        <span className="text-xs">{task.date}</span>
      </div>
      <h2 className="text-xl font-bold mt-3">{task.title}</h2>
      <p className="mt-2 text-sm text-white/90">{task.description}</p>
      <p className="mt-3 text-xs uppercase tracking-wider">{task.category}</p>
      <div className="flex justify-between mt-4 gap-2">
        <button
          onClick={() => updateTaskStatus(task.id, "completed")}
          className="bg-emerald-500 text-white text-sm font-semibold py-1.5 px-3 rounded-lg hover:bg-emerald-600 transition"
        >
          Complete
        </button>
        <button
          onClick={() => updateTaskStatus(task.id, "failed")}
          className="bg-red-500 text-white text-sm font-semibold py-1.5 px-3 rounded-lg hover:bg-red-600 transition"
        >
          Mark Failed
        </button>
      </div>
    </article>
  )
}

export default AcceptTask