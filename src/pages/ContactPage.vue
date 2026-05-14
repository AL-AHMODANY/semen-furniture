<script setup>
import { computed, reactive, ref } from 'vue'
import BrandsSection from '../components/brands/BrandsSection.vue'
import {
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/vue/24/outline'

const COMMENT_LIMIT = 500

const initialForm = () => ({
  name: '',
  email: '',
  telephone: '',
  comment: '',
})

const form = reactive(initialForm())
const errors = reactive({
  name: '',
  email: '',
  telephone: '',
  comment: '',
})

const submitStatus = ref({
  type: '',
  message: '',
})
const isSubmitting = ref(false)

const trimmedCommentLength = computed(() => form.comment.trim().length)
const remainingCommentChars = computed(() => COMMENT_LIMIT - form.comment.length)

function resetErrors() {
  errors.name = ''
  errors.email = ''
  errors.telephone = ''
  errors.comment = ''
}

function setStatus(type = '', message = '') {
  submitStatus.value = { type, message }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateTelephone(telephone) {
  if (!telephone.trim()) return true
  return /^[+\d\s\-()]{7,20}$/.test(telephone)
}

function validateForm() {
  resetErrors()

  if (!form.name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!validateEmail(form.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!validateTelephone(form.telephone)) {
    errors.telephone = 'Enter a valid phone number.'
  }

  if (!form.comment.trim()) {
    errors.comment = 'Comment is required.'
  } else if (trimmedCommentLength.value < 10) {
    errors.comment = 'Comment must be at least 10 characters.'
  } else if (form.comment.length > COMMENT_LIMIT) {
    errors.comment = `Comment must be ${COMMENT_LIMIT} characters or fewer.`
  }

  return !Object.values(errors).some(Boolean)
}

async function submitForm() {
  setStatus()

  if (!validateForm()) {
    setStatus('error', 'Please correct the highlighted fields and try again.')
    return
  }

  isSubmitting.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, 700))

    const submission = {
      name: form.name.trim(),
      email: form.email.trim(),
      telephone: form.telephone.trim(),
      comment: form.comment.trim(),
      submittedAt: new Date().toISOString(),
    }

    const previousSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') ?? '[]')
    previousSubmissions.unshift(submission)
    localStorage.setItem('contactSubmissions', JSON.stringify(previousSubmissions.slice(0, 10)))

    Object.assign(form, initialForm())
    setStatus('success', 'Your message has been sent successfully.')
  } catch (error) {
    console.error('Failed to submit contact form:', error)
    setStatus('error', 'Something went wrong while sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <main class="bg-white">

    <!-- Breadcrumb -->
    <div class="border-b border-gray-200 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 py-2 flex items-center gap-2 text-xs text-gray-500">
        <HomeIcon class="w-3 h-3" />
        <span class="text-gray-300">/</span>
        <span class="text-gray-700 font-medium">Contact Us</span>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-6">

      <h1 class="text-lg font-black uppercase text-gray-900 mb-5 tracking-wide">
        Contact Us
      </h1>

      <div class="w-full mb-8 border border-gray-200 overflow-hidden" style="height: 320px;">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63389.32887498786!2d3.8885227!3d6.8166456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b931234567890%3A0xabcdef1234567890!2sIjebu-Ode%2C%20Ogun%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="flex flex-col md:flex-row gap-12 pb-14 border-b border-gray-100">
        <div class="md:w-72 flex-shrink-0">
          <p class="text-sm text-gray-600 leading-relaxed mb-6">
            Lorem Ipsum has been the industry's standard dummy text ever since.Lorem Ipsum is simyp.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <MapPinIcon class="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
              <span class="text-sm text-gray-600">Ijebu-Ode,Ogun-state,</span>
            </li>
            <li class="flex items-center gap-3">
              <PhoneIcon class="w-4 h-4 text-gray-500 shrink-0" />
              <span class="text-sm text-gray-600">+(234) 812 911 7778</span>
            </li>
            <li class="flex items-center gap-3">
              <EnvelopeIcon class="w-4 h-4 text-gray-500 shrink-0" />
              <span class="text-sm text-gray-600">al-ahmodany@gmail.com</span>
            </li>
          </ul>
        </div>

        <div class="flex-1">
          <p class="text-sm text-gray-600 mb-5">
            Send an email. All fields with an (*) are required.
          </p>

          <form class="flex flex-col gap-4" @submit.prevent="submitForm" novalidate>
            <div
              v-if="submitStatus.message"
              :class="[
                'border px-4 py-3 text-sm',
                submitStatus.type === 'success'
                  ? 'border-green-200 bg-green-50 text-green-700'
                  : 'border-red-200 bg-red-50 text-red-700'
              ]"
            >
              {{ submitStatus.message }}
            </div>

            <div class="flex flex-col md:flex-row gap-5">
              <div class="flex-1 flex flex-col gap-3">
                <div>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Name (*)"
                    class="w-full border px-3 py-2.5 text-sm text-gray-700 focus:outline-none placeholder-gray-400 transition-colors duration-200"
                    :class="errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-gray-500'"
                  />
                  <p v-if="errors.name" class="mt-1 text-xs text-red-600">{{ errors.name }}</p>
                </div>

                <div>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="E-mail (*)"
                    class="w-full border px-3 py-2.5 text-sm text-gray-700 focus:outline-none placeholder-gray-400 transition-colors duration-200"
                    :class="errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-gray-500'"
                  />
                  <p v-if="errors.email" class="mt-1 text-xs text-red-600">{{ errors.email }}</p>
                </div>

                <div>
                  <input
                    v-model="form.telephone"
                    type="tel"
                    placeholder="Telephone"
                    class="w-full border px-3 py-2.5 text-sm text-gray-700 focus:outline-none placeholder-gray-400 transition-colors duration-200"
                    :class="errors.telephone ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-gray-500'"
                  />
                  <p v-if="errors.telephone" class="mt-1 text-xs text-red-600">{{ errors.telephone }}</p>
                </div>

                <div class="pt-1">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="bg-gray-800 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors duration-200"
                    :class="isSubmitting ? 'cursor-not-allowed opacity-70' : 'hover:bg-red-500'"
                  >
                    {{ isSubmitting ? 'SENDING...' : 'SEND EMAIL' }}
                  </button>
                </div>
              </div>

              <div class="flex-1">
                <textarea
                  v-model="form.comment"
                  placeholder="Comment (*)"
                  :maxlength="COMMENT_LIMIT"
                  class="w-full h-full min-h-[170px] border px-3 py-2.5 text-sm text-gray-700 focus:outline-none placeholder-gray-400 resize-y transition-colors duration-200"
                  :class="errors.comment ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-gray-500'"
                ></textarea>
                <div class="mt-1 flex items-center justify-between gap-3 text-xs">
                  <p v-if="errors.comment" class="text-red-600">{{ errors.comment }}</p>
                  <span v-else class="text-gray-400">Minimum 10 characters required.</span>
                  <span :class="remainingCommentChars < 50 ? 'text-red-500' : 'text-gray-400'">
                    {{ form.comment.length }}/{{ COMMENT_LIMIT }}
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <BrandsSection />
  </main>
</template>
