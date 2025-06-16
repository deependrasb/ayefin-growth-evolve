
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, TrendingUp, Users, Award, DollarSign, Calendar } from "lucide-react";

const OurInvestors = () => {
  const keyInvestors = [
    {
      name: "Strategic Capital Partners",
      type: "Private Equity",
      investment: "₹50 Crores",
      year: "2020",
      description: "Leading private equity firm focused on financial services sector growth."
    },
    {
      name: "India Growth Fund",
      type: "Venture Capital",
      investment: "₹35 Crores",
      year: "2019",
      description: "Prominent VC fund supporting innovative fintech companies in India."
    },
    {
      name: "Global Financial Ventures",
      type: "International Fund",
      investment: "₹25 Crores",
      year: "2021",
      description: "International investment fund with expertise in emerging markets."
    },
    {
      name: "Tech Innovation Capital",
      type: "Technology Fund",
      investment: "₹20 Crores",
      year: "2022",
      description: "Specialized fund investing in technology-driven financial solutions."
    }
  ];

  const fundingRounds = [
    {
      round: "Series A",
      amount: "₹15 Crores",
      year: "2019",
      investors: "India Growth Fund, Angel Investors"
    },
    {
      round: "Series B",
      amount: "₹35 Crores",
      year: "2020",
      investors: "Strategic Capital Partners, Existing Investors"
    },
    {
      round: "Series C",
      amount: "₹50 Crores",
      year: "2021",
      investors: "Global Financial Ventures, Strategic Partners"
    },
    {
      round: "Growth Round",
      amount: "₹30 Crores",
      year: "2022",
      investors: "Tech Innovation Capital, Multiple Investors"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-finance-blue border-finance-blue">
              Investment Partners
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Investors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Backed by leading investors who believe in our vision of transforming financial services in India.
            </p>
          </div>

          {/* Investment Summary */}
          <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <DollarSign className="w-12 h-12 text-finance-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">₹130+ Cr</h3>
              <p className="text-gray-600">Total Funding Raised</p>
            </Card>
            
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-finance-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Investment Partners</p>
            </Card>
            
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <TrendingUp className="w-12 h-12 text-finance-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">4</h3>
              <p className="text-gray-600">Funding Rounds</p>
            </Card>
            
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Calendar className="w-12 h-12 text-finance-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2019</h3>
              <p className="text-gray-600">First Investment</p>
            </Card>
          </div>

          {/* Key Investors */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Investment Partners</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our strategic investors bring valuable expertise and support our growth journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {keyInvestors.map((investor, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-finance-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{investor.name}</h3>
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge variant="outline" className="text-finance-blue border-finance-blue">
                            {investor.type}
                          </Badge>
                          <span className="text-sm text-gray-600">{investor.year}</span>
                        </div>
                        <p className="text-2xl font-bold text-finance-green mb-3">{investor.investment}</p>
                        <p className="text-gray-600 leading-relaxed">{investor.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Funding Timeline */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Funding Timeline</h2>
              <p className="text-gray-600">Our funding journey and growth milestones over the years.</p>
            </div>

            <div className="space-y-8">
              {fundingRounds.map((round, index) => (
                <div key={index} className="flex items-center space-x-8 group">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-lg font-bold text-finance-blue">{round.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-finance-gradient rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                  <div className="flex-1 bg-gray-50 rounded-lg p-6 group-hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{round.round}</h3>
                      <span className="text-2xl font-bold text-finance-green">{round.amount}</span>
                    </div>
                    <p className="text-gray-600">{round.investors}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Investors Choose Us */}
          <div className="bg-finance-gradient rounded-2xl p-8 lg:p-12 text-white max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Investors Choose Ayefin</h2>
              <p className="text-lg opacity-90">Strong fundamentals and growth potential that attract quality investors.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-3">Strong Growth</h3>
                <p className="opacity-80">Consistent year-over-year growth in revenue and customer base.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-3">Market Leadership</h3>
                <p className="opacity-80">Recognized leader in innovative financial solutions and customer service.</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-3">Experienced Team</h3>
                <p className="opacity-80">Led by seasoned professionals with deep industry expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurInvestors;
