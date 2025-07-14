import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Send, User, Mail, Phone, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    urgency: "",
    description: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "تم إرسال طلب الاستشارة بنجاح",
      description: "سنتواصل معك خلال 24 ساعة لتحديد موعد الاستشارة",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      caseType: "",
      urgency: "",
      description: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const caseTypes = [
    "قضايا مدنية",
    "قضايا تجارية",
    "قضايا جنائية",
    "أحوال شخصية",
    "قضايا عمالية",
    "قضايا عقارية",
    "استشارة عامة"
  ];

  const urgencyLevels = [
    "عادية (3-5 أيام)",
    "متوسطة (1-2 يوم)",
    "عاجلة (نفس اليوم)",
    "طارئة (فورية)"
  ];

  return (
    <section id="consultation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-primary rounded-2xl">
                <MessageSquare className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              احصل على استشارة قانونية
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              املأ النموذج التالي وسنتواصل معك في أقرب وقت ممكن لتقديم الاستشارة المناسبة لحالتك
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant border-border/50">
                <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-lg">
                  <CardTitle className="text-2xl font-bold text-center">
                    نموذج طلب الاستشارة
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                          <User className="h-4 w-4 text-primary" />
                          الاسم الكامل
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="أدخل اسمك الكامل"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          رقم الهاتف
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="05xxxxxxxx"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        البريد الإلكتروني
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="example@email.com"
                        required
                      />
                    </div>

                    {/* Case Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">نوع القضية</Label>
                        <Select value={formData.caseType} onValueChange={(value) => handleInputChange("caseType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر نوع القضية" />
                          </SelectTrigger>
                          <SelectContent>
                            {caseTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">مستوى الأولوية</Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر مستوى الأولوية" />
                          </SelectTrigger>
                          <SelectContent>
                            {urgencyLevels.map((level) => (
                              <SelectItem key={level} value={level}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-sm font-medium flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        تفاصيل القضية
                      </Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="اشرح تفاصيل قضيتك أو استفسارك القانوني بالتفصيل..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="premium" 
                      className="w-full text-lg py-6"
                    >
                      <Send className="h-5 w-5" />
                      إرسال طلب الاستشارة
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <Card className="shadow-soft border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">معلومات مهمة</h3>
                  <div className="space-y-4 text-sm">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium text-primary mb-1">استشارة مجانية</p>
                      <p className="text-muted-foreground">الاستشارة الأولى مجانية تماماً</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium text-primary mb-1">سرية تامة</p>
                      <p className="text-muted-foreground">جميع المعلومات محمية بسرية مطلقة</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium text-primary mb-1">رد سريع</p>
                      <p className="text-muted-foreground">نرد على استفساراتك خلال 24 ساعة</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">تواصل مباشر</h3>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://wa.me/966123456789')}
                    >
                      <Phone className="h-4 w-4 text-green-600" />
                      واتساب: 966123456789+
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('mailto:info@lawyer.com')}
                    >
                      <Mail className="h-4 w-4 text-primary" />
                      info@lawyer.com
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;