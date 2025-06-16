
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, Linkedin } from "lucide-react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Managing Director & CEO",
      experience: "25+ Years",
      expertise: "Strategic Leadership, Financial Services",
      email: "rajesh.kumar@ayefin.com",
      phone: "+91 98765 43210",
      description: "Visionary leader with extensive experience in financial services and business strategy."
    },
    {
      name: "Priya Sharma",
      position: "Chief Financial Officer",
      experience: "20+ Years",
      expertise: "Financial Management, Risk Assessment",
      email: "priya.sharma@ayefin.com",
      phone: "+91 98765 43211",
      description: "Expert in financial planning, risk management, and regulatory compliance."
    },
    {
      name: "Amit Patel",
      position: "Chief Technology Officer",
      experience: "18+ Years",
      expertise: "Digital Transformation, Fintech Solutions",
      email: "amit.patel@ayefin.com",
      phone: "+91 98765 43212",
      description: "Technology innovator driving digital transformation and customer experience."
    },
    {
      name: "Sunita Gupta",
      position: "Head of Operations",
      experience: "22+ Years",
      expertise: "Operations Management, Process Optimization",
      email: "sunita.gupta@ayefin.com",
      phone: "+91 98765 43213",
      description: "Operations excellence leader ensuring smooth business processes and customer satisfaction."
    },
    {
      name: "Vikram Singh",
      position: "Head of Sales & Marketing",
      experience: "16+ Years",
      expertise: "Sales Strategy, Customer Acquisition",
      email: "vikram.singh@ayefin.com",
      phone: "+91 98765 43214",
      description: "Sales and marketing strategist focused on customer growth and market expansion."
    },
    {
      name: "Kavya Nair",
      position: "Head of Human Resources",
      experience: "14+ Years",
      expertise: "Talent Management, Organizational Development",
      email: "kavya.nair@ayefin.com",
      phone: "+91 98765 43215",
      description: "HR leader dedicated to building a strong organizational culture and talent development."
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
              Leadership Team
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who drive Ayefin's success and are committed to serving our customers with excellence.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 shadow-lg">
                <CardContent className="p-6">
                  {/* Profile Image Placeholder */}
                  <div className="w-32 h-32 bg-finance-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                    <User className="w-16 h-16 text-white" />
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-finance-blue font-semibold mb-1">{member.position}</p>
                    <p className="text-sm text-gray-600 mb-4">Experience: {member.experience}</p>
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 mb-4">
                      {member.expertise}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                    {member.description}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-3 text-finance-blue" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-3 text-finance-blue" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex justify-center pt-2">
                      <button className="p-2 text-finance-blue hover:bg-finance-blue hover:text-white rounded-full transition-colors duration-200">
                        <Linkedin className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Culture Section */}
          <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture & Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                At Ayefin, we foster a culture of excellence, integrity, and innovation that drives our success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-finance-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
                <p className="text-gray-600">We prioritize our customers' needs and work tirelessly to exceed their expectations.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-finance-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-600">We maintain the highest ethical standards in all our business practices.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-finance-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">We embrace innovation to provide better solutions and enhance customer experience.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurTeam;
