
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Shield, Calculator, FileText, Users } from "lucide-react";

const PersonalLoans = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Approval",
      description: "Get approved in minutes with our digital process"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No Collateral",
      description: "Unsecured loans with no need for collateral or guarantor"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Flexible EMI",
      description: "Choose repayment tenure from 12 to 60 months"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "Personal relationship manager for all your queries"
    }
  ];

  const purposes = [
    "Wedding expenses",
    "Medical emergencies",
    "Home renovation",
    "Education fees",
    "Travel and vacation",
    "Debt consolidation",
    "Business startup",
    "Electronic purchases"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-finance-green via-finance-green-light to-finance-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Personal Loans Made Easy
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Quick, hassle-free personal loans for all your financial needs
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-finance-green hover:bg-gray-100">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-finance-green">
                Check Eligibility
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Personal Loans?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fast, flexible, and designed with your convenience in mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-finance-green/10 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Purposes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Can You Use It For?</h2>
            <p className="text-lg text-gray-600">
              Our personal loans can be used for various purposes
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {purposes.map((purpose, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-finance-green flex-shrink-0" />
                <span className="text-gray-700">{purpose}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-finance-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Personal Loan Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Quick approval, competitive rates, and flexible repayment options
          </p>
          <Button size="lg" className="bg-white text-finance-green hover:bg-gray-100">
            Apply for Personal Loan
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalLoans;
