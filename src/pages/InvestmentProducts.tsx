
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, PieChart, Shield, Target, Star, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const InvestmentProducts = () => {
  const mutualFunds = [
    {
      name: "Equity Growth Fund",
      category: "Large Cap",
      returns: "15.2%",
      risk: "Moderate",
      minInvestment: "₹1,000",
      description: "Diversified equity fund focusing on large-cap stocks with consistent growth potential"
    },
    {
      name: "Balanced Advantage Fund",
      category: "Hybrid",
      returns: "12.8%",
      risk: "Low-Moderate",
      minInvestment: "₹500",
      description: "Dynamic asset allocation between equity and debt based on market conditions"
    },
    {
      name: "Tax Saver Fund",
      category: "ELSS",
      returns: "14.5%",
      risk: "Moderate-High",
      minInvestment: "₹500",
      description: "Equity-linked savings scheme with tax benefits under Section 80C"
    },
    {
      name: "Liquid Fund",
      category: "Debt",
      returns: "6.8%",
      risk: "Very Low",
      minInvestment: "₹1,000",
      description: "High liquidity fund for short-term investments with minimal risk"
    }
  ];

  const portfolioOptions = [
    {
      name: "Conservative Growth",
      allocation: "30% Equity, 70% Debt",
      expectedReturn: "8-10%",
      riskLevel: "Low",
      suitableFor: "Risk-averse investors, near retirement",
      icon: Shield
    },
    {
      name: "Balanced Growth",
      allocation: "60% Equity, 40% Debt",
      expectedReturn: "10-13%",
      riskLevel: "Moderate",
      suitableFor: "Medium-term goals, balanced risk appetite",
      icon: PieChart
    },
    {
      name: "Aggressive Growth",
      allocation: "80% Equity, 20% Debt",
      expectedReturn: "13-16%",
      riskLevel: "High",
      suitableFor: "Long-term wealth creation, high risk tolerance",
      icon: TrendingUp
    },
    {
      name: "Ultra Aggressive",
      allocation: "95% Equity, 5% Debt",
      expectedReturn: "15-20%",
      riskLevel: "Very High",
      suitableFor: "Young investors, long investment horizon",
      icon: BarChart3
    }
  ];

  const sipBenefits = [
    "Rupee Cost Averaging",
    "Power of Compounding",
    "Disciplined Investing",
    "Flexibility to increase/decrease",
    "Tax Benefits (ELSS funds)",
    "Professional Fund Management"
  ];

  const investmentGoals = [
    { goal: "Retirement Planning", timeframe: "15-30 years", recommendedFunds: "Equity + Debt Mix" },
    { goal: "Child's Education", timeframe: "10-15 years", recommendedFunds: "Balanced Funds" },
    { goal: "Wealth Creation", timeframe: "5-10 years", recommendedFunds: "Equity Funds" },
    { goal: "Tax Saving", timeframe: "3+ years", recommendedFunds: "ELSS Funds" },
    { goal: "Emergency Fund", timeframe: "Immediate", recommendedFunds: "Liquid Funds" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-finance-gold" />
            <h1 className="text-5xl font-bold mb-6">Investment Products</h1>
            <p className="text-xl mb-8 opacity-90">
              Build wealth systematically with our curated investment solutions and expert guidance
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-finance-green text-white px-4 py-2 text-lg">
                Returns up to 20%
              </Badge>
              <Badge className="bg-finance-gold text-white px-4 py-2 text-lg">
                SIP from ₹500/month
              </Badge>
              <Badge className="bg-white text-finance-blue px-4 py-2 text-lg">
                Expert Advisory
              </Badge>
            </div>
            <Button size="lg" className="bg-finance-gold hover:bg-finance-gold-dark text-white">
              Start Investing
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="mutual-funds" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="mutual-funds">Mutual Funds</TabsTrigger>
              <TabsTrigger value="portfolios">Portfolios</TabsTrigger>
              <TabsTrigger value="sip">SIP Benefits</TabsTrigger>
              <TabsTrigger value="goals">Investment Goals</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mutual-funds" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Top Performing Mutual Funds</h2>
                <p className="text-gray-600">Carefully selected funds across different categories</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {mutualFunds.map((fund, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-finance-blue">{fund.name}</CardTitle>
                          <Badge variant="outline" className="mt-1">{fund.category}</Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-finance-green">{fund.returns}</div>
                          <div className="text-sm text-gray-500">3Y Returns</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-gray-600 text-sm">{fund.description}</p>
                      <div className="flex justify-between">
                        <span className="text-sm">Risk Level:</span>
                        <span className="text-sm font-medium">{fund.risk}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Min Investment:</span>
                        <span className="text-sm font-medium text-finance-blue">{fund.minInvestment}</span>
                      </div>
                      <Button className="w-full bg-finance-blue hover:bg-finance-blue-dark">
                        Invest Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="portfolios" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Ready-Made Portfolios</h2>
                <p className="text-gray-600">Choose a portfolio that matches your risk profile</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {portfolioOptions.map((portfolio, index) => {
                  const IconComponent = portfolio.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center">
                        <IconComponent className="w-12 h-12 mx-auto mb-4 text-finance-blue" />
                        <CardTitle className="text-xl">{portfolio.name}</CardTitle>
                        <div className="flex justify-center gap-2 mt-2">
                          {[...Array(index + 1)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-finance-gold text-finance-gold" />
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-finance-green mb-2">
                            {portfolio.expectedReturn}
                          </div>
                          <div className="text-sm text-gray-500">Expected Annual Returns</div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Asset Allocation:</span>
                            <span className="text-sm font-medium">{portfolio.allocation}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Risk Level:</span>
                            <span className="text-sm font-medium">{portfolio.riskLevel}</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">{portfolio.suitableFor}</p>
                        <Button className="w-full bg-finance-green hover:bg-finance-green-dark">
                          Choose Portfolio
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="sip" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Why SIP (Systematic Investment Plan)?</h2>
                <p className="text-gray-600">Start your investment journey with as little as ₹500 per month</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-finance-blue">SIP Benefits</h3>
                  <div className="space-y-3">
                    {sipBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <Target className="w-4 h-4 text-finance-green mr-3" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-finance-blue">SIP Calculator Example</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Monthly SIP</div>
                        <div className="text-2xl font-bold text-finance-blue">₹5,000</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-600">10 Years</div>
                        <div className="text-lg font-bold text-finance-green">₹10.3 L</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600">20 Years</div>
                        <div className="text-lg font-bold text-finance-green">₹46.4 L</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 text-center">
                      *Assuming 12% annual returns
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="goals" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Investment Goals</h2>
                <p className="text-gray-600">Match your investments with your financial goals</p>
              </div>
              
              <div className="space-y-4">
                {investmentGoals.map((goal, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h4 className="font-bold text-finance-blue">{goal.goal}</h4>
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-gray-600">Time Frame</span>
                        <div className="font-medium">{goal.timeframe}</div>
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-gray-600">Recommended</span>
                        <div className="font-medium">{goal.recommendedFunds}</div>
                      </div>
                      <div className="text-center md:text-right">
                        <Button size="sm" className="bg-finance-blue hover:bg-finance-blue-dark">
                          Start Planning
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default InvestmentProducts;
