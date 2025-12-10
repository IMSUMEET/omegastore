import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const FilterSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    []
  );

  // FILTER STRUCTURE
  const categories: Record<string, string[]> = {
    Electronics: ["Laptops", "Monitors", "Keyboards", "Mice"],
    Audio: ["Headphones", "Earbuds", "Speakers"],
    Gaming: ["Consoles", "Controllers", "VR Headsets"],
    Books: ["Thriller", "Fantasy", "Romance", "Engineering", "Medical"],
    Food: ["Chips", "Nuts", "Popcorn", "Rice", "Spices"],
    Fitness: ["Dumbbells", "Bands", "Mats"],
  };

  // TOGGLE CATEGORY
  const toggleCategory = (category: string, subcategories: string[]) => {
    const isSelected = selectedCategories.includes(category);

    if (isSelected) {
      // Remove category and all subcategories
      setSelectedCategories(selectedCategories.filter((c) => c !== category));

      setSelectedSubcategories(
        selectedSubcategories.filter((sub) => !subcategories.includes(sub))
      );
    } else {
      // Add category and all subcategories
      setSelectedCategories([...selectedCategories, category]);

      setSelectedSubcategories([
        ...new Set([...selectedSubcategories, ...subcategories]),
      ]);
    }
  };

  // TOGGLE SUBCATEGORY
  const toggleSubcategory = (subcategory: string, category: string) => {
    let updatedSubcategories;

    if (selectedSubcategories.includes(subcategory)) {
      // Remove subcategory
      updatedSubcategories = selectedSubcategories.filter(
        (sub) => sub !== subcategory
      );
    } else {
      // Add subcategory
      updatedSubcategories = [...selectedSubcategories, subcategory];
    }

    setSelectedSubcategories(updatedSubcategories);

    // CHECK IF ALL SUBCATEGORIES ARE SELECTED
    const allSubcategoriesSelected = categories[category].every((sub) =>
      updatedSubcategories.includes(sub)
    );

    if (allSubcategoriesSelected) {
      // Mark category selected
      if (!selectedCategories.includes(category)) {
        setSelectedCategories([...selectedCategories, category]);
      }
    } else {
      // Remove category from selected
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  return (
    <aside
      className={`
        border-r border-gray-200 bg-white h-screen 
        transition-all duration-300 relative
        ${collapsed ? "w-16" : "w-64"}
      `}
    >
      {/* COLLAPSE BUTTON */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 bg-white shadow p-1.5 rounded-full hover:bg-gray-100 transition"
      >
        {collapsed ? <FiChevronRight size={18} /> : <FiChevronLeft size={18} />}
      </button>

      {/* CONTENT */}
      <div
        className={`
          overflow-hidden transition-all duration-300
          ${collapsed ? "opacity-0 max-h-0" : "opacity-100 max-h-screen"}
        `}
      >
        <h2 className="font-semibold text-lg p-4 pb-2">Filters</h2>

        <div className="px-4 pb-6 space-y-6">
          {Object.entries(categories).map(([category, subcategories]) => (
            <div key={category}>
              {/* CATEGORY CHECKBOX */}
              <label className="flex items-center gap-2 font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category, subcategories)}
                />
                {category}
              </label>

              {/* SUBCATEGORY CHECKBOXES */}
              <div className="ml-5 mt-2 space-y-1">
                {subcategories.map((subcategory) => (
                  <label
                    key={subcategory}
                    className="flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSubcategories.includes(subcategory)}
                      onChange={() => toggleSubcategory(subcategory, category)}
                    />
                    {subcategory}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
