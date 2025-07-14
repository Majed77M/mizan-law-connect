import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ConsultationForm from "@/components/ConsultationForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <ConsultationForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
