import { reactive, readonly } from 'vue'

// Simulated user database
const MOCK_USERS = [
  { email: 'user@simen.com', password: 'password123', name: 'John Doe', avatar: 'JD' },
  { email: 'admin@simen.com', password: 'admin123', name: 'Admin User', avatar: 'AU' },
]

const state = reactive({
  user: JSON.parse(localStorage.getItem('simen_user') || 'null'),
  isLoggedIn: !!localStorage.getItem('simen_user'),
  showLoginModal: false,
  showAccountModal: false,
  loginError: '',
  registerError: '',
  registerSuccess: false,
})

export const authStore = {
  state: readonly(state),

  openLogin() {
    state.showLoginModal = true
    state.showAccountModal = false
    state.loginError = ''
    state.registerError = ''
    state.registerSuccess = false
  },

  closeLogin() {
    state.showLoginModal = false
    state.loginError = ''
  },

  openAccount() {
    state.showAccountModal = true
  },

  closeAccount() {
    state.showAccountModal = false
  },

  login(email, password) {
    const found = MOCK_USERS.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )
    if (found) {
      const userData = { email: found.email, name: found.name, avatar: found.avatar }
      state.user = userData
      state.isLoggedIn = true
      state.loginError = ''
      state.showLoginModal = false
      localStorage.setItem('simen_user', JSON.stringify(userData))
      return true
    } else {
      state.loginError = 'Invalid email or password. Please try again.'
      return false
    }
  },

  register(name, email, password) {
    const exists = MOCK_USERS.find(u => u.email.toLowerCase() === email.toLowerCase())
    if (exists) {
      state.registerError = 'An account with this email already exists.'
      return false
    }
    const avatar = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    const newUser = { email, password, name, avatar }
    MOCK_USERS.push(newUser)
    const userData = { email, name, avatar }
    state.user = userData
    state.isLoggedIn = true
    state.registerError = ''
    state.registerSuccess = true
    state.showLoginModal = false
    localStorage.setItem('simen_user', JSON.stringify(userData))
    return true
  },

  logout() {
    state.user = null
    state.isLoggedIn = false
    state.showAccountModal = false
    localStorage.removeItem('simen_user')
  },
}
