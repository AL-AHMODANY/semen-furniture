<script setup>
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { shopStore } from "../store/shop.js";

const router = useRouter();

const shipping = reactive({
  country: "Nigeria",
  state: "",
  zip: "",
});

const couponCode = ref("");
const appliedCoupon = ref(null);
const couponMessage = ref("");
const couponError = ref("");
const shippingEstimate = ref("");
const shippingCost = ref(null);
const editIndex = ref(null);
const editForm = reactive({
  size: "",
  color: "",
  qty: 1,
});

const availableCoupons = [
  { code: "SAVE10", desc: "10% off", type: "percent", value: 10 },
  { code: "FLAT50", desc: "$50 off", type: "flat", value: 50 },
  { code: "FREE", desc: "Free shipping", type: "shipping", value: 0 },
];

const countries = ["Nigeria", "United States", "United Kingdom", "Canada", "Germany", "Italy"];
const states = ["Lagos", "Ogun", "Abuja", "Rivers", "Texas", "California", "Ontario"];

const cartItems = computed(() => shopStore.state.cartItems);
const wishlistItems = computed(() => shopStore.state.wishlistItems);
const recentViews = computed(() => shopStore.state.recentViews.slice(0, 4));

const subtotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.qty, 0),
);

const discountAmount = computed(() => {
  if (!appliedCoupon.value) return 0;
  if (appliedCoupon.value.type === "percent") {
    return subtotal.value * appliedCoupon.value.value / 100;
  }
  if (appliedCoupon.value.type === "flat") {
    return Math.min(appliedCoupon.value.value, subtotal.value);
  }
  return 0;
});

const grandTotal = computed(() => {
  const shippingValue = appliedCoupon.value?.type === "shipping" ? 0 : (shippingCost.value || 0);
  return Math.max(0, subtotal.value - discountAmount.value + shippingValue);
});

const isEditOpen = computed(() => editIndex.value !== null && !!cartItems.value[editIndex.value]);

function continueShopping() {
  router.push("/");
}

function goCheckout() {
  if (!cartItems.value.length) return;
  alert("Checkout flow can be connected next. Your cart data is now real and saved.");
}

function changeQty(index, delta) {
  const item = cartItems.value[index];
  if (!item) return;
  shopStore.updateCartQty(index, item.qty + delta);
}

function setQty(index, value) {
  shopStore.updateCartQty(index, value);
}

function removeItem(index) {
  shopStore.removeFromCart(index);
}

function clearCart() {
  if (!cartItems.value.length) return;
  if (!window.confirm("Clear all items from your cart?")) return;
  shopStore.clearCart();
  appliedCoupon.value = null;
  shippingCost.value = null;
  shippingEstimate.value = "";
}

function estimateShipping() {
  if (!shipping.zip.trim()) {
    shippingEstimate.value = "";
    return;
  }

  const rate = shipping.country === "Nigeria" ? 3500 : 25;
  shippingCost.value = appliedCoupon.value?.type === "shipping" ? 0 : rate;
  shippingEstimate.value = shippingCost.value === 0 ? "Free shipping" : `$${shippingCost.value.toFixed(2)}`;
}

function applyCoupon() {
  couponError.value = "";
  couponMessage.value = "";

  const found = availableCoupons.find(
    (coupon) => coupon.code === couponCode.value.trim().toUpperCase(),
  );

  if (!found) {
    couponError.value = "Invalid coupon code.";
    return;
  }

  appliedCoupon.value = found;
  couponCode.value = "";
  couponMessage.value = `${found.code} applied: ${found.desc}`;
  if (found.type === "shipping") {
    shippingCost.value = 0;
    shippingEstimate.value = "Free shipping";
  }
}

function removeCoupon() {
  appliedCoupon.value = null;
  couponMessage.value = "";
  couponError.value = "";
  shippingCost.value = null;
  shippingEstimate.value = "";
}

