
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CreditCard, Home, Briefcase, TrendingUp, Shield, Coins } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Personal Loans",
      description: "Quick and hassle-free personal loans for all your financial needs",
      features: ["Instant approval", "Flexible tenure", "Competitive rates"],
      rate: "10.5% p.a. onwards",
      amount: "Up to ₹25 Lakh",
      color: "bg-blue-500"
    },
    {
      icon: Home,
      title: "Home Loans",
      description: "Make your dream home a reality with our affordable home loan solutions",
      features: ["Zero processing fee", "Quick disbursal", "Tax benefits"],
      rate: "8.3% p.a. onwards",
      amount: "Up to ₹5 Crore",
      color: "bg-green-500"
    },
    {
      icon: Briefcase,
      title: "Business Loans",
      description: "Fuel your business growth with tailored financing solutions",
      features: ["Collateral-free", "Quick approval", "Flexible repayment"],
      rate: "12% p.a. onwards",
      amount: "Up to ₹75 Lakh",
      color: "bg-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Expert guidance to help you build wealth and achieve financial goals",
      features: ["Portfolio management", "Risk assessment", "Goal planning"],
      rate: "Returns up to 15%",
      amount: "No minimum limit",
      color: "bg-orange-500"
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Comprehensive protection for you and your family's future",
      features: ["Life insurance", "Health coverage", "Term plans"],
      rate: "Premiums from ₹500/month",
      amount: "Coverage up to ₹1 Crore",
      color: "bg-red-500"
    },
    {
      icon: Coins,
      title: "Gold Loans",
      description: "Instant loans against your gold jewelry with attractive interest rates",
      features: ["Instant approval", "Minimal documentation", "Safe custody"],
      rate: "9.5% p.a. onwards",
      amount: "Up to 75% of gold value",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-finance-blue border-finance-blue">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From personal loans to investment advisory, we offer a complete range of financial services 
            designed to meet your unique needs and help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-finance-blue transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-finance-green rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">Interest Rate:</span>
                      <span className="text-sm font-bold text-finance-blue">{service.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">Amount:</span>
                      <span className="text-sm font-bold text-finance-green">{service.amount}</span>
                    </div>
                  </div>

                  <Button className="w-full group bg-finance-blue hover:bg-finance-blue-dark">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Simple Application Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get your loan approved in just 4 easy steps. Our streamlined process ensures 
              quick approval and disbursal.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply Online", desc: "Fill our simple online application form" },
              { step: "02", title: "Document Upload", desc: "Upload required documents digitally" },
              { step: "03", title: "Quick Verification", desc: "Our team verifies your application" },
              { step: "04", title: "Get Funded", desc: "Receive funds directly in your account" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-finance-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-finance-blue to-transparent transform translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
