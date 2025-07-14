import { Button } from "@/components/ui/button";
import { ArrowDown, Scale, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-lawyer.jpg";

const Hero = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="مكتب محاماة احترافي"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              خبرة قانونية
              <span className="block text-primary">موثوقة</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              نقدم خدمات المحاماة والاستشارات القانونية بأعلى معايير المهنية والجودة في المملكة العربية السعودية
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              onClick={scrollToConsultation}
              className="shadow-elegant"
            >
              احصل على استشارة مجانية
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              تعرف على خدماتنا
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">+500</div>
              <div className="text-gray-300">عميل راضٍ</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Scale className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">+15</div>
              <div className="text-gray-300">سنة خبرة</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-gray-300">معدل النجاح</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;