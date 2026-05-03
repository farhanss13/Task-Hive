import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({ data }) => {
  return (
    <section id="tasklist" className="overflow-x-auto flex items-stretch gap-5 w-full mt-6 py-2">
      {data.tasks.map((task) => {
        if (task.status === "accepted") {
          return <AcceptTask key={task.id} task={task} />
        }
        if (task.status === "completed") {
          return <CompleteTask key={task.id} task={task} />
        }
        if (task.status === "failed") {
          return <FailedTask key={task.id} task={task} />
        }
        return <NewTask key={task.id} task={task} />
      })}
      {data.tasks.length === 0 && (
        <div className="w-full rounded-xl border border-slate-300 dark:border-slate-700 p-6 text-center text-slate-500 dark:text-slate-400">
          No tasks available yet.
        </div>
      )}
    </section>
  )
}

export default TaskList