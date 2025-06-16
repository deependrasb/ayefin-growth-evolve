
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users2, Globe, TrendingUp, ArrowRight, Star } from "lucide-react";

const TrustIndicators = () => {
  const partners = [
    "Reserve Bank of India",
    "SIDBI",
    "India SME Technology Services",
    "CRISIL Ratings",
    "MFIN Association",
    "TransUnion CIBIL"
  ];

  const mediaFeatures = [
    { outlet: "Economic Times", title: "Fintech Innovation Leader" },
    { outlet: "Business Standard", title: "Fastest Growing NBFC" },
    { outlet: "Mint", title: "Digital Lending Pioneer" },
    { outlet: "Forbes India", title: "Financial Inclusion Champion" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Trust Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by <span className="gradient-text">Millions</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Building trust through transparency, compliance, and exceptional service delivery
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-finance-blue mb-2">99.9%</div>
              <div className="text-gray-600">Service Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-finance-green mb-2">4.8★</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-finance-gold mb-2">0.02%</div>
              <div className="text-gray-600">Default Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-finance-blue mb-2">24hrs</div>
              <div className="text-gray-600">Avg. Approval Time</div>
            </div>
          </div>
        </div>

        {/* Regulatory Partners */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-finance-blue/5 to-finance-green/5 border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Building2 className="w-12 h-12 mx-auto mb-4 text-finance-blue" />
                <h3 className="text-2xl font-bold mb-2">Regulatory & Strategic Partners</h3>
                <p className="text-gray-600">Licensed, regulated, and partnered with leading institutions</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {partners.map((partner, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-sm font-medium text-gray-700">{partner}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Media Coverage */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Globe className="w-12 h-12 mx-auto mb-4 text-finance-green" />
            <h3 className="text-2xl font-bold mb-2">Media Recognition</h3>
            <p className="text-gray-600">Featured in leading business publications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Star className="w-8 h-8 mx-auto mb-3 text-finance-gold" />
                  <h4 className="font-bold text-finance-blue mb-2">{feature.outlet}</h4>
                  <p className="text-sm text-gray-600">{feature.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-finance-blue to-finance-green rounded-2xl p-12 text-white">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our growth story as we continue to expand and create value for all stakeholders
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-finance-blue hover:bg-gray-100">
              Investor Relations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-finance-blue">
              Download Investor Deck
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
