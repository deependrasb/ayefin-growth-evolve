
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Home, Calculator, CheckCircle, Clock, Shield, FileText } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HomeLoans = () => {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [tenure, setTenure] = useState(20);
  const [rate] = useState(8.3);

  const calculateEMI = () => {
    const monthlyRate = rate / (12 * 100);
    const totalMonths = tenure * 12;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return Math.round(emi);
  };

  const loanTypes = [
    {
      title: "Home Purchase Loan",
      description: "Finance your dream home with competitive rates",
      rate: "8.3% p.a. onwards",
      maxAmount: "Up to ₹5 Crore",
      features: ["Zero processing fee", "Quick approval", "Flexible tenure up to 30 years"]
    },
    {
      title: "Home Construction Loan",
      description: "Build your dream home from ground up",
      rate: "8.5% p.a. onwards",
      maxAmount: "Up to ₹3 Crore",
      features: ["Stage-wise disbursement", "Construction monitoring", "Competitive rates"]
    },
    {
      title: "Home Improvement Loan",
      description: "Renovate and enhance your existing home",
      rate: "9.2% p.a. onwards",
      maxAmount: "Up to ₹25 Lakh",
      features: ["Quick processing", "Minimal documentation", "Flexible repayment"]
    },
    {
      title: "Plot Purchase Loan",
      description: "Buy residential plots for future construction",
      rate: "9.5% p.a. onwards",
      maxAmount: "Up to ₹2 Crore",
      features: ["RERA approved projects", "Prime locations", "Easy EMI options"]
    }
  ];

  const eligibilityFactors = [
    { factor: "Age", requirement: "21-65 years" },
    { factor: "Income", requirement: "₹25,000+ per month" },
    { factor: "Employment", requirement: "2+ years experience" },
    { factor: "Credit Score", requirement: "750+ preferred" }
  ];

  const documents = [
    "Identity Proof (Aadhaar, PAN, Passport)",
    "Address Proof (Utility bills, Rental agreement)",
    "Income Proof (Salary slips, ITR, Bank statements)",
    "Property Documents (Sale deed, NOC, Approvals)"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Home className="w-16 h-16 mx-auto mb-6 text-finance-gold" />
            <h1 className="text-5xl font-bold mb-6">Home Loans Made Simple</h1>
            <p className="text-xl mb-8 opacity-90">
              Turn your dream of owning a home into reality with our competitive home loan solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-finance-green text-white px-4 py-2 text-lg">
                Interest rates from 8.3% p.a.
              </Badge>
              <Badge className="bg-finance-gold text-white px-4 py-2 text-lg">
                Loan amount up to ₹5 Crore
              </Badge>
              <Badge className="bg-white text-finance-blue px-4 py-2 text-lg">
                Zero processing fee
              </Badge>
            </div>
            <Button size="lg" className="bg-finance-gold hover:bg-finance-gold-dark text-white">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calculator className="w-12 h-12 mx-auto mb-4 text-finance-blue" />
              <h2 className="text-3xl font-bold mb-4">EMI Calculator</h2>
              <p className="text-gray-600">Calculate your monthly EMI instantly</p>
            </div>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Loan Amount (₹)</label>
                    <Input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tenure (Years)</label>
                    <Input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Interest Rate (% p.a.)</label>
                    <Input
                      type="number"
                      value={rate}
                      disabled
                      className="text-lg bg-gray-100"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Your Monthly EMI</p>
                    <p className="text-4xl font-bold text-finance-blue">₹{calculateEMI().toLocaleString()}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Total Interest: ₹{((calculateEMI() * tenure * 12) - loanAmount).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Home Loan Type</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer various home loan products tailored to meet your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-finance-blue">{loan.title}</CardTitle>
                  <p className="text-gray-600">{loan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Interest Rate:</span>
                    <span className="text-finance-green font-bold">{loan.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Max Amount:</span>
                    <span className="text-finance-blue font-bold">{loan.maxAmount}</span>
                  </div>
                  <div className="space-y-2">
                    {loan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-finance-green mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-finance-blue hover:bg-finance-blue-dark">
                    Apply for {loan.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Eligibility */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="process" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="process">Application Process</TabsTrigger>
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            
            <TabsContent value="process" className="mt-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Simple 4-Step Process</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "01", title: "Apply Online", desc: "Fill our simple application form", icon: FileText },
                    { step: "02", title: "Document Upload", desc: "Upload required documents", icon: Shield },
                    { step: "03", title: "Property Verification", desc: "Our team verifies the property", icon: Home },
                    { step: "04", title: "Loan Disbursal", desc: "Get funds in your account", icon: Clock }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-finance-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold">{item.step}</span>
                        </div>
                        <IconComponent className="w-8 h-8 mx-auto mb-2 text-finance-blue" />
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="eligibility" className="mt-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Eligibility Criteria</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {eligibilityFactors.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">{item.factor}:</span>
                      <span className="text-finance-blue font-bold">{item.requirement}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="mt-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Required Documents</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-finance-green mr-3" />
                      <span>{doc}</span>
                    </div>
                  ))}
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

export default HomeLoans;
