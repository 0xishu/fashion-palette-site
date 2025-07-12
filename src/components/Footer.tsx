import { Heart, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Vastra</span>Verse
            </h3>
            <p className="text-background/80 mb-6 max-w-md">
              A sustainable clothing exchange platform where every thread finds a new story. Join our community of conscious fashion lovers.
            </p>
            
            {/* Sustainability Impact Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-background/70">Items Exchanged</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25T</div>
                <div className="text-sm text-background/70">CO₂ Saved (kg)</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-background/70">
              <div className="flex items-center">
                <Leaf className="h-4 w-4 mr-1 text-primary" />
                <span>Carbon Neutral</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-1 text-primary" />
                <span>Community Driven</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Exchange</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">List an Item</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Exchange Rules</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Quality Standards</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability Impact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">User Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 VastraVerse. Where every thread finds a new story. Made with ❤️ for sustainable fashion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;