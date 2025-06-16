
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Globe, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customer First",
      description: "We prioritize our customers' financial well-being and success above all else"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Transparency",
      description: "Building lasting relationships through honest and transparent practices"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation",
      description: "Continuously evolving our services to meet changing financial needs"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Accessibility",
      description: "Making financial services accessible to everyone, everywhere"
    }
  ];

  const leadership = [
    {
      name: "Rajesh Kumar",
      position: "Chief Executive Officer",
      experience: "15+ years in financial services"
    },
    {
      name: "Priya Sharma",
      position: "Chief Financial Officer",
      experience: "12+ years in corporate finance"
    },
    {
      name: "Amit Patel",
      position: "Chief Technology Officer",
      experience: "10+ years in fintech innovation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-finance-blue via-finance-blue-light to-finance-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Ayefin
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Empowering financial dreams through innovative solutions and personalized service
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize access to financial services by providing innovative, transparent, 
                and customer-centric solutions that empower individuals and businesses to achieve 
                their financial goals.
              </p>
              <p className="text-lg text-gray-600">
                We believe that everyone deserves access to quality financial services, regardless 
                of their background or current financial situation.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be India's most trusted and innovative financial services platform, creating 
                lasting value for our customers, partners, and communities.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where financial services are simple, accessible, and 
                tailored to individual needs, enabling everyone to build a secure financial future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-finance-blue/10 rounded-full w-fit text-finance-blue">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Experienced leaders driving our vision forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-24 h-24 bg-finance-blue/10 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-finance-blue" />
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-finance-blue font-medium">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{leader.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-finance-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-2">Best Fintech Company 2023</h3>
              <p className="opacity-80">Financial Services Excellence Awards</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Customer Choice Award</h3>
              <p className="opacity-80">Banking & Finance Industry</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Innovation in Finance</h3>
              <p className="opacity-80">Digital Transformation Awards</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
