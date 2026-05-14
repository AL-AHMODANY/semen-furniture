<script setup>
import BrandsSection from '../components/brands/BrandsSection.vue'
import { ref } from 'vue'
import chairThumb from '../assets/images/image039.jpg'
import sofaThumb from '../assets/images/image038.jpg'
import interiorThumb from '../assets/images/image039.jpg'
import featureImageOne from '../assets/images/image037.jpg'
import featureImageTwo from '../assets/images/image040.jpg'
import featureImageThree from '../assets/images/image038.jpg'
import featureImageFour from '../assets/images/image039.jpg'
import {
  HomeIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/outline'

const categories = ref([
  'Sofas & Couches',
  'Living Room Furniture',
  'Television Stands',
  'Bedroom Furniture',
  'Coffee Tables',
  'Kitchen & Dining Room',
  'Chests of Drawers',
  'Ottomans',
  "Kids' Furniture & Décor",
  'Media Storage',
])

const latestPosts = ref([
  {
    title: 'Donec scelerisque quam vitae est.',
    date: 'Sept. 20, 2015',
    thumb: chairThumb,
  },
  {
    title: 'Donec scelerisque quam vitae est.',
    date: 'Sept. 20, 2015',
    thumb: sofaThumb,
  },
  {
    title: 'Donec scelerisque quam vitae est.',
    date: 'Sept. 20, 2015',
    thumb: interiorThumb,
  },
  {
    title: 'Donec scelerisque quam vitae est.',
    date: 'Sept. 20, 2015',
    thumb: featureImageOne,
  },
  {
    title: 'Donec scelerisque quam vitae est.',
    date: 'Sept. 20, 2015',
    thumb: featureImageTwo,
  },
  {
    title: 'Donec scelerisque quam vitae est.',
    date: 'Sept. 20, 2015',
    thumb: featureImageTwo,
  },
])

const blogPosts = ref([
  {
    title: 'Donec scelerisque quam vitae est.',
    date: 'Jul. 12, 2015',
    author: 'KomodoArt',
    excerpt:
      'Duis imperdiet diam pharetra nisl. Fusce accumsan. Fusce adipiscing, felis non ornare egestas, risus elit placerat mauris, in mollis ante erat quis nisl. Quisque sed ipsum. Vestibulum eu risus; Aenean tempus massa aliquet uma. Integer fringilla quam eget dolor.',
    image: featureImageOne,
  },
  {
    title: 'Donec scelerisque quam vitae est.',
    date: 'Jul. 12, 2015',
    author: 'KomodoArt',
    excerpt:
      'Duis imperdiet diam pharetra nisl. Fusce accumsan. Fusce adipiscing, felis non ornare egestas, risus elit placerat mauris, in mollis ante erat quis nisl. Quisque sed ipsum. Vestibulum eu risus; Aenean tempus massa aliquet uma. Integer fringilla quam eget dolor.',
    image: featureImageTwo,
  },
  {
    title: 'Donec scelerisque quam vitae est.',
    date: 'Jul. 12, 2015',
    author: 'KomodoArt',
    excerpt:
      'Duis imperdiet diam pharetra nisl. Fusce accumsan. Fusce adipiscing, felis non ornare egestas, risus elit placerat mauris, in mollis ante erat quis nisl. Quisque sed ipsum. Vestibulum eu risus; Aenean tempus massa aliquet uma. Integer fringilla quam eget dolor.',
    image: featureImageThree,
  },
  {
    title: 'Donec scelerisque quam vitae est.',
    date: 'Jul. 12, 2015',
    author: 'KomodoArt',
    excerpt:
      'Duis imperdiet diam pharetra nisl. Fusce accumsan. Fusce adipiscing, felis non ornare egestas, risus elit placerat mauris, in mollis ante erat quis nisl. Quisque sed ipsum. Vestibulum eu risus; Aenean tempus massa aliquet uma. Integer fringilla quam eget dolor.',
    image: featureImageFour,
  },
])
</script>


<template>
  <main class="blog-page bg-white">
    <!-- Breadcrumb -->
    <div class="border-b border-gray-200 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 py-2 flex items-center gap-2 text-xs text-gray-500">
        <HomeIcon class="w-3 h-3" />
        <span class="text-gray-400">/</span>
        <span class="text-gray-700 font-medium">Blog</span>
      </div>
    </div>

    <!-- Main Content Layout -->
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="flex gap-8">

        <!-- Sidebar -->
        <aside class="w-64 shrink-0 hidden lg:block">

          <!-- All Categories -->
          <div class="mb-8">
            <h3 class="text-sm font-bold uppercase tracking-widest text-gray-800 mb-4 pb-2 border-b-2 border-red-500">
              All Categories
            </h3>
            <ul class="space-y-1">
              <li
                v-for="(cat, index) in categories"
                :key="index"
                class="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 cursor-pointer group transition-colors"
              >
                <span class="text-xs text-gray-400 w-4 font-medium group-hover:text-red-500 transition-colors">{{ index + 1 }}</span>
                <span class="text-sm text-gray-600 group-hover:text-red-500 transition-colors">{{ cat }}</span>
              </li>
            </ul>
            <button class="mt-3 text-xs text-gray-500 hover:text-red-500 flex items-center gap-1 transition-colors">
              <ChevronDownIcon class="w-3 h-3" />
              MORE CATEGORIES
            </button>
          </div>

          <!-- Latest Post -->
          <div>
            <h3 class="text-sm font-bold uppercase tracking-widest text-gray-800 mb-4 pb-2 border-b-2 border-red-500">
              Latest Post
            </h3>
            <ul class="space-y-4">
              <li
                v-for="(post, index) in latestPosts"
                :key="index"
                class="flex gap-3 cursor-pointer group"
              >
                <img
                  :src="post.thumb"
                  :alt="post.title"
                  class="w-16 h-14 object-cover shrink-0 rounded"
                />
                <div class="flex-1">
                  <p class="text-xs font-semibold text-gray-700 group-hover:text-red-500 transition-colors leading-snug line-clamp-2">
                    {{ post.title }}
                  </p>
                  <div class="flex items-center gap-1 mt-1 text-gray-400">
                    <CalendarIcon class="w-3 h-3" />
                    <span class="text-xs">{{ post.date }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>

        <!-- Blog Posts -->
        <div class="flex-1 min-w-0">

          <!-- Post List -->
          <div class="space-y-12">
            <article
              v-for="(post, index) in blogPosts"
              :key="index"
              class="group"
            >
              <!-- Post Image -->
              <div class="overflow-hidden rounded-sm mb-4 relative">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <!-- Post Meta -->
              <div class="flex items-center gap-3 text-xs text-gray-400 mb-2">
                <span>{{ post.date }}</span>
                <span class="text-gray-300">|</span>
                <span>Post by <span class="text-gray-600 font-medium hover:text-red-500 cursor-pointer transition-colors">{{ post.author }}</span></span>
              </div>

              <!-- Post Title -->
              <h2 class="text-xl font-bold text-gray-800 mb-3 hover:text-red-500 cursor-pointer transition-colors leading-snug">
                {{ post.title }}
              </h2>

              <!-- Post Excerpt -->
              <p class="text-sm text-gray-500 leading-relaxed mb-4">
                {{ post.excerpt }}
              </p>

              <!-- Read More -->
              <button class="text-xs font-bold uppercase tracking-widest border border-gray-300 px-5 py-2.5 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 rounded-sm">
                Read More
              </button>
            </article>
          </div>

          <!-- Pagination -->
          <div class="flex items-center justify-center gap-1 mt-14">
            <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
              <ChevronLeftIcon class="w-4 h-4" />
            </button>
            <button
              v-for="page in 4"
              :key="page"
              :class="[
                'w-8 h-8 flex items-center justify-center text-sm font-medium rounded-sm transition-all duration-200',
                page === 1
                  ? 'bg-red-500 text-white'
                  : 'border border-gray-200 text-gray-600 hover:bg-red-500 hover:text-white hover:border-red-500'
              ]"
            >
              {{ page }}
            </button>
            <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
              <ChevronRightIcon class="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>

    <BrandsSection />
  </main>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 2;
}
</style>
