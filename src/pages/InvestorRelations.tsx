
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, TrendingUp, Users, Calendar, FileText, BarChart3 } from "lucide-react";

const InvestorRelations = () => {
  const financialHighlights = [
    { metric: "Total Assets", value: "₹2,500 Cr", growth: "+15%" },
    { metric: "Net Profit", value: "₹125 Cr", growth: "+22%" },
    { metric: "Loan Portfolio", value: "₹1,800 Cr", growth: "+18%" },
    { metric: "Customer Base", value: "2.5 Lakh", growth: "+25%" }
  ];

  const reports = [
    { title: "Annual Report 2023-24", date: "March 2024", type: "Annual Report" },
    { title: "Q4 Results 2023-24", date: "March 2024", type: "Quarterly Results" },
    { title: "Q3 Results 2023-24", date: "December 2023", type: "Quarterly Results" },
    { title: "Q2 Results 2023-24", date: "September 2023", type: "Quarterly Results" }
  ];

  const presentations = [
    { title: "Investor Presentation Q4 FY24", date: "April 2024" },
    { title: "AGM Presentation 2024", date: "March 2024" },
    { title: "Analyst Meet Presentation", date: "February 2024" }
  ];

  const announcements = [
    { title: "Board Meeting Outcome - Q4 Results", date: "April 15, 2024" },
    { title: "Disclosure under Regulation 30", date: "March 28, 2024" },
    { title: "Credit Rating Update", date: "March 10, 2024" },
    { title: "Appointment of New Director", date: "February 22, 2024" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-finance-blue via-finance-blue-light to-finance-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Investor Relations
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Transparent communication with our valued stakeholders and investors
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-finance-blue hover:bg-gray-100">
                Download Latest Report
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-finance-blue">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Financial Highlights</h2>
            <p className="text-lg text-gray-600">Key performance indicators for FY 2023-24</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialHighlights.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-finance-blue">{item.value}</CardTitle>
                  <CardDescription className="text-lg font-medium">{item.metric}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-finance-green" />
                    <span className="text-finance-green font-semibold">{item.growth}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="reports" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="reports">Financial Reports</TabsTrigger>
              <TabsTrigger value="presentations">Presentations</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
              <TabsTrigger value="governance">Governance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="reports" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Financial Reports</h3>
                <p className="text-gray-600">Access our latest financial reports and regulatory filings</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reports.map((report, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                      <FileText className="w-8 h-8 text-finance-blue" />
                      <div className="flex-1">
                        <CardTitle className="text-lg">{report.title}</CardTitle>
                        <CardDescription>{report.date} • {report.type}</CardDescription>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="presentations" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Investor Presentations</h3>
                <p className="text-gray-600">Download our latest investor presentations and meeting materials</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {presentations.map((presentation, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                      <BarChart3 className="w-8 h-8 text-finance-green" />
                      <div className="flex-1">
                        <CardTitle className="text-lg">{presentation.title}</CardTitle>
                        <CardDescription>{presentation.date}</CardDescription>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="announcements" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Corporate Announcements</h3>
                <p className="text-gray-600">Latest announcements and regulatory disclosures</p>
              </div>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                      <Calendar className="w-6 h-6 text-finance-blue" />
                      <div className="flex-1">
                        <CardTitle className="text-lg">{announcement.title}</CardTitle>
                        <CardDescription>{announcement.date}</CardDescription>
                      </div>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="governance" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Corporate Governance</h3>
                <p className="text-gray-600">Information about our board, policies, and governance practices</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-6 h-6" />
                      <span>Board of Directors</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Meet our experienced board members who guide our strategic direction
                    </p>
                    <Button variant="outline">View Board Details</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="w-6 h-6" />
                      <span>Policies & Codes</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Access our corporate policies, codes of conduct, and governance frameworks
                    </p>
                    <Button variant="outline">Download Policies</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-finance-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Investor Relations Contact
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            For investor queries, please contact our dedicated investor relations team
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-finance-blue hover:bg-gray-100">
              Contact IR Team
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-finance-blue">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorRelations;
