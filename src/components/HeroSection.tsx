import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-clothing.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero py-20 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 text-sm">
          <span className="text-muted-foreground">Home</span>
        </nav>

        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Where Every Thread{" "}
              <span className="text-primary">
                Finds a New Story
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
              Join the sustainable fashion revolution. Swap, redeem, and discover wearable clothes that celebrate ethical choices and cultural authenticity.
            </p>

            {/* Prominent Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search by category, size, or style..."
                  className="pl-14 pr-6 py-4 text-lg rounded-full border-border/30 bg-white shadow-medium focus:shadow-large transition-shadow"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full shadow-medium">
                Start Exchanging
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Browse Collection
              </Button>
            </div>
          </div>

          {/* Featured Banner Carousel */}
          <div className="relative">
            <div className="aspect-[16/6] rounded-3xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Sustainable Fashion Exchange"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-primary rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-warm rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;