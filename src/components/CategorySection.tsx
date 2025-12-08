import { CategoryCard } from "@/components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { Category } from "@/types";
import { mockCategories } from "@/data";

const CategoriesSection = () => {
  const [categories, setCatgories] = useState<Category[] | null>(null);

  useEffect(() => {
    //simulate api call;
    const timer = setTimeout(() => {
      setCatgories(mockCategories);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-text mb-12 text-center"
        >
          Shop by <span className="text-primary">Categories</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories?.map((cat, i) => (
            <CategoryCard
              key={cat.label}
              icon={cat.icon}
              label={cat.label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
