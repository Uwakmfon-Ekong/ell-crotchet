export interface Product {
  id: number;
  name: string;
  slug: string;  
  category: string;
  price: number;
  images: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Chunky Knit Sweater",
    slug: "chunky-knit-sweater",
    category: "Sweaters",
    price: 70000, // ₦70000
    images: ["/hoodie.jpeg", "/hoodie.jpeg"],
    description: "Oversized, cozy sweater in soft yarn",
  },
  {
    id: 2,
    name: "Baby Clothing Set",
    slug: "baby-clothing-set",
    category: "Baby Wears",
    price: 30000, // ₦30,000
    images: ["/babies.jpeg"],
    description: "Perfect for newborns, delicate and soft",
  },
  {
    id: 3,
    name: "Wool Baby Beanie",
    slug: "wool-beanie",
    category: "Hats",
    price: 10000, // ₦10,000
    images: ["/beanie.jpeg"],
    description: "Warm winter beanie in multiple colors",
  },
  {
    id: 4,
    name: "Throw Blanket",
    slug: "throw-blanket",
    category: "Blankets",
    price: 150000, // ₦150,000
    images: ["/blanket.jpeg"],
    description: "Large throw blanket for your home",
  },
  {
    id: 5,
    name: "Bucket Hat",
    slug: "bucket-hat",
    category: "Hats",
    price: 24000, // ₦24,000
    images: ["/buckethat.jpeg"],
    description: "Trendy bucket hat in pastel colors",
  },
  {
    id: 6,
    name: "Beach Wear",
    slug: "beach-wear",
    category: "Ladies Wear",
    price: 45000, // ₦45,000
    images: ["/beach.jpeg"],
    description: "Stylish beach wear for summer",
  },
  {
    id: 9,
    name: "Custom Tote Bag",
    slug: "custom-tote-bag",
    category: "Tote Bags",
    price: 25000, // ₦25,000
    images: ["/tote.jpeg"],
    description: "Durable canvas tote with crochet accents",
  },
  {
    id: 10,
    name: "Boho Festival Top",
    slug: "boho-festival-top",
    category: "Ladies Wear",
    price: 23000, // ₦23,000
    images: ["/top.jpeg"],
    description: "Lightweight crochet crop top for summer",
  },
  {
    id: 11,
    name: "Pearl Drop Earrings",
    slug: "pearl-drop-earrings",
    category: "Earrings",
    price: 10000, // ₦10,000
    images: ["/accessories.jpeg"],
    description: "Elegant crochet earrings with pearl beads",
  },
  {
    id: 12,
    name: "Boho Phone Charm",
    slug: "boho-phone-charm",
    category: "Phone Handles",
    price: 12000, // ₦12,000
    images: ["/beads.jpeg"],
    description: "Fun crochet phone charm accessory",
  },
  {
    id: 13,
    name: "Woven Shoulder Bag",
    slug: "woven-shoulder-bag",
    category: "Ladies Bags",
    price: 50000, // ₦50,000
    images: ["/tapestry.jpeg"],
    description: "Stylish crochet bag for everyday use",
  },
  {
    id: 14,
    name: "Sleeveless Vest",
    slug: "sleeveless-vest",
    category: "Vests",
    price: 35000, // ₦35,000
    images: ["/vest.jpeg"],
    description: "Lightweight sleeveless crochet vest",
  },
  {
    id: 15,
    name: "Crochet Trousers",
    slug: "crochet-trousers",
    category: "Trousers",
    price: 42000, // ₦42000
    images: ["/pinkgrannypant.jpeg"],
    description: "Comfortable and stylish crochet trousers",
  },
  {
    id: 16,
    name: "Cross Anklet",
    slug: "cross-anklet",
    category: "Ladies Anklet",
    price: 20000, // ₦20,000
    images: ["/crossanklet.jpeg"],
    description: "Bold crochet neckpiece for any occasion",
  },
  {
    id: 17,
    name: "Brown Summer Top",
    slug: "brown-summer-top",
    category: "Ladies Wear",
    price: 20000, // ₦20,000
    images: ["/browntop.jpeg"],
    description: "Elegant beaded crochet evening clutch",
  },
  {
    id: 18,
    name: "Grey Summer Top",
    slug: "grey-summer-top",
    category: "Ladies Wear",
    price: 18000, // ₦18,000
    images: ["/greysummertop.jpeg"],
    description: "Elegant beaded crochet evening clutch",
  },
  {
    id: 19,
    name: "Milky Mini Bag",
    slug: "milky-mini-bag",
    category: "Ladies Bags",
    price: 15000, // ₦15,000
    images: ["/milkybag.jpeg"],
    description: "Elegant beaded crochet evening clutch",
  },
];
