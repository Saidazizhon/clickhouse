import React from 'react';

const Category = ({ categories }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Популярные категории</h2>
      <div className="grid-cols-2 md:grid-cols-4 gap-4 overflow-x-auto flex *:rounded-full">
        {categories.map((category) => (
          <div key={category.id} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-center mt-2 dark:text-white">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
