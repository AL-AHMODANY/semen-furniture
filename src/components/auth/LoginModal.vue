<script setup>
import { ref, watch } from 'vue'
import { authStore } from '../../store/auth.js'

const tab = ref('login') // 'login' | 'register'

// Login fields
const loginEmail = ref('')
const loginPassword = ref('')
const showLoginPwd = ref(false)
const loginLoading = ref(false)

// Register fields
const regName = ref('')
const regEmail = ref('')
const regPassword = ref('')
const regConfirm = ref('')
const showRegPwd = ref(false)
const regLoading = ref(false)
const regError = ref('')

// Reset on tab switch
watch(tab, () => {
  loginEmail.value = ''
  loginPassword.value = ''
  regName.value = ''
  regEmail.value = ''
  regPassword.value = ''
  regConfirm.value = ''
  regError.value = ''
  authStore.state.loginError && (authStore.closeLogin(), authStore.openLogin())
})

async function handleLogin() {
  if (!loginEmail.value || !loginPassword.value) return
  loginLoading.value = true
  await new Promise(r => setTimeout(r, 600)) // simulate network
  authStore.login(loginEmail.value, loginPassword.value)
  loginLoading.value = false
}

async function handleRegister() {
  regError.value = ''
  if (!regName.value || !regEmail.value || !regPassword.value) {
    regError.value = 'All fields are required.'
    return
  }
  if (regPassword.value !== regConfirm.value) {
    regError.value = 'Passwords do not match.'
    return
  }
  if (regPassword.value.length < 6) {
    regError.value = 'Password must be at least 6 characters.'
    return
  }
  regLoading.value = true
  await new Promise(r => setTimeout(r, 600))
  authStore.register(regName.value, regEmail.value, regPassword.value)
  regLoading.value = false
}

