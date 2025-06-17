
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe, TrendingUp, Shield, Heart, Briefcase, GraduationCap, Coffee } from "lucide-react";

const Insight = () => {
  const jobOpenings = [
    {
      title: "Senior Software Engineer",
      department: "Technology",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-5 years"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Mumbai",
      type: "Full-time",
      experience: "4-6 years"
    },
    {
      title: "Business Analyst",
      department: "Operations",
      location: "Delhi",
      type: "Full-time",
      experience: "2-4 years"
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-5 years"
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities and skill development"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Recognition Programs",
      description: "Performance-based rewards and recognition"
    }
  ];

  const impactStats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "50,000+",
      label: "Lives Impacted"
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "25+",
      label: "Cities Reached"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "₹500+ Cr",
      label: "Financial Support"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      value: "15+",
      label: "CSR Projects"
    }
  ];

  const socialInitiatives = [
    {
      title: "Financial Literacy Program",
      description: "Educating rural communities about financial planning and digital banking",
      beneficiaries: "10,000+ people trained"
    },
    {
      title: "Women Entrepreneur Support",
      description: "Special loan schemes and mentorship for women-led businesses",
      beneficiaries: "2,500+ women entrepreneurs"
    },
    {
      title: "Education Support Initiative",
      description: "Scholarships and educational loans for underprivileged students",
      beneficiaries: "1,200+ students supported"
    },
    {
      title: "Healthcare Access Program",
      description: "Medical emergency loans and healthcare financing solutions",
      beneficiaries: "5,000+ families helped"
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
              Careers & Impact
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Insight
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover career opportunities at Ayefin and learn about our social impact initiatives that are making a difference in communities across India.
            </p>
          </div>

          {/* Careers Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Be part of a dynamic team that's revolutionizing financial services in India. Grow your career while making a meaningful impact.
              </p>
            </div>

            {/* Why Work With Us */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-finance-blue mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>

            {/* Current Openings */}
            <div className="max-w-4xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Current Openings</h3>
              <div className="space-y-4">
                {jobOpenings.map((job, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h4>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant="outline" className="text-finance-blue border-finance-blue">
                              {job.department}
                            </Badge>
                            <Badge variant="outline">
                              {job.location}
                            </Badge>
                            <Badge variant="outline">
                              {job.type}
                            </Badge>
                          </div>
                          <p className="text-gray-600">Experience: {job.experience}</p>
                        </div>
                        <Button className="finance-button text-white">
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button className="finance-button text-white" size="lg">
                View All Openings
              </Button>
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Social Impact</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Beyond financial services, we're committed to creating positive change in the communities we serve.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {impactStats.map((stat, index) => (
                <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-finance-blue mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </Card>
              ))}
            </div>

            {/* Social Initiatives */}
            <div className="grid md:grid-cols-2 gap-8">
              {socialInitiatives.map((initiative, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{initiative.title}</h4>
                    <p className="text-gray-600 mb-4">{initiative.description}</p>
                    <div className="text-finance-blue font-semibold">{initiative.beneficiaries}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-finance-gradient rounded-2xl p-8 lg:p-12 text-white text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
            <p className="text-lg opacity-90 mb-8">
              Join Ayefin and be part of a team that's not just building a business, but transforming lives and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-white text-finance-blue hover:bg-gray-100" size="lg">
                Explore Careers
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" size="lg">
                Learn About Our Impact
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Insight;
