import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      value: "+966 12 345 6789",
      description: "متاح على مدار الساعة للحالات الطارئة",
      action: () => window.open('tel:+966123456789')
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      value: "+966 50 123 4567",
      description: "تواصل مباشر وسريع عبر الواتساب",
      action: () => window.open('https://wa.me/966501234567')
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@lawyer.com",
      description: "نرد على الإيميلات خلال 24 ساعة",
      action: () => window.open('mailto:info@lawyer.com')
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "الرياض، المملكة العربية السعودية",
      description: "حي الملك فهد، شارع الملك فهد",
      action: () => window.open('https://maps.google.com')
    }
  ];

  const workingHours = [
    { day: "الأحد - الخميس", hours: "8:00 ص - 6:00 م" },
    { day: "الجمعة", hours: "مغلق" },
    { day: "السبت", hours: "10:00 ص - 4:00 م" },
    { day: "الحالات الطارئة", hours: "24/7" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن هنا لمساعدتك في جميع الاستفسارات القانونية. تواصل معنا بالطريقة التي تناسبك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50"
                onClick={info.action}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-xl font-semibold mb-2 text-foreground">
                        {info.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Working Hours & Quick Actions */}
          <div className="space-y-6">
            {/* Working Hours */}
            <Card className="shadow-soft border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">ساعات العمل</h3>
                </div>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft border-border/50 bg-gradient-hero text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">إجراءات سريعة</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline"
                    className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                    onClick={() => window.open('https://wa.me/966501234567')}
                  >
                    <MessageCircle className="h-4 w-4" />
                    واتساب فوري
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                    onClick={() => window.open('tel:+966123456789')}
                  >
                    <Phone className="h-4 w-4" />
                    اتصال مباشر
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                    onClick={() => {
                      const element = document.getElementById('consultation');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Send className="h-4 w-4" />
                    نموذج الاستشارة
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-12 bg-destructive/10 border border-destructive/20 rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold mb-2 text-destructive">
            للحالات الطارئة
          </h3>
          <p className="text-muted-foreground mb-4">
            في حالة الحاجة لاستشارة قانونية عاجلة، نحن متاحون على مدار الساعة
          </p>
          <Button 
            variant="destructive"
            className="text-lg px-8"
            onClick={() => window.open('tel:+966123456789')}
          >
            <Phone className="h-5 w-5" />
            اتصال طارئ الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;