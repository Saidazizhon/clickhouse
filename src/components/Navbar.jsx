import React from 'react';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="text-2xl font-bold dark:text-white">clickhouse</div>
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-300">Каталог</a>
        <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-300">Доставка</a>
        <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-300">Услови</a>
        <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-300">Контакты</a>
      </div>
      <div className="space-x-4 flex items-center">
        <span className="dark:text-white">+375 736 463 64 72</span>
        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 bg-gray-200 dark:bg-gray-600 dark:text-white rounded">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
