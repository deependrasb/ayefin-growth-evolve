
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, User, Calendar } from "lucide-react";

const MdDesk = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-finance-blue border-finance-blue">
              Leadership Message
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              From The MD's Desk
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A personal message from our Managing Director about our vision, values, and commitment to excellence.
            </p>
          </div>

          {/* MD Profile Card */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Image Section */}
                  <div className="lg:col-span-1 bg-finance-gradient p-8 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <User className="w-24 h-24 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Rajesh Kumar</h3>
                      <p className="text-lg opacity-90">Managing Director & CEO</p>
                      <div className="flex items-center justify-center mt-4 text-sm opacity-80">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Experience: 25+ Years</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <div className="flex items-start mb-6">
                      <Quote className="w-8 h-8 text-finance-blue mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                          Welcome to Ayefin
                        </h2>
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                          <p className="text-lg">
                            Dear Valued Customers, Partners, and Stakeholders,
                          </p>
                          <p>
                            It gives me immense pleasure to welcome you to Ayefin, where we have been transforming financial dreams into reality for over two decades. As the Managing Director, I am proud to lead a team that is committed to providing innovative, reliable, and customer-centric financial solutions.
                          </p>
                          <p>
                            At Ayefin, we believe that every individual and business deserves access to quality financial services that can help them achieve their goals. Whether you're looking to purchase your dream home, expand your business, secure your family's future, or build wealth for tomorrow, we are here to support you every step of the way.
                          </p>
                          <p>
                            Our journey began with a simple yet powerful vision: to democratize financial services and make them accessible to all segments of society. Today, we stand as a testament to that vision, having served over 50,000 customers and disbursed loans worth ₹500+ crores.
                          </p>
                          <p>
                            What sets us apart is our unwavering commitment to transparency, integrity, and customer satisfaction. We leverage cutting-edge technology to streamline processes while maintaining the human touch that our customers value. Our team of experienced professionals works tirelessly to understand your unique needs and provide tailored solutions.
                          </p>
                          <p>
                            As we look towards the future, we remain committed to innovation and excellence. We are continuously expanding our product portfolio, enhancing our digital capabilities, and strengthening our presence to serve you better.
                          </p>
                          <p className="font-semibold text-finance-blue">
                            Thank you for placing your trust in Ayefin. Together, let's build a financially secure future.
                          </p>
                          <div className="pt-6 border-t border-gray-200">
                            <p className="font-semibold text-gray-900">Warm regards,</p>
                            <p className="text-2xl font-bold text-finance-blue mt-2">Rajesh Kumar</p>
                            <p className="text-gray-600">Managing Director & CEO</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-finance-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">
                  "To be India's most trusted and innovative financial services company, empowering individuals and businesses to achieve their financial aspirations through accessible, transparent, and customer-centric solutions."
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-finance-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">
                  "To provide comprehensive financial solutions that are simple, swift, and secure, while maintaining the highest standards of ethics and transparency in all our interactions."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MdDesk;
