import React from 'react';
import * as Icons from 'lucide-react';
import { Category } from '../types';

interface CategorySelectorProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoryToggle: (categoryId: string) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategories,
  onCategoryToggle,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Customize Your Feed
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {categories.map((category) => {
          const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<any>;
          const isSelected = selectedCategories.includes(category.id);
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryToggle(category.id)}
              className={`
                flex items-center space-x-2 p-3 rounded-lg border-2 transition-all duration-200 text-left
                ${isSelected 
                  ? `${category.color} text-white shadow-lg transform scale-105` 
                  : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md'
                }
              `}
            >
              <IconComponent className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm font-medium truncate">{category.name}</span>
            </button>
          );
        })}
      </div>
      <p className="text-sm text-gray-500 mt-4">
        Select categories to personalize your news feed
      </p>
    </div>
  );
};