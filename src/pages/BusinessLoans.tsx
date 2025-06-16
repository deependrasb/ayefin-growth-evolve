
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Clock, Shield, Calculator, FileText } from "lucide-react";

const BusinessLoans = () => {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Flexible Loan Amounts",
      description: "Get funding from ₹5 Lakhs to ₹50 Crores based on your business needs"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Processing",
      description: "Get approval within 24-48 hours with minimal documentation"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Competitive Rates",
      description: "Starting from 12% per annum with flexible repayment terms"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "EMI Calculator",
      description: "Plan your repayments with our easy-to-use EMI calculator"
    }
  ];

  const eligibility = [
    "Business should be operational for at least 2 years",
    "Minimum annual turnover of ₹25 Lakhs",
    "Good credit score (650+)",
    "Proper business registration and licenses",
    "Audited financial statements for last 2 years"
  ];

  const documents = [
    "Business registration certificate",
    "PAN card and Aadhaar card",
    "Bank statements (last 12 months)",
    "Income tax returns (last 2 years)",
    "Audited financial statements",
    "Property documents (for secured loans)"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-finance-blue via-finance-blue-light to-finance-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business Loans for Growth
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Fuel your business expansion with flexible financing solutions tailored to your needs
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-finance-blue hover:bg-gray-100">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-finance-blue">
                Calculate EMI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Business Loans?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand your business needs and provide customized solutions to help you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-finance-blue/10 rounded-full w-fit">
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

      {/* Eligibility Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Eligibility Criteria</h2>
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-finance-green mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Required Documents</h2>
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-finance-blue mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-finance-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with your business loan application today
          </p>
          <Button size="lg" className="bg-white text-finance-blue hover:bg-gray-100">
            Apply for Business Loan
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessLoans;
