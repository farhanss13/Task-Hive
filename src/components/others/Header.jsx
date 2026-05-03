import { useContext, useMemo, useState } from "react"
import { AuthContext } from "../../context/authContext"
import logo from "../../assets/Logo.png"

const Header = () => {
  const { currentUser, logout, toggleTheme, theme, updateProfile } = useContext(AuthContext)
  const [showProfile, setShowProfile] = useState(false)
  const [error, setError] = useState("")
  const profile = currentUser?.profile

  const profileForm = useMemo(() => {
    if (!profile) {
      return {}
    }
    if (currentUser.role === "admin") {
      return {
        name: profile.name || "Admin",
        phone: profile.phone || "",
        image: profile.image || "",
      }
    }
    return {
      firstName: profile.firstName || "",
      lastName: profile.lastName || "",
      phone: profile.phone || "",
      department: profile.department || "",
      image: profile.image || "",
    }
  }, [currentUser, profile])
  const [formData, setFormData] = useState(profileForm)

  if (!profile) {
    return null
  }

  const onOpenProfile = () => {
    setFormData(profileForm)
    setError("")
    setShowProfile(true)
  }

  const onFileChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }
    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file.")
      return
    }
    if (file.size > 2 * 1024 * 1024) {
      setError("Profile image must be under 2MB.")
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      setFormData((prev) => ({ ...prev, image: reader.result }))
    }
    reader.readAsDataURL(file)
  }

  const onProfileSave = (event) => {
    event.preventDefault()
    const response = updateProfile(formData)
    if (!response.ok) {
      setError(response.message)
      return
    }
    setShowProfile(false)
  }

  const displayName = currentUser.role === "admin" ? profile.name : `${profile.firstName} ${profile.lastName}`
  const avatarLetter = displayName?.[0]?.toUpperCase() || "U"

  return (
    <>
      <nav className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur rounded-2xl border border-slate-200 dark:border-slate-700 p-4 mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Task Hive" className="h-11 w-11 rounded-lg object-cover" />
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Task Hive</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{currentUser.role} panel</p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-100 transition"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button
            onClick={onOpenProfile}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
          >
            {profile.image ? (
              <img src={profile.image} alt={displayName} className="h-7 w-7 rounded-full object-cover" />
            ) : (
              <span className="h-7 w-7 rounded-full bg-white/20 text-xs flex items-center justify-center">{avatarLetter}</span>
            )}
            Profile
          </button>
          <button onClick={logout} className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </nav>

      {showProfile && (
        <div className="fixed inset-0 bg-slate-900/70 p-4 z-50 flex items-center justify-center">
          <form
            onSubmit={onProfileSave}
            className="w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Edit Profile</h3>
            {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
            {currentUser.role === "admin" ? (
              <div className="grid gap-3">
                <input
                  value={formData.name || ""}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2.5 text-slate-800 dark:text-white"
                  placeholder="Name"
                />
                <input
                  value={formData.phone || ""}
                  onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                  className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2.5 text-slate-800 dark:text-white"
                  placeholder="Phone"
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  value={formData.firstName || ""}
                  onChange={(event) => setFormData((prev) => ({ ...prev, firstName: event.target.value }))}
                  className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2.5 text-slate-800 dark:text-white"
                  placeholder="First name"
                />
                <input
                  value={formData.lastName || ""}
                  onChange={(event) => setFormData((prev) => ({ ...prev, lastName: event.target.value }))}
                  className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2.5 text-slate-800 dark:text-white"
                  placeholder="Last name"
                />
                <input
                  value={formData.phone || ""}
                  onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                  className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2.5 text-slate-800 dark:text-white"
                  placeholder="Phone"
                />
                <input
                  value={formData.department || ""}
                  onChange={(event) => setFormData((prev) => ({ ...prev, department: event.target.value }))}
                  className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2.5 text-slate-800 dark:text-white"
                  placeholder="Department"
                />
              </div>
            )}
            <div className="mt-4">
              <label className="text-sm text-slate-600 dark:text-slate-300">Profile image</label>
              <input type="file" accept="image/*" onChange={onFileChange} className="mt-2 w-full text-sm text-slate-600 dark:text-slate-300" />
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button type="button" onClick={() => setShowProfile(false)} className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default Header