import Header from "../others/Header"
import CreateTask from "../others/CreateTask"
import AllTask from "../others/AllTask"

const AdminDashboard = () => {
  return (
    <section className="min-h-screen w-full bg-slate-100 dark:bg-slate-950 p-4 sm:p-8 transition-colors duration-300">
      <Header />
      <CreateTask />
      <AllTask />
    </section>
  )
}

export default AdminDashboard