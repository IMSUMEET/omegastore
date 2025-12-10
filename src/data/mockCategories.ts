import type { Category } from "@/types";

export const mockCategories: Category[] = [
  {
    icon: "📱",
    label: "Electronics",
    subcategories: ["Laptops", "Monitors", "Keyboards", "Mice"],
  },
  {
    icon: "📚",
    label: "Books",
    subcategories: ["Fiction", "Thriller", "Fantasy", "Romance", "Education"],
  },
  {
    icon: "👗",
    label: "Fashion",
    subcategories: ["Men", "Women", "Footwear", "Accessories"],
  },
  {
    icon: "🏡",
    label: "Home",
    subcategories: ["Furniture", "Kitchenware", "Decor"],
  },
  {
    icon: "🏋️‍♂️",
    label: "Fitness",
    subcategories: ["Equipment", "Clothing", "Supplements"],
  },
  {
    icon: "🐶",
    label: "Pet Supplies",
    subcategories: ["Dog", "Cat", "Food", "Toys"],
  },
];
