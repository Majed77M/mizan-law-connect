import { Button } from "@/components/ui/button";
import { Scale, Phone, Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Scale className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">المستشار القانوني</h1>
              <p className="text-sm text-muted-foreground">محاماة واستشارات قانونية</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              الخدمات
            </button>
            <button 
              onClick={() => scrollToSection('consultation')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              استشارة قانونية
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              تواصل معنا
            </button>
          </nav>

          {/* Contact buttons */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              className="hidden sm:flex"
              onClick={() => window.open('tel:+966123456789')}
            >
              <Phone className="h-4 w-4" />
            </Button>
            <Button 
              variant="premium" 
              size="sm"
              onClick={() => scrollToSection('consultation')}
            >
              استشارة مجانية
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;