import { Shirt, Crown, Footprints, Gem, Heart, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Men",
    icon: Shirt,
    description: "Sustainable menswear collection",
    color: "bg-gradient-to-br from-primary/10 to-primary/5"
  },
  {
    id: 2,
    name: "Women",
    icon: Crown,
    description: "Elegant women's fashion",
    color: "bg-gradient-to-br from-accent/10 to-accent/5"
  },
  {
    id: 3,
    name: "Kids",
    icon: Heart,
    description: "Adorable sustainable kids wear",
    color: "bg-gradient-to-br from-secondary/30 to-secondary/10"
  },
  {
    id: 4,
    name: "Ethnic",
    icon: Gem,
    description: "Traditional & cultural wear",
    color: "bg-gradient-to-br from-primary/15 to-primary/8"
  },
  {
    id: 5,
    name: "Formal",
    icon: Footprints,
    description: "Professional & office wear",
    color: "bg-gradient-to-br from-accent/15 to-accent/8"
  },
  {
    id: 6,
    name: "Accessories",
    icon: Leaf,
    description: "Bags, jewelry & more",
    color: "bg-gradient-to-br from-secondary/40 to-secondary/15"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Discover sustainable fashion across all categories. Every exchange contributes to a more conscious future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="group hover:shadow-large transition-all duration-500 cursor-pointer border-border/50 hover:border-primary/30 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;