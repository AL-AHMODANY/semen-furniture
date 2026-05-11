<script setup>
import ProductCard from "./ProductCard.vue";
import imgModernDesk from "../../assets/images/image005.jpg";
import imgBlueOfficeChair from "../../assets/images/image006.jpg";
import imgWoodenChair from "../../assets/images/image007.jpg";
import imgBrownDesk from "../../assets/images/image008.jpg";
import imgClassicWoodChair from "../../assets/images/image009.jpg";
import imgLeatherSofa from "../../assets/images/image010.jpg";
import imgBlueModernSofa from "../../assets/images/image012.jpg";
import imgBlackStool from "../../assets/images/image013.jpg";
import imgOrangeSofa from "../../assets/images/image020.jpg";

const products = [
  {
    title: "Modern Desk",
    img: imgModernDesk,
    bgColor: "bg-[#f8f7f5]",
    showNew: false,
    showSale: true,
    price: "$ 349.00",
    oldPrice: "$ 420.00",
  },
  {
    title: "Blue Office Chair",
    img: imgBlueOfficeChair,
    bgColor: "bg-[#f0f4f8]",
    showNew: true,
    showSale: false,
    price: "$ 249.00",
  },
  {
    title: "Wooden Chair",
    img: imgWoodenChair,
    bgColor: "bg-[#faf5f0]",
    showNew: true,
    showSale: true,
    price: "$ 189.00",
    oldPrice: "$ 240.00",
  },
  {
    title: "Brown Desk",
    img: imgBrownDesk,
    bgColor: "bg-[#f5f0e8]",
    showNew: false,
    showSale: false,
    price: "$ 299.00",
  },
  {
    title: "Classic Wood Chair",
    img: imgClassicWoodChair,
    bgColor: "bg-[#f5f0e8]",
    showNew: false,
    showSale: false,
    price: "$ 159.00",
    oldPrice: "$ 200.00",
  },
  {
    title: "Leather Sofa",
    img: imgLeatherSofa,
    bgColor: "bg-[#f5f0e8]",
    showNew: false,
    showSale: false,
    price: "$ 649.00",
  },
  {
    title: "Blue Modern Sofa",
    img: imgBlueModernSofa,
    bgColor: "bg-[#eef2f8]",
    showNew: true,
    showSale: true,
    price: "$ 599.00",
    oldPrice: "$ 750.00",
  },
  {
    title: "Black Stool",
    img: imgBlackStool,
    bgColor: "bg-[#f0f0f0]",
    showNew: false,
    showSale: false,
    price: "$ 129.00",
  },
  {
    title: "Orange Sofa",
    img: imgOrangeSofa,
    bgColor: "bg-[#faf2e8]",
    showNew: false,
    showSale: true,
    price: "$ 549.00",
    oldPrice: "$ 680.00",
  },
];
</script>

<template>
  <!-- Premium grid: 4 → 2 → 1 columns (responsive) with uniform gaps -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
    <ProductCard
      v-for="product in products"
      :key="product.title"
      v-bind="product"
    />
  </div>
</template>
