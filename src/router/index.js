import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Home from '../pages/Home.vue'
import BlogPage from '../pages/BlogPage.vue'
import FurniturePage from '../pages/FurniturePage.vue'
import MobilePage from '../pages/MobilePage.vue'
import OfferPage from '../pages/OfferPage.vue'
import DealPage from '../pages/DealPage.vue'
import CustomMenuPage from '../pages/CustomMenuPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import ProductPage from '../pages/ProductPage.vue'
import ShoppingPage from '../pages/ShoppingPage.vue'
import SearchPage from '../pages/SearchPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/homepage-2', component: Home, name: 'home-2' },
  { path: '/blog', component: BlogPage, name: 'blog' },
  { path: '/furniture', component: FurniturePage, name: 'furniture' },
  { path: '/mobile', component: MobilePage, name: 'mobile' },
  { path: '/offer', component: OfferPage, name: 'offer' },
  { path: '/deal', component: DealPage, name: 'deal' },
  { path: '/custom', component: CustomMenuPage, name: 'custom' },
  { path: '/contact', component: ContactPage, name: 'contact' },
  { path: '/products', component: ProductPage, name: 'product' },
  { path: '/shop', component: ShoppingPage, name: 'shop' },
  { path: '/search', component: SearchPage, name: 'search' },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } },
})
