import React from "react";
import { Button } from "@/components/ui/button";

const CustomOrderSection: React.FC = () => {
  return (
    <section className="py-16 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Создайте свою уникальную закладку
          </h2>
          <p className="text-lg mb-8">
            Мы можем изготовить закладку по вашему дизайну или с учетом ваших пожеланий.
            Идеальный подарок для любителей чтения или для себя!
          </p>
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Заказать индивидуальную закладку
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderSection;
