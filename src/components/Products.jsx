import React from 'react';

const Products = ({ products, title }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
            <img src={product.thumbnail} alt={product.title} className="h-48 object-cover mb-4 rounded m-auto" />
            <h2 className="text-xl font-semibold mb-2 dark:text-white">{product.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{product.description}</p>
            <p className="text-gray-900 dark:text-white font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
