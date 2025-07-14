import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Scale, 
  FileText, 
  Building2, 
  Users, 
  Shield, 
  Briefcase,
  ArrowLeft,
  Clock
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "القضايا المدنية",
      description: "نمثلك في جميع القضايا المدنية بكفاءة عالية ومهنية متقدمة",
      features: ["دعاوى الديون", "النزاعات التجارية", "قضايا العقارات"]
    },
    {
      icon: FileText,
      title: "صياغة العقود",
      description: "نساعدك في صياغة العقود القانونية بما يحمي حقوقك ومصالحك",
      features: ["عقود العمل", "العقود التجارية", "اتفاقيات الشراكة"]
    },
    {
      icon: Building2,
      title: "القضايا التجارية",
      description: "خبرة واسعة في القانون التجاري والشركات ونزاعات الأعمال",
      features: ["تأسيس الشركات", "النزاعات التجارية", "الإفلاس والتصفية"]
    },
    {
      icon: Users,
      title: "قضايا الأحوال الشخصية",
      description: "نتعامل مع قضايا الأسرة بحساسية عالية وسرية تامة",
      features: ["قضايا الطلاق", "النفقة والحضانة", "الميراث"]
    },
    {
      icon: Shield,
      title: "القضايا الجنائية",
      description: "دفاع قوي في القضايا الجنائية مع حماية كاملة لحقوقك",
      features: ["الدفاع الجنائي", "التحقيقات", "الاستئناف"]
    },
    {
      icon: Briefcase,
      title: "الاستشارات القانونية",
      description: "استشارات قانونية شاملة في جميع فروع القانون",
      features: ["استشارات فورية", "آراء قانونية", "دراسة الحالات"]
    }
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            خدماتنا القانونية
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية جميع احتياجاتك القانونية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="p-3 bg-gradient-primary rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowLeft className="h-4 w-4 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={scrollToConsultation}
                >
                  احصل على استشارة
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white shadow-elegant">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              هل تحتاج لاستشارة قانونية عاجلة؟
            </h3>
            <p className="text-xl mb-8 text-gray-200">
              فريقنا متاح على مدار الساعة لتقديم المساعدة القانونية الفورية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero"
                onClick={scrollToConsultation}
                className="bg-primary hover:bg-primary/90"
              >
                <Clock className="h-5 w-5" />
                استشارة فورية
              </Button>
              <Button 
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                onClick={() => window.open('https://wa.me/966123456789')}
              >
                واتساب مباشر
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;