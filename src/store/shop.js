import { computed, reactive, readonly } from 'vue'

const STORAGE_KEYS = {
  cart: 'simen_cart',
  wishlist: 'simen_wishlist',
  compare: 'simen_compare',
  recentViews: 'simen_recent_views',
}

function safeRead(key, fallback = []) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function safeWrite(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function slugify(value = '') {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function parsePrice(value) {
  if (typeof value === 'number') return value
  const normalized = String(value ?? '')
    .replace(/[^0-9.]/g, '')
    .trim()

  return normalized ? Number(normalized) : 0
}

function normalizeProduct(product = {}, options = {}) {
  const title = product.title || product.name || 'Product'
  const image = product.img || product.image || ''
  const priceNumber = parsePrice(product.price)
  const oldPriceNumber = parsePrice(product.oldPrice ?? product.originalPrice)

  return {
    id: product.id || `${slugify(title)}-${slugify(image).slice(0, 24) || 'item'}`,
    title,
    image,
    price: priceNumber,
    oldPrice: oldPriceNumber || 0,
    priceLabel: product.priceLabel || `$ ${priceNumber.toFixed(2)}`,
    oldPriceLabel: oldPriceNumber ? `$ ${oldPriceNumber.toFixed(2)}` : '',
    size: options.size || product.size || '',
    color: options.color || product.color || '',
    qty: Math.max(1, Number(options.qty ?? product.qty ?? 1)),
  }
}

const state = reactive({
  cartItems: safeRead(STORAGE_KEYS.cart),
  wishlistItems: safeRead(STORAGE_KEYS.wishlist),
  compareItems: safeRead(STORAGE_KEYS.compare),
  recentViews: safeRead(STORAGE_KEYS.recentViews),
  quickViewProduct: null,
})

function persist() {
  safeWrite(STORAGE_KEYS.cart, state.cartItems)
  safeWrite(STORAGE_KEYS.wishlist, state.wishlistItems)
  safeWrite(STORAGE_KEYS.compare, state.compareItems)
  safeWrite(STORAGE_KEYS.recentViews, state.recentViews)
}

function addRecentView(product) {
  state.recentViews = [
    product,
    ...state.recentViews.filter((item) => item.id !== product.id),
  ].slice(0, 12)
  persist()
}

const cartCount = computed(() =>
  state.cartItems.reduce((sum, item) => sum + Number(item.qty || 0), 0),
)
const wishlistCount = computed(() => state.wishlistItems.length)
const compareCount = computed(() => state.compareItems.length)

export const shopStore = {
  state: readonly(state),
  cartCount,
  wishlistCount,
  compareCount,

  normalizeProduct,

  isInWishlist(productId) {
    return state.wishlistItems.some((item) => item.id === productId)
  },

  isInCompare(productId) {
    return state.compareItems.some((item) => item.id === productId)
  },

  addToCart(product, options = {}) {
    const normalized = normalizeProduct(product, options)
    const existing = state.cartItems.find(
      (item) =>
        item.id === normalized.id &&
        item.size === normalized.size &&
        item.color === normalized.color,
    )

    if (existing) {
      existing.qty += normalized.qty
    } else {
      state.cartItems.unshift(normalized)
    }

    addRecentView(normalized)
    persist()
    return normalized
  },

  updateCartQty(index, qty) {
    if (!state.cartItems[index]) return
    state.cartItems[index].qty = Math.max(1, Number(qty || 1))
    persist()
  },

  updateCartItem(index, updates = {}) {
    if (!state.cartItems[index]) return
    state.cartItems[index] = {
      ...state.cartItems[index],
      ...updates,
      qty: Math.max(1, Number(updates.qty ?? state.cartItems[index].qty ?? 1)),
    }
    persist()
  },

  removeFromCart(index) {
    state.cartItems.splice(index, 1)
    persist()
  },

  clearCart() {
    state.cartItems = []
    persist()
  },

  toggleWishlist(product, options = {}) {
    const normalized = normalizeProduct(product, options)
    const existingIndex = state.wishlistItems.findIndex((item) => item.id === normalized.id)

    if (existingIndex >= 0) {
      state.wishlistItems.splice(existingIndex, 1)
      persist()
      return false
    }

    state.wishlistItems.unshift(normalized)
    addRecentView(normalized)
    persist()
    return true
  },

  toggleCompare(product, options = {}) {
    const normalized = normalizeProduct(product, options)
    const existingIndex = state.compareItems.findIndex((item) => item.id === normalized.id)

    if (existingIndex >= 0) {
      state.compareItems.splice(existingIndex, 1)
      persist()
      return false
    }

    state.compareItems.unshift(normalized)
    addRecentView(normalized)
    persist()
    return true
  },

  openQuickView(product, options = {}) {
    const normalized = normalizeProduct(product, options)
    state.quickViewProduct = normalized
    addRecentView(normalized)
  },

  closeQuickView() {
    state.quickViewProduct = null
  },
}
