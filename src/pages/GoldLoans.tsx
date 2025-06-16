
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Coins, Calculator, Shield, Clock, CheckCircle, Star } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GoldLoans = () => {
  const [goldWeight, setGoldWeight] = useState(10);
  const [goldPurity, setGoldPurity] = useState(22);
  const [goldRate] = useState(6500); // Current gold rate per gram
  const [ltvRatio] = useState(75); // Loan to Value ratio

  const calculateLoanAmount = () => {
    const goldValue = goldWeight * goldRate * (goldPurity / 24);
    return Math.round((goldValue * ltvRatio) / 100);
  };

  const goldLoanSchemes = [
    {
      name: "Regular Gold Loan",
      description: "Standard gold loan with flexible repayment options",
      rate: "9.5%",
      tenure: "Up to 3 years",
      ltv: "75%",
      features: ["Minimal documentation", "Quick approval", "Flexible tenure", "Part payment allowed"]
    },
    {
      name: "Flexi Gold Loan",
      description: "Pay only interest for initial period",
      rate: "10.2%",
      tenure: "Up to 4 years",
      ltv: "75%",
      features: ["Interest-only EMI option", "Principal at maturity", "Overdraft facility", "Online account access"]
    },
    {
      name: "Gold Loan Plus",
      description: "Enhanced loan amount with additional benefits",
      rate: "11.5%",
      tenure: "Up to 5 years",
      ltv: "85%",
      features: ["Higher LTV ratio", "Top-up facility", "Insurance coverage", "Priority processing"]
    },
    {
      name: "Business Gold Loan",
      description: "Working capital for business needs",
      rate: "12.0%",
      tenure: "Up to 2 years",
      ltv: "70%",
      features: ["Business purpose", "Higher loan amounts", "GST benefits", "Quick turnaround"]
    }
  ];

  const acceptedGoldItems = [
    { item: "Gold Jewellery", purity: "18K to 24K", description: "Necklaces, bangles, rings, earrings" },
    { item: "Gold Coins", purity: "22K to 24K", description: "Certified gold coins from banks/jewellers" },
    { item: "Gold Bars", purity: "22K to 24K", description: "Pure gold bars with proper hallmarking" },
    { item: "Gold Ornaments", purity: "18K to 22K", description: "Traditional and modern gold ornaments" }
  ];

  const loanProcess = [
    { step: "01", title: "Visit Branch", desc: "Bring your gold and documents", icon: Clock },
    { step: "02", title: "Gold Evaluation", desc: "Expert evaluation of your gold", icon: Star },
    { step: "03", title: "Loan Approval", desc: "Instant loan approval", icon: CheckCircle },
    { step: "04", title: "Amount Disbursed", desc: "Get cash in 30 minutes", icon: Coins }
  ];

  const safetyMeasures = [
    "CCTV monitored storage",
    "Fire and theft insurance",
    "24x7 security surveillance",
    "Bank-grade lockers",
    "Regular audit and verification",
    "Digital tracking system"
  ];

  const eligibilityCriteria = [
    { criteria: "Age", requirement: "21-75 years" },
    { criteria: "Income", requirement: "Any regular income" },
    { criteria: "Gold Purity", requirement: "Minimum 18 Karat" },
    { criteria: "Residence", requirement: "Indian resident" }
  ];

  const documents = [
    "KYC Documents (Aadhaar, PAN)",
    "Address Proof",
    "Income Proof (if applicable)",
    "Gold Purchase Invoice (if available)"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Coins className="w-16 h-16 mx-auto mb-6 text-finance-gold" />
            <h1 className="text-5xl font-bold mb-6">Gold Loans</h1>
            <p className="text-xl mb-8 opacity-90">
              Unlock the value of your gold with instant loans at competitive interest rates
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-finance-green text-white px-4 py-2 text-lg">
                Interest from 9.5% p.a.
              </Badge>
              <Badge className="bg-finance-gold text-white px-4 py-2 text-lg">
                Up to 85% of gold value
              </Badge>
              <Badge className="bg-white text-finance-blue px-4 py-2 text-lg">
                30-minute disbursal
              </Badge>
            </div>
            <Button size="lg" className="bg-finance-gold hover:bg-finance-gold-dark text-white">
              Apply for Gold Loan
            </Button>
          </div>
        </div>
      </section>

      {/* Gold Loan Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calculator className="w-12 h-12 mx-auto mb-4 text-finance-blue" />
              <h2 className="text-3xl font-bold mb-4">Gold Loan Calculator</h2>
              <p className="text-gray-600">Calculate your loan amount instantly</p>
            </div>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Gold Weight (grams)</label>
                    <Input
                      type="number"
                      value={goldWeight}
                      onChange={(e) => setGoldWeight(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Gold Purity (Karat)</label>
                    <select 
                      value={goldPurity} 
                      onChange={(e) => setGoldPurity(Number(e.target.value))}
                      className="w-full p-3 border rounded-md text-lg"
                    >
                      <option value={18}>18 Karat</option>
                      <option value={20}>20 Karat</option>
                      <option value={22}>22 Karat</option>
                      <option value={24}>24 Karat</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Gold Rate (per gram)</label>
                    <Input
                      type="number"
                      value={goldRate}
                      disabled
                      className="text-lg bg-gray-100"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Loan Amount (75% LTV)</p>
                    <p className="text-4xl font-bold text-finance-blue">₹{calculateLoanAmount().toLocaleString()}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Gold Value: ₹{(goldWeight * goldRate * (goldPurity / 24)).toLocaleString()}
                    </p>
                    <Button className="mt-4 bg-finance-gold hover:bg-finance-gold-dark">
                      Get Loan Against This Gold
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gold Loan Schemes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gold Loan Schemes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of gold loan products designed to meet your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {goldLoanSchemes.map((scheme, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-finance-blue">{scheme.name}</CardTitle>
                  <p className="text-gray-600">{scheme.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-finance-green">{scheme.rate}</div>
                      <div className="text-xs text-gray-500">Interest Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-finance-blue">{scheme.tenure}</div>
                      <div className="text-xs text-gray-500">Max Tenure</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-finance-gold">{scheme.ltv}</div>
                      <div className="text-xs text-gray-500">LTV Ratio</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {scheme.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-finance-green mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-finance-blue hover:bg-finance-blue-dark">
                    Choose {scheme.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Details and Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="process" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="process">Loan Process</TabsTrigger>
              <TabsTrigger value="gold-items">Accepted Gold</TabsTrigger>
              <TabsTrigger value="safety">Safety Measures</TabsTrigger>
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            </TabsList>
            
            <TabsContent value="process" className="mt-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Simple 4-Step Process</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {loanProcess.map((item, index) => {
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
            
            <TabsContent value="gold-items" className="mt-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Accepted Gold Items</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {acceptedGoldItems.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-finance-blue">{item.item}</h4>
                        <Badge variant="outline">{item.purity}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="safety" className="mt-8">
              <Card className="p-8">
                <div className="text-center mb-8">
                  <Shield className="w-16 h-16 mx-auto mb-4 text-finance-green" />
                  <h3 className="text-2xl font-bold mb-4">Your Gold is Safe with Us</h3>
                  <p className="text-gray-600">We ensure complete safety and security of your precious gold</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {safetyMeasures.map((measure, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Shield className="w-5 h-5 text-finance-green mr-3" />
                      <span>{measure}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="eligibility" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-finance-blue">Eligibility Criteria</h3>
                  <div className="space-y-3">
                    {eligibilityCriteria.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{item.criteria}:</span>
                        <span className="text-finance-blue">{item.requirement}</span>
                      </div>
                    ))}
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-finance-blue">Required Documents</h3>
                  <div className="space-y-3">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-finance-green mr-3" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GoldLoans;
