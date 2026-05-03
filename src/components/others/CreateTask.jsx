import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"

const initialForm = {
  title: "",
  description: "",
  date: "",
  category: "",
  priority: "Medium",
  assigneeEmail: "",
}

const CreateTask = () => {
  const { createTask, employees } = useContext(AuthContext)
  const [formData, setFormData] = useState(initialForm)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const submitTask = (event) => {
    event.preventDefault()
    setError("")
    setSuccess("")
    const required = ["title", "description", "date", "category", "assigneeEmail"]
    const hasEmpty = required.some((field) => !formData[field].trim())
    if (hasEmpty) {
      setError("Please fill all fields.")
      return
    }
    const response = createTask(formData)
    if (!response.ok) {
      setError(response.message)
      return
    }
    setSuccess(response.message)
    setFormData(initialForm)
  }

  return (
    <section className="mt-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm">
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Create Task</h3>
      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
      {success && <p className="text-sm text-emerald-500 mb-3">{success}</p>}
      <form onSubmit={submitTask} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="space-y-4">
          <input
            value={formData.title}
            onChange={(event) => setFormData((prev) => ({ ...prev, title: event.target.value }))}
            type="text"
            placeholder="Task title"
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            value={formData.date}
            onChange={(event) => setFormData((prev) => ({ ...prev, date: event.target.value }))}
            type="date"
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            value={formData.category}
            onChange={(event) => setFormData((prev) => ({ ...prev, category: event.target.value }))}
            type="text"
            placeholder="Category"
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <select
            value={formData.priority}
            onChange={(event) => setFormData((prev) => ({ ...prev, priority: event.target.value }))}
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <option className="text-black" value="Low">
              Low
            </option>
            <option className="text-black" value="Medium">
              Medium
            </option>
            <option className="text-black" value="High">
              High
            </option>
          </select>
          <select
            value={formData.assigneeEmail}
            onChange={(event) => setFormData((prev) => ({ ...prev, assigneeEmail: event.target.value }))}
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <option className="text-black" value="">
              Assign to employee
            </option>
            {employees.map((employee) => (
              <option className="text-black" key={employee.id} value={employee.email}>
                {employee.firstName} {employee.lastName} ({employee.email})
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-4">
          <textarea
            value={formData.description}
            onChange={(event) => setFormData((prev) => ({ ...prev, description: event.target.value }))}
            rows="9"
            placeholder="Task description"
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
          />
          <button type="submit" className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition">
            Create Task
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreateTask