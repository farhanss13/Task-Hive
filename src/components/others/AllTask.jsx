import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

const statusColors = {
  new: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300",
  accepted: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
  completed: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
  failed: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
}

const AllTask = () => {
  const { employees } = useContext(AuthContext)
  const rows = employees.flatMap((employee) =>
    employee.tasks.map((task) => ({
      employeeName: `${employee.firstName} ${employee.lastName}`,
      employeeEmail: employee.email,
      task,
    })),
  )

  return (
    <section className="mt-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">Employee Tasks</h3>
        <span className="text-sm text-slate-500 dark:text-slate-400">{rows.length} total</span>
      </div>
      <div className="overflow-auto max-h-[26rem] rounded-xl border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 sticky top-0">
            <tr>
              <th className="px-4 py-3">Employee</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Task</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.employeeEmail}-${row.task.id}`} className="border-t border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
                <td className="px-4 py-3">{row.employeeName}</td>
                <td className="px-4 py-3">{row.employeeEmail}</td>
                <td className="px-4 py-3">{row.task.title}</td>
                <td className="px-4 py-3">{row.task.date}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${statusColors[row.task.status]}`}>{row.task.status}</span>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan="5" className="px-4 py-6 text-center text-slate-500 dark:text-slate-400">
                  No tasks assigned yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AllTask