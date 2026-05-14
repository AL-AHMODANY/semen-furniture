import imgModernDesk from "../assets/images/image005.jpg";
import imgBlueOfficeChair from "../assets/images/image006.jpg";
import imgWoodenChair from "../assets/images/image007.jpg";
import imgBrownDesk from "../assets/images/image008.jpg";
import imgClassicWoodChair from "../assets/images/image009.jpg";
import imgLeatherSofa from "../assets/images/image010.jpg";
import imgAccentChair from "../assets/images/image011.jpg";
import imgBlueModernSofa from "../assets/images/image012.jpg";
import imgBlackStool from "../assets/images/image013.jpg";
import imgOrangeSofa from "../assets/images/image020.jpg";
import imgRoundTable from "../assets/images/image023.jpg";

export const searchableContent = [
  {
    id: "page-home",
    type: "page",
    title: "Home",
    description: "Landing page with featured furniture, collections, promotions, brands, and latest posts.",
    route: "/",
    keywords: ["homepage", "featured", "collections", "promotions", "brands"],
  },
  {
    id: "page-furniture",
    type: "page",
    title: "Furniture",
    description: "Main furniture catalog with sofas, chairs, desks, price filters, and recommendations.",
    route: "/furniture",
    keywords: ["catalog", "chairs", "desks", "sofas", "filter", "shop by"],
  },
  {
    id: "page-products",
    type: "page",
    title: "Products",
    description: "Featured product details, upsell items, related products, and add-to-cart actions.",
    route: "/products",
    keywords: ["product page", "featured product", "upsell", "related", "modular modern"],
  },
  {
    id: "page-shop",
    type: "page",
    title: "Shopping Cart",
    description: "Cart, wishlist, recent views, coupon code, and shipping estimate.",
    route: "/shop",
    keywords: ["cart", "checkout", "wishlist", "shipping", "coupon"],
  },
  {
    id: "page-blog",
    type: "page",
    title: "Blog",
    description: "Latest posts and inspiration around furniture and interior styling.",
    route: "/blog",
    keywords: ["posts", "articles", "interior", "design", "inspiration"],
  },
  {
    id: "page-contact",
    type: "page",
    title: "Contact Us",
    description: "Contact details and support information for the furniture store.",
    route: "/contact",
    keywords: ["support", "help", "phone", "email", "contact"],
  },
  {
    id: "product-modern-desk",
    type: "product",
    title: "Modern Desk",
    description: "Modern office desk for workspaces and home offices.",
    route: "/furniture",
    image: imgModernDesk,
    price: "$ 349.00",
    keywords: ["desk", "office", "workspace", "table"],
  },
  {
    id: "product-blue-office-chair",
    type: "product",
    title: "Blue Office Chair",
    description: "Comfortable office chair with a clean modern profile.",
    route: "/furniture",
    image: imgBlueOfficeChair,
    price: "$ 249.00",
    keywords: ["chair", "office", "blue", "seating"],
  },
  {
    id: "product-wooden-chair",
    type: "product",
    title: "Wooden Chair",
    description: "Classic wooden chair with warm natural tones.",
    route: "/furniture",
    image: imgWoodenChair,
    price: "$ 189.00",
    keywords: ["chair", "wood", "dining", "seat"],
  },
  {
    id: "product-brown-desk",
    type: "product",
    title: "Brown Desk",
    description: "Brown-toned desk for study corners and compact offices.",
    route: "/furniture",
    image: imgBrownDesk,
    price: "$ 299.00",
    keywords: ["desk", "brown", "office", "workspace"],
  },
  {
    id: "product-classic-wood-chair",
    type: "product",
    title: "Classic Wood Chair",
    description: "Traditional wood chair with a timeless furniture finish.",
    route: "/furniture",
    image: imgClassicWoodChair,
    price: "$ 159.00",
    keywords: ["chair", "wood", "classic", "seat"],
  },
  {
    id: "product-accent-chair",
    type: "product",
    title: "Accent Chair",
    description: "Statement accent chair for living rooms and lounge spaces.",
    route: "/furniture",
    image: imgAccentChair,
    price: "$ 219.00",
    keywords: ["chair", "accent", "living room", "lounge"],
  },
  {
    id: "product-leather-sofa",
    type: "product",
    title: "Leather Sofa",
    description: "Leather sofa designed for comfortable living room seating.",
    route: "/furniture",
    image: imgLeatherSofa,
    price: "$ 649.00",
    keywords: ["sofa", "couch", "leather", "living room"],
  },
  {
    id: "product-blue-modern-sofa",
    type: "product",
    title: "Blue Modern Sofa",
    description: "Modern blue sofa with a soft, contemporary silhouette.",
    route: "/furniture",
    image: imgBlueModernSofa,
    price: "$ 599.00",
    keywords: ["sofa", "blue", "couch", "living room"],
  },
  {
    id: "product-black-stool",
    type: "product",
    title: "Black Stool",
    description: "Compact black stool for flexible extra seating.",
    route: "/furniture",
    image: imgBlackStool,
    price: "$ 129.00",
    keywords: ["stool", "black", "seat", "compact"],
  },
  {
    id: "product-orange-sofa",
    type: "product",
    title: "Orange Sofa",
    description: "Bold orange sofa that adds warmth to the room.",
    route: "/furniture",
    image: imgOrangeSofa,
    price: "$ 549.00",
    keywords: ["sofa", "orange", "couch", "living room"],
  },
  {
    id: "product-modular-modern",
    type: "product",
    title: "Modular Modern",
    description: "Featured modular furniture product with size and color options.",
    route: "/products",
    image: imgBlackStool,
    price: "$ 540.00",
    keywords: ["featured", "modular", "modern", "product details"],
  },
  {
    id: "product-round-table",
    type: "product",
    title: "Round Table",
    description: "Round table for dining, meeting, or accent spaces.",
    route: "/products",
    image: imgRoundTable,
    price: "$ 540.00",
    keywords: ["table", "round", "dining", "accent"],
  },
];

function normalize(value = "") {
  return String(value).trim().toLowerCase();
}

export function searchWebsite(query) {
  const term = normalize(query);

  if (!term) {
    return [];
  }

  return searchableContent
    .map((item) => {
      const haystack = normalize(
        [item.title, item.description, ...(item.keywords || [])].join(" "),
      );

      let score = 0;

      if (normalize(item.title) === term) score += 120;
      if (normalize(item.title).startsWith(term)) score += 80;
      if (normalize(item.title).includes(term)) score += 50;
      if (haystack.includes(term)) score += 20;

      for (const keyword of item.keywords || []) {
        const normalizedKeyword = normalize(keyword);
        if (normalizedKeyword === term) score += 40;
        else if (normalizedKeyword.includes(term)) score += 12;
      }

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}
