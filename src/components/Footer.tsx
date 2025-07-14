import { Scale, Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "الخدمات", href: "#services" },
    { name: "استشارة قانونية", href: "#consultation" },
    { name: "تواصل معنا", href: "#contact" }
  ];

  const legalServices = [
    "القضايا المدنية",
    "القضايا التجارية", 
    "القضايا الجنائية",
    "الأحوال الشخصية",
    "صياغة العقود",
    "الاستشارات القانونية"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Scale className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">المستشار القانوني</h3>
                <p className="text-sm text-muted-foreground">محاماة واستشارات قانونية</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              نقدم خدمات المحاماة والاستشارات القانونية بأعلى معايير المهنية والجودة في المملكة العربية السعودية
            </p>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://wa.me/966501234567')}
                className="border-primary/20 hover:bg-primary/10"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('tel:+966123456789')}
                className="border-primary/20 hover:bg-primary/10"
              >
                <Phone className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('mailto:info@lawyer.com')}
                className="border-primary/20 hover:bg-primary/10"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-foreground">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-foreground">خدماتنا</h4>
            <ul className="space-y-3">
              {legalServices.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-foreground">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">+966 12 345 6789</p>
                  <p className="text-sm text-muted-foreground">متاح 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">+966 50 123 4567</p>
                  <p className="text-sm text-muted-foreground">واتساب</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">info@lawyer.com</p>
                  <p className="text-sm text-muted-foreground">نرد خلال 24 ساعة</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">الرياض</p>
                  <p className="text-sm text-muted-foreground">المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">
                © {currentYear} المستشار القانوني. جميع الحقوق محفوظة.
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                سياسة الخصوصية
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                شروط الاستخدام
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                إخلاء المسؤولية
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;