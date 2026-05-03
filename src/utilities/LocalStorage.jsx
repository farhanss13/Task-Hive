const STORAGE_KEYS = {
  APP_DATA: "taskHiveData",
  SESSION: "taskHiveSession",
  THEME: "taskHiveTheme",
}

const defaultAppData = {
  admin: {
    email: "admin@example.com",
    password: "admin123",
    name: "Admin",
    phone: "",
    image: "",
  },
  employees: [],
}

export const initializeLocalStorage = () => {
  const existing = localStorage.getItem(STORAGE_KEYS.APP_DATA)
  if (!existing) {
    localStorage.setItem(STORAGE_KEYS.APP_DATA, JSON.stringify(defaultAppData))
  }
}

export const getAppData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.APP_DATA)
    return data ? JSON.parse(data) : defaultAppData
  } catch {
    return defaultAppData
  }
}

export const saveAppData = (data) => {
  localStorage.setItem(STORAGE_KEYS.APP_DATA, JSON.stringify(data))
}

export const getSession = () => {
  try {
    const session = localStorage.getItem(STORAGE_KEYS.SESSION)
    return session ? JSON.parse(session) : null
  } catch {
    return null
  }
}

export const saveSession = (session) => {
  localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(session))
}

export const clearSession = () => {
  localStorage.removeItem(STORAGE_KEYS.SESSION)
}

export const getTheme = () => localStorage.getItem(STORAGE_KEYS.THEME) || "dark"

export const saveTheme = (theme) => {
  localStorage.setItem(STORAGE_KEYS.THEME, theme)
}