import React from "react";
import { Button } from "@/components/ui/button";
import BookmarkCard, { BookmarkProps } from "@/components/BookmarkCard";
import TestimonialCard, { TestimonialProps } from "@/components/TestimonialCard";
import CustomOrderSection from "@/components/CustomOrderSection";

const bookmarks: BookmarkProps[] = [
  {
    id: 1,
    name: "Классическая закладка",
    price: 490,
    image: "https://cdn.poehali.dev/files/4124f857-453a-4a66-afa7-98c54613bb54.png",
    description: "Элегантная металлическая закладка с золотым тиснением",
    inStock: true
  },
  {
    id: 2,
    name: "Закладка 'Цветение'",
    price: 590,
    image: "https://cdn.poehali.dev/files/f163150b-c4f9-49b6-a93a-ac013eea616d.png",
    description: "Закладка с цветочным орнаментом из металла",
    inStock: true
  },
  {
    id: 3,
    name: "Винтажная закладка",
    price: 750,
    image: "https://cdn.poehali.dev/files/a01da01e-b3af-4e32-be94-8ccefd2cc4c4.jpg",
    description: "Стилизованная под старину с уникальным дизайном",
    inStock: false
  },
  {
    id: 4,
    name: "Геометрия",
    price: 550,
    image: "https://cdn.poehali.dev/files/4fbb2f93-1235-43d0-8ee8-3f76b23e679c.jpg",
    description: "Современный дизайн с геометрическими элементами",
    inStock: true
  },
  {
    id: 5,
    name: "Закладка 'Путешествие'",
    price: 690,
    image: "https://cdn.poehali.dev/files/4bdeb53b-cf51-4ea6-923e-1fa30764ace6.png",
    description: "С гравировкой карты мира и компасом",
    inStock: true
  },
  {
    id: 6,
    name: "Минимализм",
    price: 450,
    image: "https://cdn.poehali.dev/files/21357d35-38be-48f3-be3a-c753547b7c81.jpg",
    description: "Простая, но элегантная закладка для ценителей минимализма",
    inStock: true
  }
];

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "Екатерина М.",
    rating: 5,
    date: "15.05.2023",
    text: "Потрясающее качество! Закладка не только красивая, но и очень прочная. Всем рекомендую!"
  },
  {
    id: 2,
    name: "Александр П.",
    rating: 4,
    date: "23.07.2023",
    text: "Заказывал индивидуальную закладку с гравировкой. Получилось отлично, хотя доставка немного задержалась."
  },
  {
    id: 3,
    name: "Мария Д.",
    rating: 5,
    date: "10.09.2023",
    text: "Прекрасный подарок для любителя книг! Моя сестра была в восторге от дизайна и качества."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-darkgray text-white">
      {/* Header */}
      <header className="bg-darkgray py-6 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-gold">
              Хороший Маркёр
            </h1>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="hover:text-gold transition-colors">Каталог</a>
              <a href="#custom" className="hover:text-gold transition-colors">На заказ</a>
              <a href="#testimonials" className="hover:text-gold transition-colors">Отзывы</a>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-darkgray">
                Контакты
              </Button>
            </nav>
            <Button className="md:hidden" variant="ghost">
              <span className="sr-only">Меню</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-darkgray to-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
                <span className="text-gold">Уникальные закладки</span> для истинных ценителей книг
              </h2>
              <p className="text-lg mb-8 text-gray-300">
                Наши закладки — это не просто функциональный аксессуар, а произведение искусства, 
                которое подчеркнет ваш изысканный вкус и любовь к чтению.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-gold text-darkgray hover:bg-gold/80">
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                  О нас
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://cdn.poehali.dev/files/a5fb4769-de74-42ed-81c9-9dc95e5da1a4.jpg" 
                alt="Коллекция закладок" 
                className="rounded-lg shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2 text-darkgray">
            Наш каталог
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Выберите закладку, которая лучше всего подходит вашему стилю и преобразит процесс чтения
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarks.map((bookmark) => (
              <BookmarkCard key={bookmark.id} {...bookmark} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Section */}
      <section id="custom">
        <CustomOrderSection />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2 text-darkgray">
            Отзывы наших клиентов
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Нам важно ваше мнение — мы постоянно совершенствуем наши изделия
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkgray py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-playfair font-bold text-gold mb-4">Хороший Маркёр</h3>
              <p className="text-gray-400">
                Создаем уникальные закладки для книг с 2015 года. 
                Качество, стиль и функциональность — наши главные принципы.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@horoshiymarker.ru</li>
                <li>Телефон: +7 (999) 123-45-67</li>
                <li>Адрес: г. Москва, ул. Книжная, 42</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Подписка</h4>
              <p className="text-gray-400 mb-4">
                Подпишитесь на нашу рассылку и получите скидку 10% на первый заказ
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none w-full"
                />
                <Button className="rounded-l-none bg-gold text-darkgray hover:bg-gold/80">
                  Отправить
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-center text-sm">
            <p>© 2023 Хороший Маркёр. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
