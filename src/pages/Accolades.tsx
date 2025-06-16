
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star, Medal, Calendar, Users } from "lucide-react";

const Accolades = () => {
  const awards = [
    {
      title: "Best Fintech Company of the Year",
      organization: "Indian Financial Awards",
      year: "2023",
      category: "Industry Recognition",
      description: "Recognized for innovation in financial technology and customer service excellence.",
      icon: <Trophy className="w-8 h-8" />
    },
    {
      title: "Excellence in Customer Service",
      organization: "Banking & Finance Excellence Awards",
      year: "2023",
      category: "Customer Service",
      description: "Awarded for outstanding customer satisfaction and service quality.",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "Top 50 Financial Services Companies",
      organization: "Business Today",
      year: "2022",
      category: "Business Recognition",
      description: "Listed among the top 50 financial services companies in India.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Digital Innovation Award",
      organization: "Fintech India Summit",
      year: "2022",
      category: "Technology",
      description: "Recognized for implementing cutting-edge digital solutions in financial services.",
      icon: <Medal className="w-8 h-8" />
    },
    {
      title: "Best Employer in Financial Services",
      organization: "HR Excellence Awards",
      year: "2021",
      category: "HR & Culture",
      description: "Acknowledged for creating an excellent workplace culture and employee satisfaction.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Emerging Company of the Year",
      organization: "Startup India Awards",
      year: "2020",
      category: "Startup Recognition",
      description: "Recognized as one of the most promising emerging companies in the fintech sector.",
      icon: <Star className="w-8 h-8" />
    }
  ];

  const certifications = [
    {
      title: "ISO 27001:2013",
      description: "Information Security Management System",
      year: "2023"
    },
    {
      title: "ISO 9001:2015",
      description: "Quality Management System",
      year: "2022"
    },
    {
      title: "RBI NBFC License",
      description: "Reserve Bank of India Registration",
      year: "2019"
    },
    {
      title: "SEBI Registration",
      description: "Securities and Exchange Board of India",
      year: "2020"
    }
  ];

  const achievements = [
    {
      metric: "50,000+",
      description: "Happy Customers Served",
      icon: <Users className="w-8 h-8 text-finance-blue" />
    },
    {
      metric: "₹500+ Cr",
      description: "Total Loans Disbursed",
      icon: <Trophy className="w-8 h-8 text-finance-blue" />
    },
    {
      metric: "99.2%",
      description: "Customer Satisfaction Rate",
      icon: <Star className="w-8 h-8 text-finance-blue" />
    },
    {
      metric: "4.8/5",
      description: "Average Customer Rating",
      icon: <Award className="w-8 h-8 text-finance-blue" />
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
              Recognition & Awards
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Accolades
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and prestigious organizations.
            </p>
          </div>

          {/* Key Achievements */}
          <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{achievement.metric}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </Card>
            ))}
          </div>

          {/* Awards Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our dedication to excellence has earned us recognition from leading industry bodies and organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {awards.map((award, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-finance-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                          {award.icon}
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-finance-blue border-finance-blue mb-2">
                          {award.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-1" />
                          {award.year}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-finance-blue transition-colors">
                      {award.title}
                    </h3>
                    
                    <p className="text-finance-blue font-semibold mb-3">{award.organization}</p>
                    
                    <p className="text-gray-600 leading-relaxed">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
              <p className="text-gray-600">We maintain the highest standards of compliance and quality assurance.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-xl hover:border-finance-blue transition-colors group">
                  <div className="w-16 h-16 bg-finance-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{cert.description}</p>
                  <div className="flex items-center justify-center text-xs text-finance-blue">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition Timeline */}
          <div className="bg-finance-gradient rounded-2xl p-8 lg:p-12 text-white max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey of Excellence</h2>
              <p className="text-lg opacity-90">Milestones that mark our commitment to excellence and innovation.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2019</div>
                <h3 className="text-xl font-semibold mb-3">Foundation</h3>
                <p className="opacity-80">Started our journey with RBI NBFC license and a vision to transform financial services.</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2020-22</div>
                <h3 className="text-xl font-semibold mb-3">Growth</h3>
                <p className="opacity-80">Rapid expansion, multiple awards, and recognition as an emerging fintech leader.</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2023</div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="opacity-80">Achieved industry leadership with multiple prestigious awards and certifications.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accolades;
