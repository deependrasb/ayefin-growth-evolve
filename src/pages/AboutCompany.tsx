
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, TrendingUp, Shield, Award, Calendar } from "lucide-react";

const AboutCompany = () => {
  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Ayefin was established with a vision to democratize financial services"
    },
    {
      year: "2021",
      title: "First 10,000 Customers",
      description: "Reached our first major milestone of serving 10,000 customers"
    },
    {
      year: "2022",
      title: "₹100 Crores Disbursed",
      description: "Successfully disbursed over ₹100 crores in loans across various categories"
    },
    {
      year: "2023",
      title: "50,000+ Customers",
      description: "Expanded our customer base to over 50,000 satisfied customers"
    },
    {
      year: "2024",
      title: "₹500+ Crores Portfolio",
      description: "Built a robust loan portfolio exceeding ₹500 crores"
    }
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "50,000+",
      label: "Happy Customers"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "₹500+ Cr",
      label: "Loans Disbursed"
    },
    {
      icon: <Building className="w-8 h-8" />,
      value: "25+",
      label: "Cities Served"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "99.2%",
      label: "Customer Satisfaction"
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
              Our Story
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Our Company
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the journey of Ayefin - from our humble beginnings to becoming a trusted name in financial services across India.
            </p>
          </div>

          {/* Company Overview */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Founded in 2020, Ayefin emerged with a clear mission: to make financial services accessible, transparent, and customer-centric. What started as a small team with big dreams has evolved into one of India's fastest-growing fintech companies.
                      </p>
                      <p>
                        Our journey has been marked by innovation, customer focus, and unwavering commitment to excellence. We have consistently pushed the boundaries of traditional banking, leveraging technology to create seamless financial experiences.
                      </p>
                      <p>
                        Today, we stand proud as a company that has transformed the lives of over 50,000 customers, disbursed loans worth ₹500+ crores, and established a strong presence across 25+ cities in India.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-finance-blue mb-3">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Milestones</h2>
              <p className="text-gray-600">Key achievements that define our growth journey</p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-8 group">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl font-bold text-finance-blue">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 bg-finance-gradient rounded-full group-hover:scale-125 transition-transform duration-200 mt-1"></div>
                  <div className="flex-1 bg-white rounded-lg p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-finance-gradient rounded-2xl p-8 lg:p-12 text-white max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
              <p className="text-lg opacity-90">The core principles that guide our every decision</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-3">Trust & Security</h3>
                <p className="opacity-80">We prioritize the security of your financial data and maintain the highest standards of trust.</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-3">Customer Centricity</h3>
                <p className="opacity-80">Every decision we make is driven by what's best for our customers and their financial well-being.</p>
              </div>

              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-3">Continuous Innovation</h3>
                <p className="opacity-80">We constantly evolve our technology and services to provide better financial solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutCompany;
