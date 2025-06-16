
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Transform Your Financial Future",
      subtitle: "Unlock opportunities with our comprehensive financial solutions",
      image: "/api/placeholder/800/600"
    },
    {
      title: "Smart Investment Solutions",
      subtitle: "Grow your wealth with expert-guided investment strategies",
      image: "/api/placeholder/800/600"
    },
    {
      title: "Business Growth Partner",
      subtitle: "Fuel your business expansion with tailored financing options",
      image: "/api/placeholder/800/600"
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

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="finance-button text-white text-lg px-8 py-4 group">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg px-8 py-4">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-gray-300 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">₹500Cr+</div>
                <div className="text-gray-300 text-sm">Loans Disbursed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right content - Loan Calculator */}
          <div className="lg:pl-12">
            <Card className="glass-effect border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Quick Loan Calculator</h3>
                    <p className="text-gray-300">Get instant loan estimates</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Loan Type</label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select loan type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal">Personal Loan</SelectItem>
                          <SelectItem value="business">Business Loan</SelectItem>
                          <SelectItem value="home">Home Loan</SelectItem>
                          <SelectItem value="gold">Gold Loan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Loan Amount (₹)</label>
                      <Input 
                        type="number" 
                        placeholder="Enter amount"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Tenure (Months)</label>
                      <Input 
                        type="number" 
                        placeholder="Enter tenure"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <Button className="w-full finance-button text-white text-lg py-3">
                      Calculate EMI
                    </Button>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-300">Estimated EMI</div>
                      <div className="text-2xl font-bold text-white">₹ 8,456</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features bar */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <TrendingUp className="w-8 h-8 text-finance-green" />
              <div>
                <div className="text-white font-semibold">Quick Approval</div>
                <div className="text-gray-300 text-sm">In 24 hours</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-finance-blue" />
              <div>
                <div className="text-white font-semibold">Secure Process</div>
                <div className="text-gray-300 text-sm">Bank-grade security</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-finance-gold" />
              <div>
                <div className="text-white font-semibold">Instant Disbursal</div>
                <div className="text-gray-300 text-sm">Same day funding</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Award className="w-8 h-8 text-finance-green" />
              <div>
                <div className="text-white font-semibold">Best Rates</div>
                <div className="text-gray-300 text-sm">Competitive pricing</div>
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
