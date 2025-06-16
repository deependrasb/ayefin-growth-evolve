
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Heart, Car, Home, Briefcase, Users, Calculator, CheckCircle } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Insurance = () => {
  const [age, setAge] = useState(30);
  const [coverage, setCoverage] = useState(5000000);

  const calculatePremium = (type: string) => {
    let basePremium = 0;
    switch(type) {
      case 'term': basePremium = (coverage * 0.0012) + (age * 50); break;
      case 'health': basePremium = (coverage * 0.02) + (age * 100); break;
      case 'car': basePremium = coverage * 0.03; break;
      default: basePremium = 1000;
    }
    return Math.round(basePremium);
  };

  const lifeInsurancePlans = [
    {
      name: "Term Life Insurance",
      description: "Pure protection at affordable premiums",
      icon: Shield,
      coverage: "Up to ₹10 Crore",
      premium: "From ₹500/month",
      features: ["High coverage at low cost", "Tax benefits under 80C", "Online purchase available", "Quick claim settlement"],
      color: "bg-blue-500"
    },
    {
      name: "Whole Life Insurance",
      description: "Lifelong protection with savings component",
      icon: Heart,
      coverage: "Up to ₹5 Crore",
      premium: "From ₹2,000/month",
      features: ["Lifelong coverage", "Maturity benefits", "Loan facility", "Wealth creation"],
      color: "bg-red-500"
    },
    {
      name: "ULIP Plans",
      description: "Insurance + Investment in one plan",
      icon: Briefcase,
      coverage: "Up to ₹2 Crore",
      premium: "From ₹1,500/month",
      features: ["Market-linked returns", "Tax benefits", "Flexible premiums", "Fund switching option"],
      color: "bg-green-500"
    },
    {
      name: "Child Insurance",
      description: "Secure your child's future education",
      icon: Users,
      coverage: "Up to ₹1 Crore",
      premium: "From ₹1,000/month",
      features: ["Education planning", "Waiver of premium", "Guaranteed returns", "Milestone benefits"],
      color: "bg-purple-500"
    }
  ];

  const healthInsurancePlans = [
    {
      name: "Individual Health Plan",
      description: "Comprehensive health coverage for individuals",
      coverage: "₹5 Lakh to ₹1 Crore",
      premium: "From ₹3,500/year",
      features: ["Cashless treatment", "Pre & post hospitalization", "Day care procedures", "Annual health check-up"]
    },
    {
      name: "Family Floater Plan",
      description: "Single policy covering entire family",
      coverage: "₹5 Lakh to ₹50 Lakh",
      premium: "From ₹8,000/year",
      features: ["Covers spouse & children", "Shared sum insured", "Maternity benefits", "New born coverage"]
    },
    {
      name: "Senior Citizen Plan",
      description: "Specialized coverage for senior citizens",
      coverage: "₹2 Lakh to ₹25 Lakh",
      premium: "From ₹12,000/year",
      features: ["No medical test up to 60", "Pre-existing disease cover", "Domiciliary treatment", "Organ donor cover"]
    },
    {
      name: "Critical Illness Plan",
      description: "Coverage for major critical illnesses",
      coverage: "₹5 Lakh to ₹1 Crore",
      premium: "From ₹2,500/year",
      features: ["36 critical illnesses", "Lump sum payout", "Multiple claims", "Premium waiver benefit"]
    }
  ];

  const generalInsurancePlans = [
    {
      name: "Motor Insurance",
      description: "Comprehensive car and bike insurance",
      icon: Car,
      features: ["Third party liability", "Own damage cover", "Personal accident cover", "Zero depreciation add-on"],
      premium: "From ₹2,500/year"
    },
    {
      name: "Home Insurance",
      description: "Protect your home and belongings",
      icon: Home,
      features: ["Structure and contents", "Natural disasters", "Theft and burglary", "Public liability"],
      premium: "From ₹1,800/year"
    },
    {
      name: "Travel Insurance",
      description: "Worry-free domestic and international travel",
      icon: Shield,
      features: ["Medical emergencies", "Trip cancellation", "Baggage loss", "Flight delays"],
      premium: "From ₹300/trip"
    }
  ];

  const claimProcess = [
    { step: "01", title: "Intimate Claim", desc: "Call our 24x7 helpline or register online" },
    { step: "02", title: "Document Submission", desc: "Submit required documents" },
    { step: "03", title: "Claim Assessment", desc: "Our team reviews your claim" },
    { step: "04", title: "Settlement", desc: "Quick claim settlement in your account" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-finance-gold" />
            <h1 className="text-5xl font-bold mb-6">Insurance Solutions</h1>
            <p className="text-xl mb-8 opacity-90">
              Comprehensive protection for you and your family's financial security
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-finance-green text-white px-4 py-2 text-lg">
                Coverage up to ₹10 Crore
              </Badge>
              <Badge className="bg-finance-gold text-white px-4 py-2 text-lg">
                Premium from ₹500/month
              </Badge>
              <Badge className="bg-white text-finance-blue px-4 py-2 text-lg">
                Quick claim settlement
              </Badge>
            </div>
            <Button size="lg" className="bg-finance-gold hover:bg-finance-gold-dark text-white">
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calculator className="w-12 h-12 mx-auto mb-4 text-finance-blue" />
              <h2 className="text-3xl font-bold mb-4">Premium Calculator</h2>
              <p className="text-gray-600">Get instant premium quotes</p>
            </div>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Age</label>
                    <select 
                      value={age} 
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="w-full p-2 border rounded-md"
                    >
                      {[...Array(50)].map((_, i) => (
                        <option key={i} value={i + 18}>{i + 18} years</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Coverage Amount</label>
                    <select 
                      value={coverage} 
                      onChange={(e) => setCoverage(Number(e.target.value))}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value={500000}>₹5 Lakh</option>
                      <option value={1000000}>₹10 Lakh</option>
                      <option value={2500000}>₹25 Lakh</option>
                      <option value={5000000}>₹50 Lakh</option>
                      <option value={10000000}>₹1 Crore</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Term Insurance</p>
                    <p className="text-2xl font-bold text-finance-blue">₹{calculatePremium('term')}/month</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-sm text-gray-600">Health Insurance</p>
                    <p className="text-2xl font-bold text-finance-green">₹{calculatePremium('health')}/year</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <Button size="lg" className="bg-finance-blue hover:bg-finance-blue-dark">
                    Get Detailed Quote
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="life" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="life">Life Insurance</TabsTrigger>
              <TabsTrigger value="health">Health Insurance</TabsTrigger>
              <TabsTrigger value="general">General Insurance</TabsTrigger>
              <TabsTrigger value="claims">Claims Process</TabsTrigger>
            </TabsList>
            
            <TabsContent value="life" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Life Insurance Plans</h2>
                <p className="text-gray-600">Secure your family's financial future</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {lifeInsurancePlans.map((plan, index) => {
                  const IconComponent = plan.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-lg ${plan.color} flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl text-finance-blue">{plan.name}</CardTitle>
                            <p className="text-gray-600 text-sm">{plan.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between">
                          <span className="font-medium">Coverage:</span>
                          <span className="text-finance-green font-bold">{plan.coverage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Premium:</span>
                          <span className="text-finance-blue font-bold">{plan.premium}</span>
                        </div>
                        <div className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-finance-green mr-2" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="w-full bg-finance-blue hover:bg-finance-blue-dark">
                          Buy {plan.name}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="health" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Health Insurance Plans</h2>
                <p className="text-gray-600">Comprehensive healthcare coverage for medical emergencies</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {healthInsurancePlans.map((plan, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-finance-blue">{plan.name}</CardTitle>
                      <p className="text-gray-600">{plan.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Coverage:</span>
                        <span className="text-finance-green font-bold">{plan.coverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Premium:</span>
                        <span className="text-finance-blue font-bold">{plan.premium}</span>
                      </div>
                      <div className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-finance-green mr-2" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full bg-finance-green hover:bg-finance-green-dark">
                        Buy {plan.name}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="general" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">General Insurance</h2>
                <p className="text-gray-600">Protect your assets and belongings</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {generalInsurancePlans.map((plan, index) => {
                  const IconComponent = plan.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                      <CardHeader>
                        <IconComponent className="w-12 h-12 mx-auto mb-4 text-finance-blue" />
                        <CardTitle className="text-lg text-finance-blue">{plan.name}</CardTitle>
                        <p className="text-gray-600 text-sm">{plan.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-finance-green font-bold text-lg">{plan.premium}</div>
                        <div className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-finance-green mr-2" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="w-full bg-finance-gold hover:bg-finance-gold-dark">
                          Get Quote
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="claims" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Claims Process</h2>
                <p className="text-gray-600">Simple and transparent claim settlement process</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {claimProcess.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-finance-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <Card className="p-8 bg-finance-blue text-white text-center">
                <h3 className="text-2xl font-bold mb-4">24x7 Claim Support</h3>
                <p className="mb-6">Our dedicated team is available round the clock to assist you with your claims</p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" className="text-finance-blue border-white hover:bg-white">
                    Call: 1800-123-4567
                  </Button>
                  <Button variant="outline" className="text-finance-blue border-white hover:bg-white">
                    Email: claims@ayefin.com
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Insurance;
