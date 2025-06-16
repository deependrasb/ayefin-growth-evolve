
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Building, Target, Award, Shield } from "lucide-react";

const InvestorHighlights = () => {
  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8 text-finance-green" />,
      title: "Revenue Growth",
      value: "185%",
      subtitle: "YoY Growth Rate",
      description: "Consistent double-digit growth over 5 consecutive years"
    },
    {
      icon: <Users className="w-8 h-8 text-finance-blue" />,
      title: "Active Customers",
      value: "2.5L+",
      subtitle: "Across 28 States",
      description: "Rapidly expanding customer base with 99.2% retention rate"
    },
    {
      icon: <Building className="w-8 h-8 text-finance-gold" />,
      title: "AUM",
      value: "₹2,500 Cr",
      subtitle: "Assets Under Management",
      description: "Diversified portfolio with strong risk management"
    },
    {
      icon: <Target className="w-8 h-8 text-finance-green" />,
      title: "Net Profit Margin",
      value: "22.5%",
      subtitle: "Industry Leading",
      description: "Sustainable profitability with operational excellence"
    }
  ];

  const achievements = [
    "RBI Licensed NBFC with strong regulatory compliance",
    "Credit Rating: AA- (Stable Outlook) by CRISIL",
    "ISO 27001:2013 certified for information security",
    "Member of MFIN and recognized by leading industry bodies"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-finance-blue/10 rounded-full px-6 py-2 mb-4">
            <Award className="w-5 h-5 text-finance-blue" />
            <span className="text-finance-blue font-semibold">Investment Grade Performance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Driving Exceptional <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong fundamentals, consistent growth, and market-leading performance make us an attractive investment opportunity
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-finance-blue/5 to-finance-green/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-3 p-3 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform">
                  {metric.icon}
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">{metric.value}</CardTitle>
                <p className="text-lg font-semibold text-finance-blue">{metric.title}</p>
                <p className="text-sm text-gray-500">{metric.subtitle}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <Shield className="w-12 h-12 mx-auto mb-4 text-finance-blue" />
            <h3 className="text-2xl font-bold mb-2">Regulatory Excellence & Recognition</h3>
            <p className="text-gray-600">Trusted by regulators, rated by agencies, recognized by industry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-finance-green rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorHighlights;
