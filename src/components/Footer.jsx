import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* Information Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4 dark:text-white">Информация</h2>
            <p className="mb-2">
              Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь.
            </p>
            <p className="mb-2">
              УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом реестре 158299
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Политика конфиденциальности
            </a>
          </div>
          
          {/* Menu Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4 dark:text-white">Меню</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Главная</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Каталог</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Товары в наличии</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Скидки</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Популярное</a></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4 dark:text-white">Контакты</h2>
            <p className="mb-2">г. Минск</p>
            <p className="mb-2">Ул. Первомайская Д. 1, Кв. 43</p>
            <p className="mb-2">+375 434 847 28 84</p>
            <p className="mb-2">+375 448 473 09 48</p>
            <p className="mb-2">
              <a href="mailto:ikeaekspress@gmail.com" className="hover:underline">ikeaekspress@gmail.com</a>
            </p>
            <div className="mt-4">
              <a href="#" className="text-2xl text-pink-600">
                <i className="fab fa-instagram"></i> {/* Instagram Icon */}
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
