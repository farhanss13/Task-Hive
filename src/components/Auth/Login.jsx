import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"
import logo from "../../assets/Logo.png"

const initialRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  department: "",
}

const Login = () => {
  const { login, registerEmployee } = useContext(AuthContext)
  const [mode, setMode] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [registerData, setRegisterData] = useState(initialRegister)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const onLogin = (event) => {
    event.preventDefault()
    setError("")
    setSuccess("")
    if (!email.trim() || !password.trim()) {
      setError("Please fill email and password.")
      return
    }
    const response = login(email, password)
    if (!response.ok) {
      setError(response.message)
    }
  }

  const onRegister = (event) => {
    event.preventDefault()
    setError("")
    setSuccess("")
    const { firstName, lastName, email: regEmail, password: regPass, confirmPassword } = registerData
    if (!firstName.trim() || !lastName.trim() || !regEmail.trim() || !regPass.trim()) {
      setError("Please fill all required fields.")
      return
    }
    if (regPass.length < 6) {
      setError("Password must be at least 6 characters.")
      return
    }
    if (regPass !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }
    const response = registerEmployee(registerData)
    if (!response.ok) {
      setError(response.message)
      return
    }
    setRegisterData(initialRegister)
    setMode("login")
    setSuccess(response.message)
  }

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 flex items-center justify-center bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      <div className="w-full max-w-3xl bg-white/95 dark:bg-slate-900/95 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-2xl animate-fade-in">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img src={logo} alt="Task Hive" className="h-12 w-12 rounded-lg object-cover" />
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Task Hive</h1>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-800 rounded-xl p-1 mb-6">
          <button
            onClick={() => {
              setMode("login")
              setError("")
            }}
            className={`w-1/2 py-2 rounded-lg text-sm font-semibold transition ${
              mode === "login"
                ? "bg-emerald-500 text-white"
                : "text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setMode("register")
              setError("")
            }}
            className={`w-1/2 py-2 rounded-lg text-sm font-semibold transition ${
              mode === "register"
                ? "bg-emerald-500 text-white"
                : "text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            Register
          </button>
        </div>

        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        {success && <p className="mb-4 text-sm text-emerald-500">{success}</p>}
        {mode === "login" && (
          <form onSubmit={onLogin} className="space-y-4">
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 text-slate-800 dark:text-white"
              type="email"
              placeholder="Enter email"
            />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 text-slate-800 dark:text-white"
              type="password"
              placeholder="Enter password"
            />
            <button className="w-full rounded-lg bg-emerald-500 hover:bg-emerald-600 transition text-white font-semibold py-3">
              Login
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Admin login: admin@example.com / admin123
            </p>
          </form>
        )}

        {mode === "register" && (
          <form onSubmit={onRegister} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              value={registerData.firstName}
              onChange={(event) => setRegisterData((prev) => ({ ...prev, firstName: event.target.value }))}
              className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 text-slate-800 dark:text-white"
              type="text"
              placeholder="First name"
            />
            <input
              value={registerData.lastName}
              onChange={(event) => setRegisterData((prev) => ({ ...prev, lastName: event.target.value }))}
              className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 text-slate-800 dark:text-white"
              type="text"
              placeholder="Last name"
            />
            <input
              value={registerData.email}
              onChange={(event) => setRegisterData((prev) => ({ ...prev, email: event.target.value }))}
              className="sm:col-span-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 text-slate-800 dark:text-white"
              type="email"
              placeholder="Email"
            />
            <input
              value={registerData.phone}
              onChange={(event) => setRegisterData((prev) => ({ ...prev, phone: event.target.value }))}
              className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 text-slate-800 dark:text-white"
              type="text"
              placeholder="Phone"
            />
            <input
              value={registerData.department}
              onChange={(event) => setRegisterData((prev) => ({ ...prev, department: event.target.value }))}
              className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 text-slate-800 dark:text-white"
              type="text"
              placeholder="Department"
            />
            <input
              value={registerData.password}
              onChange={(event) => setRegisterData((prev) => ({ ...prev, password: event.target.value }))}
              className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 text-slate-800 dark:text-white"
              type="password"
              placeholder="Password"
            />
            <input
              value={registerData.confirmPassword}
              onChange={(event) => setRegisterData((prev) => ({ ...prev, confirmPassword: event.target.value }))}
              className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 text-slate-800 dark:text-white"
              type="password"
              placeholder="Confirm password"
            />
            <button className="sm:col-span-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition text-white font-semibold py-3">
              Register Employee
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Login
