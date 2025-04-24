import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface BookmarkProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
}

const BookmarkCard: React.FC<BookmarkProps> = ({
  name,
  price,
  image,
  description,
  inStock
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold text-lg">{price} ₽</span>
          <span className={inStock ? "text-green-600" : "text-destructive"}>
            {inStock ? "В наличии" : "Нет в наличии"}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          disabled={!inStock}
        >
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookmarkCard;
