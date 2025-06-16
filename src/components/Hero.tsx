
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Shield, Clock, Award, Building, Users } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "India's Next Financial Powerhouse",
      subtitle: "Transforming financial services with technology and innovation",
      highlight: "IPO Ready"
    },
    {
      title: "Sustainable Growth, Exceptional Returns",
      subtitle: "185% YoY growth with industry-leading profitability",
      highlight: "Investment Grade"
    },
    {
      title: "Expanding Horizons, Creating Value",
      subtitle: "Building India's most trusted financial ecosystem",
      highlight: "Market Leader"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-finance-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-finance-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-finance-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Stock ticker style banner */}
      <div className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-white/20 py-2 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm font-medium">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-finance-green rounded-full animate-pulse"></div>
              <span className="text-finance-green">Market Cap: ₹5,200 Cr</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-finance-blue" />
              <span className="text-finance-blue">Revenue Growth: +185%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-finance-gold" />
              <span className="text-finance-gold">Credit Rating: AA-</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-40 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-finance-gold/20 rounded-full px-6 py-2 text-finance-gold font-semibold">
                <Building className="w-5 h-5" />
                <span>{slides[currentSlide].highlight}</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="finance-button text-white text-lg px-8 py-4 group">
                Investor Relations
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg px-8 py-4">
                Download Investor Deck
              </Button>
            </div>

            {/* Enhanced Stats for Investors */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">₹2,500Cr</div>
                <div className="text-gray-300 text-sm">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2.5L+</div>
                <div className="text-gray-300 text-sm">Active Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">22.5%</div>
                <div className="text-gray-300 text-sm">Net Profit Margin</div>
              </div>
            </div>
          </div>

          {/* Right content - Enhanced Investment Calculator */}
          <div className="lg:pl-12">
            <Card className="glass-effect border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 bg-finance-green/20 rounded-full px-4 py-2 mb-4">
                      <Users className="w-4 h-4 text-finance-green" />
                      <span className="text-finance-green font-semibold text-sm">Investor Portal</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Investment Calculator</h3>
                    <p className="text-gray-300">Calculate potential returns</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Investment Type</label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select investment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="equity">Equity Shares</SelectItem>
                          <SelectItem value="bonds">Corporate Bonds</SelectItem>
                          <SelectItem value="mutual">Mutual Funds</SelectItem>
                          <SelectItem value="fixed">Fixed Deposits</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Investment Amount (₹)</label>
                      <Input 
                        type="number" 
                        placeholder="Enter amount"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Investment Period (Years)</label>
                      <Input 
                        type="number" 
                        placeholder="Enter years"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <Button className="w-full finance-button text-white text-lg py-3">
                      Calculate Returns
                    </Button>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-300">Projected Annual Return</div>
                      <div className="text-2xl font-bold text-white">18.5%</div>
                      <div className="text-xs text-gray-400 mt-1">*Based on historical performance</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Features bar for investors */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <TrendingUp className="w-8 h-8 text-finance-green" />
              <div>
                <div className="text-white font-semibold">RBI Licensed</div>
                <div className="text-gray-300 text-sm">NBFC-ICC</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-finance-blue" />
              <div>
                <div className="text-white font-semibold">AA- Rated</div>
                <div className="text-gray-300 text-sm">CRISIL Rating</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-finance-gold" />
              <div>
                <div className="text-white font-semibold">5+ Years</div>
                <div className="text-gray-300 text-sm">Profitable operations</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Award className="w-8 h-8 text-finance-green" />
              <div>
                <div className="text-white font-semibold">0.02% NPA</div>
                <div className="text-gray-300 text-sm">Industry leading</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
