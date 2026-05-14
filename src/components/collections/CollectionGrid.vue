<script setup>
import ProductCard from "../products/ProductCard.vue";

import roundTable from "../../assets/images/image023.jpg";
import officeChair from "../../assets/images/image24.jpg";
import redOfficeChair from "../../assets/images/image026.jpg";
import modernArmchair from "../../assets/images/image025.jpg";
import accentChair from "../../assets/images/image018.jpg";

const items = [
  { id: "collection-round-table", title: "Modular Modern", img: roundTable, price: "$ 540.00", showSale: true, bgColor: "bg-[#f5f2ee]" },
  { id: "collection-office-chair", title: "Modular Modern", img: officeChair, price: "$ 540.00", showNew: true, bgColor: "bg-[#eef2f4]" },
  { id: "collection-red-office-chair", title: "Modular Modern", img: redOfficeChair, price: "$ 540.00", showNew: true, bgColor: "bg-[#f2eef5]" },
  { id: "collection-modern-armchair", title: "Modular Modern", img: modernArmchair, price: "$ 540.00", oldPrice: "$ 600.00", showSale: true, bgColor: "bg-[#faf0f0]" },
  { id: "collection-accent-chair", title: "Modular Modern", img: accentChair, price: "$ 540.00", bgColor: "bg-[#f5f0eb]" },
];
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
    <ProductCard
      v-for="item in items"
      :key="item.id"
      v-bind="item"
    />
  </div>
</template>