function openEdit(index) {
  const item = cartItems.value[index];
  if (!item) return;
  editIndex.value = index;
  editForm.size = item.size || "";
  editForm.color = item.color || "";
  editForm.qty = item.qty;
}

function closeEdit() {
  editIndex.value = null;
}

function saveEdit() {
  if (!cartItems.value[editIndex.value]) return;
  shopStore.updateCartItem(editIndex.value, {
    size: editForm.size,
    color: editForm.color,
    qty: editForm.qty,
  });
  closeEdit();
}
</script>

<template>
  <main class="bg-white text-[#333]">
    <div class="border-b border-[#e6e6e6] bg-[#f7f7f7]">
      <div class="site-shell flex items-center gap-2 py-2 text-[12px] text-[#888]">
        <span>Home</span>
        <span class="text-[#ccc]">/</span>
        <span class="font-medium text-[#555]">Shopping Cart</span>
      </div>
    </div>

    <section class="site-shell py-8 md:py-10">
      <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 class="text-[30px] font-black uppercase tracking-tight text-[#222]">
            Shopping Cart
          </h1>
          <p class="mt-1 text-[13px] text-[#777]">
            Your cart, wishlist, and quick-view items now stay in sync across the site.
          </p>
        </div>
        <button
          class="border border-[#dcdcdc] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#444] transition hover:border-[#c0392b] hover:text-[#c0392b]"
          @click="continueShopping"
        >
          Continue Shopping
        </button>
      </div>

      <div v-if="cartItems.length" class="grid gap-8 xl:grid-cols-[1.55fr_0.45fr]">
        <div class="overflow-hidden border border-[#e8e8e8] bg-white">
          <div class="overflow-x-auto">
            <table class="min-w-full">
              <thead class="border-b border-[#e8e8e8] bg-[#f8f6f2]">
                <tr class="text-left text-[11px] font-bold uppercase tracking-[0.14em] text-[#777]">
                  <th class="px-4 py-4">Product</th>
                  <th class="px-4 py-4">Price</th>
                  <th class="px-4 py-4">Qty</th>
                  <th class="px-4 py-4">Subtotal</th>
                  <th class="px-4 py-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in cartItems"
                  :key="`${item.id}-${item.size}-${item.color}`"
                  class="border-b border-[#efefef] align-middle last:border-b-0"
                >
                  <td class="px-4 py-4">
                    <div class="flex items-center gap-4">
                      <div class="h-20 w-20 border border-[#e8e8e8] bg-[#faf8f5] p-2">
                        <img :src="item.image" :alt="item.title" class="h-full w-full object-contain" />
                      </div>
                      <div>
                        <p class="text-[14px] font-semibold text-[#333]">{{ item.title }}</p>
                        <p class="mt-1 text-[12px] text-[#888]">
                          <span v-if="item.size">Size: <strong class="text-[#555]">{{ item.size }}</strong></span>
                          <span v-if="item.color" class="ml-2">Color: <strong class="text-[#555]">{{ item.color }}</strong></span>
                        </p>
                        <button
                          class="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#888] transition hover:text-[#c0392b]"
                          @click="openEdit(index)"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-4 text-[14px] font-semibold text-[#333]">${{ item.price.toFixed(2) }}</td>
                  <td class="px-4 py-4">
                    <div class="flex w-fit items-center border border-[#ddd]">
                      <button class="px-3 py-2 text-[18px] text-[#555]" @click="changeQty(index, -1)">-</button>
                      <input
                        :value="item.qty"
                        type="number"
                        min="1"
                        class="w-14 border-x border-[#ddd] py-2 text-center text-[13px] outline-none"
                        @change="setQty(index, Number($event.target.value))"
                      />
                      <button class="px-3 py-2 text-[18px] text-[#555]" @click="changeQty(index, 1)">+</button>
                    </div>
                  </td>
                  <td class="px-4 py-4 text-[14px] font-bold text-[#222]">
                    ${{ (item.price * item.qty).toFixed(2) }}
                  </td>
                  <td class="px-4 py-4 text-right">
                    <button
                      class="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#aaa] transition hover:text-[#c0392b]"
                      @click="removeItem(index)"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-3 border-t border-[#e8e8e8] bg-[#faf8f5] px-4 py-4">
            <button
              class="border border-[#ddd] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#555] transition hover:border-[#c0392b] hover:text-[#c0392b]"
              @click="clearCart"
            >
              Clear Cart
            </button>
            <button
              class="bg-[#222] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#c0392b]"
              @click="goCheckout"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>

        <aside class="space-y-6">
          <div class="border border-[#e8e8e8] bg-white p-5">
            <h2 class="mb-4 text-[14px] font-bold uppercase tracking-[0.14em] text-[#222]">
              Order Summary
            </h2>
            <div class="space-y-3 text-[13px] text-[#666]">
              <div class="flex items-center justify-between">
                <span>Subtotal</span>
                <strong class="text-[#222]">${{ subtotal.toFixed(2) }}</strong>
              </div>
              <div v-if="discountAmount" class="flex items-center justify-between text-[#c0392b]">
                <span>Discount</span>
                <strong>-${{ discountAmount.toFixed(2) }}</strong>
              </div>
              <div class="flex items-center justify-between">
                <span>Shipping</span>
                <strong class="text-[#222]">{{ shippingCost === null ? "-" : shippingEstimate }}</strong>
              </div>
              <div class="border-t border-[#ececec] pt-3 text-[15px] font-bold text-[#222]">
                <div class="flex items-center justify-between">
                  <span>Total</span>
                  <span>${{ grandTotal.toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="border border-[#e8e8e8] bg-white p-5">
            <h2 class="mb-4 text-[14px] font-bold uppercase tracking-[0.14em] text-[#222]">
              Coupon Code
            </h2>
            <input
              v-model="couponCode"
              type="text"
              placeholder="Enter coupon code"
              class="w-full border border-[#ddd] px-4 py-3 text-[13px] outline-none focus:border-[#c0392b]"
            />
            <p v-if="couponError" class="mt-2 text-[12px] text-[#c0392b]">{{ couponError }}</p>
            <p v-if="couponMessage" class="mt-2 text-[12px] text-[#4f8a10]">{{ couponMessage }}</p>
            <div class="mt-4 flex gap-2">
              <button
                class="bg-[#222] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#c0392b]"
                @click="applyCoupon"
              >
                Apply
              </button>
              <button
                v-if="appliedCoupon"
                class="border border-[#ddd] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#555] transition hover:border-[#c0392b] hover:text-[#c0392b]"
                @click="removeCoupon"
              >
                Remove
              </button>
            </div>
          </div>

          <div class="border border-[#e8e8e8] bg-white p-5">
            <h2 class="mb-4 text-[14px] font-bold uppercase tracking-[0.14em] text-[#222]">
              Estimate Shipping
            </h2>
            <div class="space-y-3">
              <select v-model="shipping.country" class="w-full border border-[#ddd] px-4 py-3 text-[13px] outline-none focus:border-[#c0392b]">
                <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
              </select>
              <select v-model="shipping.state" class="w-full border border-[#ddd] px-4 py-3 text-[13px] outline-none focus:border-[#c0392b]">
                <option value="">Select state</option>
                <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
              </select>
              <input
                v-model="shipping.zip"
                type="text"
                placeholder="Zip / Postal code"
                class="w-full border border-[#ddd] px-4 py-3 text-[13px] outline-none focus:border-[#c0392b]"
              />
              <button
                class="border border-[#ddd] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#555] transition hover:border-[#c0392b] hover:text-[#c0392b]"
                @click="estimateShipping"
              >
                Estimate
              </button>
              <p v-if="shippingEstimate" class="text-[12px] text-[#4f8a10]">
                Estimated shipping: {{ shippingEstimate }}
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div v-else class="border border-[#e8e8e8] bg-[#faf8f5] px-8 py-16 text-center">
        <h2 class="text-[24px] font-bold uppercase text-[#222]">Your cart is empty</h2>
        <p class="mt-3 text-[14px] text-[#777]">
          Add products from the home, furniture, or product pages and they’ll appear here automatically.
        </p>
        <button
          class="mt-6 bg-[#222] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#c0392b]"
          @click="continueShopping"
        >
          Start Shopping
        </button>
      </div>

      <div class="mt-10 grid gap-6 lg:grid-cols-2" v-if="wishlistItems.length || recentViews.length">
        <div v-if="wishlistItems.length" class="border border-[#e8e8e8] bg-white p-5">
          <h2 class="mb-4 text-[14px] font-bold uppercase tracking-[0.14em] text-[#222]">
            Wishlist
          </h2>
          <div class="space-y-4">
            <div v-for="item in wishlistItems.slice(0, 4)" :key="item.id" class="flex items-center gap-4">
              <div class="h-16 w-16 border border-[#e8e8e8] bg-[#faf8f5] p-2">
                <img :src="item.image" :alt="item.title" class="h-full w-full object-contain" />
              </div>
              <div class="flex-1">
                <p class="text-[13px] font-semibold text-[#333]">{{ item.title }}</p>
                <p class="text-[12px] text-[#777]">{{ item.priceLabel }}</p>
              </div>
              <button
                class="text-[11px] font-bold uppercase tracking-[0.12em] text-[#666] transition hover:text-[#c0392b]"
                @click="shopStore.addToCart(item)"
              >
                Move To Cart
              </button>
            </div>
          </div>
        </div>

        <div v-if="recentViews.length" class="border border-[#e8e8e8] bg-white p-5">
          <h2 class="mb-4 text-[14px] font-bold uppercase tracking-[0.14em] text-[#222]">
            Recently Viewed
          </h2>
          <div class="space-y-4">
            <div v-for="item in recentViews" :key="item.id" class="flex items-center gap-4">
              <div class="h-16 w-16 border border-[#e8e8e8] bg-[#faf8f5] p-2">
                <img :src="item.image" :alt="item.title" class="h-full w-full object-contain" />
              </div>
              <div class="flex-1">
                <p class="text-[13px] font-semibold text-[#333]">{{ item.title }}</p>
                <p class="text-[12px] text-[#777]">{{ item.priceLabel }}</p>
              </div>
              <button
                class="text-[11px] font-bold uppercase tracking-[0.12em] text-[#666] transition hover:text-[#c0392b]"
                @click="shopStore.openQuickView(item)"
              >
                Quick View
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <div
        v-if="isEditOpen"
        class="fixed inset-0 z-9998 flex items-center justify-center bg-black/50 px-5"
        @click.self="closeEdit"
      >
        <div class="w-full max-w-md bg-white p-6 shadow-2xl">
          <h2 class="mb-4 text-[18px] font-bold uppercase text-[#222]">Edit Item</h2>
          <div class="space-y-4">
            <input v-model="editForm.size" type="text" placeholder="Size" class="w-full border border-[#ddd] px-4 py-3 text-[13px] outline-none focus:border-[#c0392b]" />
            <input v-model="editForm.color" type="text" placeholder="Color" class="w-full border border-[#ddd] px-4 py-3 text-[13px] outline-none focus:border-[#c0392b]" />
            <input v-model.number="editForm.qty" type="number" min="1" placeholder="Quantity" class="w-full border border-[#ddd] px-4 py-3 text-[13px] outline-none focus:border-[#c0392b]" />
          </div>
          <div class="mt-6 flex justify-end gap-3">
            <button class="border border-[#ddd] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#555]" @click="closeEdit">Cancel</button>
            <button class="bg-[#222] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#c0392b]" @click="saveEdit">Save</button>
          </div>
        </div>
      </div>
    </Teleport>
  </main>
</template>
