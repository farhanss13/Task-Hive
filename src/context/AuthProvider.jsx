import { useEffect, useState } from "react"
import { AuthContext } from "./authContext"
import { clearSession, getAppData, getSession, getTheme, initializeLocalStorage, saveAppData, saveSession, saveTheme } from "../utilities/LocalStorage"

const withCounts = (employee) => {
  const taskCounts = employee.tasks.reduce(
    (acc, task) => {
      acc[task.status] += 1
      return acc
    },
    { new: 0, accepted: 0, completed: 0, failed: 0 },
  )

  return { ...employee, taskCounts }
}

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    initializeLocalStorage()
    const appData = getAppData()
    return {
      admin: appData.admin,
      employees: appData.employees.map(withCounts),
    }
  })
  const [currentUser, setCurrentUser] = useState(() => {
    const appData = getAppData()
    const session = getSession()
    if (!session) {
      return null
    }
    if (session.role === "admin") {
      return { role: "admin", profile: appData.admin }
    }
    const employee = appData.employees.find((emp) => emp.id === session.id)
    if (employee) {
      return { role: "employee", profile: withCounts(employee) }
    }
    return null
  })
  const [theme, setTheme] = useState(() => getTheme())

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    saveTheme(theme)
  }, [theme])

  const persistEmployees = (employees) => {
    const nextData = { ...data, employees: employees.map((emp) => ({ ...emp })) }
    setData({
      ...nextData,
      employees: nextData.employees.map(withCounts),
    })
    saveAppData(nextData)
    if (currentUser?.role === "employee") {
      const refreshed = nextData.employees.find((emp) => emp.id === currentUser.profile.id)
      if (refreshed) {
        setCurrentUser({ role: "employee", profile: withCounts(refreshed) })
      }
    }
  }

  const login = (email, password) => {
    const normalizedEmail = email.trim().toLowerCase()
    if (normalizedEmail === data.admin?.email && password === data.admin?.password) {
      setCurrentUser({ role: "admin", profile: data.admin })
      saveSession({ role: "admin" })
      return { ok: true }
    }
    const employee = data.employees.find(
      (emp) => emp.email.toLowerCase() === normalizedEmail && emp.password === password,
    )
    if (!employee) {
      return { ok: false, message: "Invalid email or password." }
    }
    const profile = withCounts(employee)
    setCurrentUser({ role: "employee", profile })
    saveSession({ role: "employee", id: employee.id })
    return { ok: true }
  }

  const registerEmployee = (payload) => {
    const normalizedEmail = payload.email.trim().toLowerCase()
    if (data.admin?.email === normalizedEmail || data.employees.some((emp) => emp.email.toLowerCase() === normalizedEmail)) {
      return { ok: false, message: "Email already exists." }
    }
    const nextEmployee = {
      id: Date.now(),
      firstName: payload.firstName.trim(),
      lastName: payload.lastName.trim(),
      email: normalizedEmail,
      password: payload.password,
      phone: payload.phone.trim(),
      department: payload.department.trim(),
      image: "",
      tasks: [],
    }
    const nextEmployees = [...data.employees, nextEmployee]
    persistEmployees(nextEmployees)
    return { ok: true, message: "Registration successful. Please login." }
  }

  const logout = () => {
    setCurrentUser(null)
    clearSession()
  }

  const createTask = (taskPayload) => {
    const assignee = data.employees.find((emp) => emp.email.toLowerCase() === taskPayload.assigneeEmail.toLowerCase())
    if (!assignee) {
      return { ok: false, message: "Employee email not found." }
    }
    const nextEmployees = data.employees.map((emp) => {
      if (emp.id !== assignee.id) {
        return emp
      }
      return {
        ...emp,
        tasks: [
          ...emp.tasks,
          {
            id: Date.now(),
            title: taskPayload.title.trim(),
            description: taskPayload.description.trim(),
            date: taskPayload.date,
            category: taskPayload.category.trim(),
            priority: taskPayload.priority,
            status: "new",
          },
        ],
      }
    })
    persistEmployees(nextEmployees)
    return { ok: true, message: "Task created successfully." }
  }

  const updateTaskStatus = (taskId, status) => {
    if (!["new", "accepted", "completed", "failed"].includes(status)) {
      return
    }
    const nextEmployees = data.employees.map((emp) => {
      if (emp.id !== currentUser?.profile?.id) {
        return emp
      }
      return {
        ...emp,
        tasks: emp.tasks.map((task) => (task.id === taskId ? { ...task, status } : task)),
      }
    })
    persistEmployees(nextEmployees)
  }

  const updateProfile = (payload) => {
    if (!currentUser) {
      return { ok: false, message: "No active user session." }
    }
    if (currentUser.role === "admin") {
      const admin = {
        ...data.admin,
        name: payload.name.trim(),
        phone: payload.phone.trim(),
        image: payload.image ?? data.admin.image,
      }
      const nextData = { ...data, admin }
      setData(nextData)
      saveAppData(nextData)
      setCurrentUser({ role: "admin", profile: admin })
      return { ok: true, message: "Profile updated." }
    }
    const nextEmployees = data.employees.map((emp) =>
      emp.id === currentUser.profile.id
        ? {
            ...emp,
            firstName: payload.firstName.trim(),
            lastName: payload.lastName.trim(),
            phone: payload.phone.trim(),
            department: payload.department.trim(),
            image: payload.image ?? emp.image,
          }
        : emp,
    )
    persistEmployees(nextEmployees)
    return { ok: true, message: "Profile updated." }
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  const value = {
    currentUser,
    employees: data.employees,
    admin: data.admin,
    theme,
    login,
    registerEmployee,
    logout,
    createTask,
    updateTaskStatus,
    updateProfile,
    toggleTheme,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider