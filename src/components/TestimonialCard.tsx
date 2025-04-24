import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export interface TestimonialProps {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  rating,
  date,
  text,
  avatar
}) => {
  return (
    <Card className="h-full animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-muted flex items-center justify-center text-muted-foreground">
            {avatar ? (
              <img src={avatar} alt={name} className="h-full w-full object-cover" />
            ) : (
              <span>{name.charAt(0)}</span>
            )}
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
        
        <div className="flex items-center mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-accent text-accent" : "text-muted"
              }`}
            />
          ))}
        </div>
        
        <p className="text-sm">{text}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