function close() {
  authStore.closeLogin()
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="authStore.state.showLoginModal"
        class="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        @click.self="close"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="close"></div>

        <!-- Modal box -->
        <div class="relative bg-white w-full max-w-[420px] shadow-2xl z-10">

          <!-- Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-[#e8e8e8]">
            <h2 class="text-[15px] font-black text-[#111] uppercase tracking-wide" style="font-family: 'Arial Black', Arial, sans-serif;">
              {{ tab === 'login' ? 'Sign In' : 'Create Account' }}
            </h2>
            <button
              @click="close"
              class="text-[#aaa] hover:text-[#c0392b] transition-colors p-1"
              aria-label="Close"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Tabs -->
          <div class="flex border-b border-[#e8e8e8]">
            <button
              @click="tab = 'login'"
              :class="[
                'flex-1 py-3 text-[12px] font-bold uppercase tracking-wide transition-colors',
                tab === 'login'
                  ? 'text-[#c0392b] border-b-2 border-[#c0392b] -mb-px bg-white'
                  : 'text-[#888] hover:text-[#333] bg-[#fafafa]'
              ]"
            >
              Sign In
            </button>
            <button
              @click="tab = 'register'"
              :class="[
                'flex-1 py-3 text-[12px] font-bold uppercase tracking-wide transition-colors',
                tab === 'register'
                  ? 'text-[#c0392b] border-b-2 border-[#c0392b] -mb-px bg-white'
                  : 'text-[#888] hover:text-[#333] bg-[#fafafa]'
              ]"
            >
              Register
            </button>
          </div>

          <!-- ── LOGIN FORM ── -->
          <div v-if="tab === 'login'" class="px-6 py-6">
            <p class="text-[12px] text-[#888] mb-5">
              Demo: <span class="font-bold text-[#555]">user@simen.com</span> / <span class="font-bold text-[#555]">password123</span>
            </p>

            <!-- Error -->
            <div v-if="authStore.state.loginError" class="flex items-center gap-2 bg-[#fff5f5] border border-[#f5c6c6] text-[#c0392b] text-[12px] px-3 py-2.5 mb-4">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {{ authStore.state.loginError }}
            </div>

            <div class="space-y-4">
              <!-- Email -->
              <div>
                <label class="block text-[11px] font-bold text-[#555] uppercase tracking-wide mb-1.5">Email Address *</label>
                <input
                  v-model="loginEmail"
                  type="email"
                  placeholder="Enter your email"
                  class="w-full border border-[#ddd] px-3 py-2.5 text-[13px] text-[#333] outline-none focus:border-[#c0392b] transition-colors placeholder:text-[#bbb]"
                  @keyup.enter="handleLogin"
                />
              </div>

              <!-- Password -->
              <div>
                <label class="block text-[11px] font-bold text-[#555] uppercase tracking-wide mb-1.5">Password *</label>
                <div class="relative">
                  <input
                    v-model="loginPassword"
                    :type="showLoginPwd ? 'text' : 'password'"
                    placeholder="Enter your password"
                    class="w-full border border-[#ddd] px-3 py-2.5 pr-10 text-[13px] text-[#333] outline-none focus:border-[#c0392b] transition-colors placeholder:text-[#bbb]"
                    @keyup.enter="handleLogin"
                  />
                  <button
                    type="button"
                    @click="showLoginPwd = !showLoginPwd"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa] hover:text-[#555] transition-colors"
                  >
                    <svg v-if="!showLoginPwd" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Forgot password -->
              <div class="flex justify-end">
                <a href="#" class="text-[11px] text-[#888] hover:text-[#c0392b] transition-colors">Forgot your password?</a>
              </div>

              <!-- Submit -->
              <button
                @click="handleLogin"
                :disabled="loginLoading || !loginEmail || !loginPassword"
                class="w-full bg-[#222] text-white text-[12px] font-bold uppercase tracking-[1px] py-3 hover:bg-[#c0392b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg v-if="loginLoading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                {{ loginLoading ? 'Signing in...' : 'Sign In' }}
              </button>
            </div>

            <p class="text-center text-[12px] text-[#888] mt-5">
              Don't have an account?
              <button @click="tab = 'register'" class="text-[#c0392b] font-bold hover:underline">Register here</button>
            </p>
          </div>

          <!-- ── REGISTER FORM ── -->
          <div v-else class="px-6 py-6">

            <!-- Error -->
            <div v-if="regError || authStore.state.registerError" class="flex items-center gap-2 bg-[#fff5f5] border border-[#f5c6c6] text-[#c0392b] text-[12px] px-3 py-2.5 mb-4">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {{ regError || authStore.state.registerError }}
            </div>

            <div class="space-y-4">
              <!-- Full name -->
              <div>
                <label class="block text-[11px] font-bold text-[#555] uppercase tracking-wide mb-1.5">Full Name *</label>
                <input
                  v-model="regName"
                  type="text"
                  placeholder="Your full name"
                  class="w-full border border-[#ddd] px-3 py-2.5 text-[13px] text-[#333] outline-none focus:border-[#c0392b] transition-colors placeholder:text-[#bbb]"
                />
              </div>

              <!-- Email -->
              <div>
                <label class="block text-[11px] font-bold text-[#555] uppercase tracking-wide mb-1.5">Email Address *</label>
                <input
                  v-model="regEmail"
                  type="email"
                  placeholder="Enter your email"
                  class="w-full border border-[#ddd] px-3 py-2.5 text-[13px] text-[#333] outline-none focus:border-[#c0392b] transition-colors placeholder:text-[#bbb]"
                />
              </div>

              <!-- Password -->
              <div>
                <label class="block text-[11px] font-bold text-[#555] uppercase tracking-wide mb-1.5">Password *</label>
                <div class="relative">
                  <input
                    v-model="regPassword"
                    :type="showRegPwd ? 'text' : 'password'"
                    placeholder="Min. 6 characters"
                    class="w-full border border-[#ddd] px-3 py-2.5 pr-10 text-[13px] text-[#333] outline-none focus:border-[#c0392b] transition-colors placeholder:text-[#bbb]"
                  />
                  <button type="button" @click="showRegPwd = !showRegPwd" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa] hover:text-[#555] transition-colors">
                    <svg v-if="!showRegPwd" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Confirm password -->
              <div>
                <label class="block text-[11px] font-bold text-[#555] uppercase tracking-wide mb-1.5">Confirm Password *</label>
                <input
                  v-model="regConfirm"
                  type="password"
                  placeholder="Repeat your password"
                  class="w-full border border-[#ddd] px-3 py-2.5 text-[13px] text-[#333] outline-none focus:border-[#c0392b] transition-colors placeholder:text-[#bbb]"
                  @keyup.enter="handleRegister"
                />
              </div>

              <!-- Submit -->
              <button
                @click="handleRegister"
                :disabled="regLoading"
                class="w-full bg-[#222] text-white text-[12px] font-bold uppercase tracking-[1px] py-3 hover:bg-[#c0392b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg v-if="regLoading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                {{ regLoading ? 'Creating account...' : 'Create Account' }}
              </button>
            </div>

            <p class="text-center text-[12px] text-[#888] mt-5">
              Already have an account?
              <button @click="tab = 'login'" class="text-[#c0392b] font-bold hover:underline">Sign in here</button>
            </p>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active .relative,
.modal-fade-leave-active .relative {
  transition: transform 0.2s ease;
}
.modal-fade-enter-from .relative,
.modal-fade-leave-to .relative {
  transform: translateY(-16px);
}
</style>
