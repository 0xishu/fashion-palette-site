import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "Organic Cotton Tee",
    price: "₹899",
    originalPrice: "₹1299",
    rating: 4.8,
    reviews: 156,
    image: product1,
    badge: "Bestseller",
    isNew: false
  },
  {
    id: 2,
    name: "Sustainable Midi Dress",
    price: "₹2499",
    originalPrice: "₹3299",
    rating: 4.9,
    reviews: 89,
    image: product2,
    badge: "New",
    isNew: true
  },
  {
    id: 3,
    name: "Eco-Friendly Denim",
    price: "₹1899",
    originalPrice: "₹2499",
    rating: 4.7,
    reviews: 203,
    image: product3,
    badge: "Popular",
    isNew: false
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Featured Exchange Items
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Quality pre-loved pieces ready for their next chapter. Each item is verified for condition and authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <Badge 
                  className={`absolute top-3 left-3 ${
                    product.isNew 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {product.badge}
                </Badge>

                {/* Favorite Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Quick Add Button */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="hero" size="sm" className="w-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-primary">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;